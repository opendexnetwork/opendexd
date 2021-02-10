import { ServiceError, status } from '@grpc/grpc-js';
import { Arguments, Argv } from 'yargs';
import { XudClient } from 'lib/proto/opendexrpc_grpc_pb';
import * as opendexrpc from '../../proto/opendexrpc_pb';
import { setTimeoutPromise } from '../../utils/utils';
import { loadXudClient } from '../command';

export const command = 'streamorders [existing]';

export const describe = 'stream order added, removed, and swapped events (DEMO)';

export const builder = (argv: Argv) =>
  argv.option('existing', {
    description: 'whether to return existing orders',
    type: 'boolean',
    default: true,
  });

export const handler = async (argv: Arguments) => {
  await ensureConnection(argv, true);
};

let client: XudClient;

const ensureConnection = async (argv: Arguments, printError?: boolean) => {
  if (!client) {
    client = await loadXudClient(argv);
  }
  client.waitForReady(Date.now() + 3000, (error?: Error) => {
    if (error) {
      if (error.message === 'Failed to connect before the deadline') {
        console.error(`could not connect to opendex at ${argv.rpchost}:${argv.rpcport}, is opendex running?`);
        process.exit(1);
      }

      if (printError) console.error(`${error.name}: ${error.message}`);
      setTimeout(ensureConnection.bind(undefined, argv, printError), 3000);
    } else {
      console.log('Successfully connected, subscribing for orders');
      streamOrders(argv);
    }
  });
};

const streamOrders = (argv: Arguments<any>) => {
  const ordersReqeust = new opendexrpc.SubscribeOrdersRequest();
  ordersReqeust.setExisting(argv.existing);
  const ordersSubscription = client.subscribeOrders(ordersReqeust);
  ordersSubscription.on('data', (orderUpdate: opendexrpc.OrderUpdate) => {
    if (orderUpdate.getOrder() !== undefined) {
      console.log(`Order added: ${JSON.stringify(orderUpdate.getOrder()!.toObject())}`);
    } else if (orderUpdate.getOrderRemoval() !== undefined) {
      console.log(`Order removed: ${JSON.stringify(orderUpdate.getOrderRemoval()!.toObject())}`);
    }
  });

  // adding end, close, error events only once,
  // since they'll be thrown for three of subscriptions in the corresponding cases, catching once is enough.
  ordersSubscription.on('end', reconnect.bind(undefined, argv));
  ordersSubscription.on('error', async (err: ServiceError) => {
    if (err.code === status.UNIMPLEMENTED) {
      console.error(
        "opendexd is locked, run 'opendex-cli unlock', 'opendex-cli create', or 'opendex-cli restore' then try again",
      );
      process.exit(1);
    }
    console.warn(`Unexpected error occured: ${err.message}, reconnecting in 1 second`);
    await setTimeoutPromise(1000);
    await ensureConnection(argv);
  });

  const swapsRequest = new opendexrpc.SubscribeSwapsRequest();
  swapsRequest.setIncludeTaker(true);
  const swapsSubscription = client.subscribeSwaps(swapsRequest);
  swapsSubscription.on('data', (swapSuccess: opendexrpc.SwapSuccess) => {
    console.log(`Order swapped: ${JSON.stringify(swapSuccess.toObject())}`);
  });

  const swapsAcceptedRequest = new opendexrpc.SubscribeSwapsAcceptedRequest();
  const swapsAcceptedSubscription = client.subscribeSwapsAccepted(swapsAcceptedRequest);
  swapsAcceptedSubscription.on('data', (swapAccepted: opendexrpc.SwapAccepted) => {
    console.log(`Swap deal accepted: ${JSON.stringify(swapAccepted.toObject())}`);
  });

  const swapFailuresSubscription = client.subscribeSwapFailures(swapsRequest);
  swapFailuresSubscription.on('data', (swapFailure: opendexrpc.SwapFailure) => {
    console.log(`Swap failed: ${JSON.stringify(swapFailure.toObject())}`);
  });

  // prevent exiting and do nothing, it's already caught above.
  swapsSubscription.on('error', () => {});
  swapsAcceptedSubscription.on('error', () => {});
  swapFailuresSubscription.on('error', () => {});
};

const reconnect = async (argv: Arguments) => {
  console.log('Stream has closed, trying to reconnect');
  await ensureConnection(argv, false);
};

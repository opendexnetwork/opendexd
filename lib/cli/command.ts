import * as grpc from '@grpc/grpc-js';
import fs from 'fs';
import path from 'path';
import { Arguments } from 'yargs';
import Config from '../Config';
import * as openDEXrpc from '../proto/opendexrpc_grpc_pb';

// @ts-ignore
const XudClient = grpc.makeClientConstructor(openDEXrpc['opendexrpc.Xud'], 'XudService');
// @ts-ignore
const XudInitClient = grpc.makeClientConstructor(openDEXrpc['opendexrpc.XudInit'], 'XudInitService');

/**
 * Attempts to load the opendex configuration file to dynamically determine the
 * port and interface that opendex is listening for rpc calls on as well as the
 * tls cert path, if arguments specifying these parameters were not provided.
 * @param argv the command line arguments
 */
const loadXudConfig = async (argv: Arguments<any>) => {
  const config = new Config();
  try {
    await config.load({
      opendexdir: argv.opendexdir,
      rpc: {
        port: argv.rpcport,
        host: argv.rpchost,
      },
    });
  } catch (err) {
    // if we can't load the config file, we should alert the user but continue
    // on to attempt the call with the commands args or default config values
    console.error(err);
  }

  // for any args that were not set, we update them to the values we
  // determined by loading the config
  argv.opendexdir = argv.opendexdir ?? config.opendexdir;
  argv.rpcport = argv.rpcport ?? config.rpc.port;
  if (argv.rpchost === undefined) {
    argv.rpchost =
      config.rpc.host === '0.0.0.0' || config.rpc.host === '::'
        ? 'localhost' // if opendex is listening on any address, try reaching it with localhost
        : config.rpc.host;
  }
};

const getTlsCert = (certPath: string) => {
  try {
    return fs.readFileSync(certPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw `tls cert could not be found at ${certPath}, it may take several seconds to be created on opendex's first run`;
    }

    throw err;
  }
};

/**
 * A generic function to instantiate an XU client.
 * @param argv the command line arguments
 */
export const loadXudClient = async (argv: Arguments<any>): Promise<openDEXrpc.XudClient> => {
  await loadXudConfig(argv);

  const certPath = argv.tlscertpath || path.join(argv.opendexdir, 'tls.cert');
  const cert = getTlsCert(certPath);
  const credentials = grpc.credentials.createSsl(cert);

  return new XudClient(`${argv.rpchost}:${argv.rpcport}`, credentials) as any;
};

export const loadXudInitClient = async (argv: Arguments<any>): Promise<openDEXrpc.XudInitClient> => {
  await loadXudConfig(argv);

  const certPath = argv.tlscertpath || path.join(argv.opendexdir, 'tls.cert');
  const cert = getTlsCert(certPath);
  const grpcCredentials = grpc.credentials.createSsl(cert);

  return new XudInitClient(`${argv.rpchost}:${argv.rpcport}`, grpcCredentials) as any;
};

interface GrpcResponse {
  toObject: Function;
}

export const callback = (argv: Arguments, formatOutput?: Function, displayJson?: Function) => {
  return (error: grpc.ServiceError | null, response: GrpcResponse) => {
    if (error) {
      process.exitCode = 1;
      if (error.code === grpc.status.UNAVAILABLE && error.message.includes('opendex is starting')) {
        console.error('opendex is starting... try again in a few seconds');
      } else if (error.details === 'failed to connect to all addresses') {
        console.error(`could not connect to opendex at ${argv.rpchost}:${argv.rpcport}, is opendex running?`);
      } else if (error.code === grpc.status.UNIMPLEMENTED && error.message.includes('opendex is locked')) {
        console.error(
          "opendex is locked, run 'opendex-cli unlock', 'opendex-cli create', or 'opendex-cli restore' then try again",
        );
      } else if (
        error.code === grpc.status.UNIMPLEMENTED &&
        error.message.includes('opendex node cannot be created because it already exists')
      ) {
        console.error("an opendex node already exists, try unlocking it with 'opendex-cli unlock'");
      } else if (
        error.code === grpc.status.UNIMPLEMENTED &&
        error.message.includes('opendex node cannot be unlocked because it does not exist')
      ) {
        console.error(
          "no opendex node exists to unlock, try creating one with 'opendex-cli create' or 'opendex-cli restore'",
        );
      } else if (
        error.code === grpc.status.UNIMPLEMENTED &&
        error.message.includes('opendex init service is disabled')
      ) {
        console.error("opendex is running and unlocked, try checking its status with 'opendex-cli getinfo'");
      } else {
        console.error(`${error.name}: ${error.message}`);
      }
    } else {
      const responseObj = response.toObject();
      if (argv.json || !formatOutput) {
        if (Object.keys(responseObj).length === 0) {
          console.log('success');
        } else {
          displayJson ? displayJson(responseObj, argv) : console.log(JSON.stringify(responseObj, undefined, 2));
        }
      } else {
        formatOutput(responseObj, argv);
      }
    }
  };
};

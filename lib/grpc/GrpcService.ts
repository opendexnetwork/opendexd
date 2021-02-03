/* tslint:disable no-floating-promises no-null-keyword */
import grpc, { ServerWritableStream, status } from '@grpc/grpc-js';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { SwapFailureReason } from '../constants/enums';
import { LndInfo } from '../lndclient/types';
import { isOwnOrder, Order, OrderPortion, PlaceOrderEventType, PlaceOrderResult } from '../orderbook/types';
import * as opendexrpc from '../proto/opendexrpc_pb';
import Service from '../service/Service';
import { ServiceOrder, ServicePlaceOrderEvent } from '../service/types';
import { SwapAccepted, SwapFailure, SwapSuccess } from '../swaps/types';
import getGrpcError from './getGrpcError';

/**
 * Creates an opendexrpc Order message from an [[Order]].
 */
const createServiceOrder = (order: ServiceOrder) => {
  const grpcOrder = new opendexrpc.Order();
  grpcOrder.setCreatedAt(order.createdAt);
  grpcOrder.setId(order.id);
  if (order.hold) {
    grpcOrder.setHold(order.hold);
  }
  if (order.localId) {
    grpcOrder.setLocalId(order.localId);
  }
  grpcOrder.setIsOwnOrder(order.isOwnOrder);
  const nodeIdentifier = new opendexrpc.NodeIdentifier();
  nodeIdentifier.setNodePubKey(order.nodeIdentifier.nodePubKey);
  if (order.nodeIdentifier.alias) {
    nodeIdentifier.setAlias(order.nodeIdentifier.alias);
  }
  grpcOrder.setNodeIdentifier(nodeIdentifier);
  grpcOrder.setPairId(order.pairId);
  if (order.price) {
    grpcOrder.setPrice(order.price);
  }
  if (order.quantity) {
    grpcOrder.setQuantity(order.quantity);
  }
  grpcOrder.setSide(order.side as number);
  return grpcOrder;
};

const createOrder = (order: Order) => {
  const grpcOrder = new opendexrpc.Order();
  grpcOrder.setCreatedAt(order.createdAt);
  grpcOrder.setId(order.id);
  if (isOwnOrder(order)) {
    grpcOrder.setHold(order.hold);
    grpcOrder.setLocalId(order.localId);
    grpcOrder.setIsOwnOrder(true);
  } else {
    const nodeIdentifier = new opendexrpc.NodeIdentifier();
    nodeIdentifier.setNodePubKey(order.peerPubKey);
    grpcOrder.setNodeIdentifier(nodeIdentifier);
    grpcOrder.setIsOwnOrder(false);
  }
  grpcOrder.setPairId(order.pairId);
  grpcOrder.setPrice(order.price);
  grpcOrder.setQuantity(order.quantity);
  grpcOrder.setSide(order.isBuy ? opendexrpc.OrderSide.BUY : opendexrpc.OrderSide.SELL);
  return grpcOrder;
};

/**
 * Creates an opendexrpc SwapSuccess message from a [[SwapSuccess]].
 */
const createSwapSuccess = (result: SwapSuccess) => {
  const swapSuccess = new opendexrpc.SwapSuccess();
  swapSuccess.setOrderId(result.orderId);
  swapSuccess.setLocalId(result.localId);
  swapSuccess.setPairId(result.pairId);
  swapSuccess.setQuantity(result.quantity);
  swapSuccess.setRHash(result.rHash);
  swapSuccess.setPrice(result.price);
  swapSuccess.setRPreimage(result.rPreimage ? result.rPreimage : '');
  swapSuccess.setAmountReceived(result.amountReceived);
  swapSuccess.setAmountSent(result.amountSent);
  swapSuccess.setCurrencyReceived(result.currencyReceived);
  swapSuccess.setCurrencySent(result.currencySent);
  swapSuccess.setPeerPubKey(result.peerPubKey);
  swapSuccess.setRole(result.role as number);
  return swapSuccess;
};

/**
 * Creates an opendexrpc SwapFailure message from a [[SwapFailure]].
 */
const createSwapFailure = (swapFailure: SwapFailure) => {
  const grpcSwapFailure = new opendexrpc.SwapFailure();
  grpcSwapFailure.setOrderId(swapFailure.orderId);
  grpcSwapFailure.setPairId(swapFailure.pairId);
  grpcSwapFailure.setPeerPubKey(swapFailure.peerPubKey);
  grpcSwapFailure.setQuantity(swapFailure.quantity);
  grpcSwapFailure.setFailureReason(SwapFailureReason[swapFailure.failureReason]);
  return grpcSwapFailure;
};

/**
 * Creates an opendexrpc SwapAccepted message from a [[SwapAccepted]].
 */
const createSwapAccepted = (swapAccepted: SwapAccepted) => {
  const grpcSwapAccepted = new opendexrpc.SwapAccepted();
  grpcSwapAccepted.setOrderId(swapAccepted.orderId);
  grpcSwapAccepted.setLocalId(swapAccepted.localId);
  grpcSwapAccepted.setQuantity(swapAccepted.quantity);
  grpcSwapAccepted.setRHash(swapAccepted.rHash);
  grpcSwapAccepted.setPrice(swapAccepted.price);
  grpcSwapAccepted.setAmountReceiving(swapAccepted.amountReceiving);
  grpcSwapAccepted.setAmountSending(swapAccepted.amountSending);
  grpcSwapAccepted.setCurrencyReceiving(swapAccepted.currencyReceiving);
  grpcSwapAccepted.setCurrencySending(swapAccepted.currencySending);
  grpcSwapAccepted.setPeerPubKey(swapAccepted.peerPubKey);
  grpcSwapAccepted.setPairId(swapAccepted.pairId);
  return grpcSwapAccepted;
};

/**
 * Creates an opendexrpc PlaceOrderResponse message from a [[PlaceOrderResult]].
 */
const createPlaceOrderResponse = (result: PlaceOrderResult) => {
  const response = new opendexrpc.PlaceOrderResponse();

  const internalMatches = result.internalMatches.map((match) => createOrder(match));
  response.setInternalMatchesList(internalMatches);

  const swapSuccesses = result.swapSuccesses.map((swapSuccess) => createSwapSuccess(swapSuccess));
  response.setSwapSuccessesList(swapSuccesses);

  const swapFailures = result.swapFailures.map((swapFailure) => createSwapFailure(swapFailure));
  response.setSwapFailuresList(swapFailures);

  if (result.remainingOrder) {
    response.setRemainingOrder(createOrder(result.remainingOrder));
  }

  return response;
};

/**
 * Creates an opendexrpc PlaceOrderEvent message from a [[PlaceOrderEvent]].
 */
const createPlaceOrderEvent = (e: ServicePlaceOrderEvent) => {
  const placeOrderEvent = new opendexrpc.PlaceOrderEvent();
  switch (e.type) {
    case PlaceOrderEventType.Match:
      placeOrderEvent.setMatch(createServiceOrder(e.order!));
      break;
    case PlaceOrderEventType.SwapSuccess:
      placeOrderEvent.setSwapSuccess(createSwapSuccess(e.swapSuccess!));
      break;
    case PlaceOrderEventType.RemainingOrder:
      placeOrderEvent.setRemainingOrder(createServiceOrder(e.order!));
      break;
    case PlaceOrderEventType.SwapFailure:
      placeOrderEvent.setSwapFailure(createSwapFailure(e.swapFailure!));
      break;
    default:
      throw new Error('unrecognized PlaceOrderEventType');
  }
  return placeOrderEvent;
};

const getCancelled$ = (call: ServerWritableStream<any, any>) => {
  return fromEvent<void>(call, 'cancelled').pipe(take(1));
};

/** Class containing the available RPC methods for opendex */
class GrpcService implements grpc.UntypedServiceImplementation {
  [name: string]: any;
  public locked = false;
  private service?: Service;
  /** The set of active streaming calls. */
  private streams: Set<grpc.ServerWritableStream<any, any>> = new Set<grpc.ServerWritableStream<any, any>>();

  public setService(service: Service) {
    this.service = service;
    this.locked = false;
  }

  /** Closes and removes all active streaming calls. */
  public closeStreams = () => {
    this.streams.forEach((stream) => {
      stream.end();
    });
    this.streams.clear();
  };

  /** Adds an active streaming call and adds a listener to remove it if it is cancelled. */
  private addStream = (stream: grpc.ServerWritableStream<any, any>) => {
    this.streams.add(stream);
    stream.once('cancelled', () => {
      this.streams.delete(stream);
    });
  };

  /**
   * Checks whether this service is ready to handle calls and sends an error to the client
   * caller if not ready.
   * @returns `true` if the service is ready, otherwise `false`
   */
  private isReady = (
    service: Service | undefined,
    callbackOrCall: grpc.sendUnaryData<any> | grpc.ServerWritableStream<any, any>,
  ): service is Service => {
    if (!service) {
      const err = this.locked
        ? { code: status.UNIMPLEMENTED, message: 'opendex is locked', name: 'LockedError' }
        : { code: status.UNAVAILABLE, message: 'opendex is starting', name: 'NotReadyError' };
      if (typeof callbackOrCall === 'function') {
        const callback = callbackOrCall;
        callback(err, null);
      } else {
        const call = callbackOrCall;
        call.emit('error', err);
      }
      return false;
    }
    return true;
  };

  /**
   * See [[Service.addCurrency]]
   */
  public addCurrency: grpc.handleUnaryCall<opendexrpc.Currency, opendexrpc.AddCurrencyResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.addCurrency(call.request.toObject());
      const response = new opendexrpc.AddCurrencyResponse();

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.addPair]]
   */
  public addPair: grpc.handleUnaryCall<opendexrpc.AddPairRequest, opendexrpc.AddPairResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.addPair(call.request.toObject());
      const response = new opendexrpc.AddPairResponse();

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.closeChannel]]
   */
  public closeChannel: grpc.handleUnaryCall<opendexrpc.CloseChannelRequest, opendexrpc.CloseChannelResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const txIds = await this.service.closeChannel(call.request.toObject());
      const response = new opendexrpc.CloseChannelResponse();
      response.setTransactionIdsList(txIds);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.removeOrder]]
   */
  public removeOrder: grpc.handleUnaryCall<opendexrpc.RemoveOrderRequest, opendexrpc.RemoveOrderResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const { removedQuantity, remainingQuantity, onHoldQuantity, pairId } = this.service.removeOrder(
        call.request.toObject(),
      );
      const response = new opendexrpc.RemoveOrderResponse();
      response.setQuantityOnHold(onHoldQuantity);
      response.setRemainingQuantity(remainingQuantity);
      response.setRemovedQuantity(removedQuantity);
      response.setPairId(pairId);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.removeAllOrders]]
   */
  public removeAllOrders: grpc.handleUnaryCall<
    opendexrpc.RemoveAllOrdersRequest,
    opendexrpc.RemoveAllOrdersResponse
  > = async (_, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const { removedOrderLocalIds, onHoldOrderLocalIds } = await this.service.removeAllOrders();

      const response = new opendexrpc.RemoveAllOrdersResponse();
      response.setRemovedOrderIdsList(removedOrderLocalIds);
      response.setOnHoldOrderIdsList(onHoldOrderLocalIds);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.getBalance]]
   */
  public getBalance: grpc.handleUnaryCall<opendexrpc.GetBalanceRequest, opendexrpc.GetBalanceResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const balanceResponse = await this.service.getBalance(call.request.toObject());
      const response = new opendexrpc.GetBalanceResponse();
      const balancesMap = response.getBalancesMap();
      balanceResponse.forEach((balanceObj, currency) => {
        const balance = new opendexrpc.Balance();
        balance.setTotalBalance(balanceObj.totalBalance);
        balance.setChannelBalance(balanceObj.channelBalance);
        balance.setPendingChannelBalance(balanceObj.pendingChannelBalance);
        balance.setInactiveChannelBalance(balanceObj.inactiveChannelBalance);
        balance.setWalletBalance(balanceObj.walletBalance);
        balance.setUnconfirmedWalletBalance(balanceObj.unconfirmedWalletBalance);
        balancesMap.set(currency, balance);
      });
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.tradingLimits]]
   */
  public tradingLimits: grpc.handleUnaryCall<
    opendexrpc.TradingLimitsRequest,
    opendexrpc.TradingLimitsResponse
  > = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const tradingLimitsResponse = await this.service.tradingLimits(call.request.toObject());
      const response = new opendexrpc.TradingLimitsResponse();
      const limitsMap = response.getLimitsMap();
      tradingLimitsResponse.forEach((tradingLimitsObj, currency) => {
        const tradingLimits = new opendexrpc.TradingLimits();
        tradingLimits.setMaxSell(tradingLimitsObj.maxSell);
        tradingLimits.setMaxBuy(tradingLimitsObj.maxBuy);
        tradingLimits.setReservedSell(tradingLimitsObj.reservedSell);
        tradingLimits.setReservedBuy(tradingLimitsObj.reservedBuy);
        limitsMap.set(currency, tradingLimits);
      });
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.openChannel]]
   */
  public openChannel: grpc.handleUnaryCall<opendexrpc.OpenChannelRequest, opendexrpc.OpenChannelResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const txId = await this.service.openChannel(call.request.toObject());
      const response = new opendexrpc.OpenChannelResponse();
      response.setTransactionId(txId);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.connect]]
   */
  public connect: grpc.handleUnaryCall<opendexrpc.ConnectRequest, opendexrpc.ConnectResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const { nodeUri } = call.request.toObject();
      await this.service.connect({ nodeUri, retryConnecting: false });
      const response = new opendexrpc.ConnectResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.walletDeposit]]
   */
  public walletDeposit: grpc.handleUnaryCall<opendexrpc.DepositRequest, opendexrpc.DepositResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const address = await this.service.walletDeposit(call.request.toObject());
      const response = new opendexrpc.DepositResponse();
      response.setAddress(address);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.deposit]]
   */
  public deposit: grpc.handleUnaryCall<opendexrpc.DepositRequest, opendexrpc.DepositResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const address = await this.service.deposit(call.request.toObject());
      const response = new opendexrpc.DepositResponse();
      response.setAddress(address);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.walletWithdraw]]
   */
  public walletWithdraw: grpc.handleUnaryCall<opendexrpc.WithdrawRequest, opendexrpc.WithdrawResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const txId = await this.service.walletWithdraw(call.request.toObject());
      const response = new opendexrpc.WithdrawResponse();
      response.setTransactionId(txId);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.ban]]
   */
  public ban: grpc.handleUnaryCall<opendexrpc.BanRequest, opendexrpc.BanResponse> = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.ban(call.request.toObject());
      const response = new opendexrpc.BanResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.unban]]
   */
  public unban: grpc.handleUnaryCall<opendexrpc.UnbanRequest, opendexrpc.UnbanResponse> = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.unban(call.request.toObject());
      const response = new opendexrpc.UnbanResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.executeSwap]]
   */
  public executeSwap: grpc.handleUnaryCall<opendexrpc.ExecuteSwapRequest, opendexrpc.SwapSuccess> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const swapSuccess = await this.service.executeSwap(call.request.toObject());
      callback(null, createSwapSuccess(swapSuccess));
    } catch (err) {
      if (typeof err === 'number') {
        // treat the error as a SwapFailureReason enum
        let code: grpc.status;
        switch (err) {
          case SwapFailureReason.DealTimedOut:
          case SwapFailureReason.SwapTimedOut:
            code = grpc.status.DEADLINE_EXCEEDED;
            break;
          case SwapFailureReason.InvalidSwapRequest:
          case SwapFailureReason.PaymentHashReuse:
            // these cases suggest something went very wrong with our swap request
            code = grpc.status.INTERNAL;
            break;
          case SwapFailureReason.InsufficientBalance:
          case SwapFailureReason.NoRouteFound:
          case SwapFailureReason.SendPaymentFailure:
          case SwapFailureReason.SwapClientNotSetup:
          case SwapFailureReason.OrderOnHold:
            code = grpc.status.FAILED_PRECONDITION;
            break;
          case SwapFailureReason.UnexpectedClientError:
          case SwapFailureReason.UnknownError:
          default:
            code = grpc.status.UNKNOWN;
            break;
        }
        const grpcError: grpc.ServiceError = {
          code,
          name: SwapFailureReason[err],
          message: SwapFailureReason[err],
          details: SwapFailureReason[err],
          metadata: new grpc.Metadata(),
        };
        callback(grpcError, null);
      } else {
        callback(getGrpcError(err), null);
      }
    }
  };

  /**
   * See [[Service.getInfo]]
   */
  public getInfo: grpc.handleUnaryCall<opendexrpc.GetInfoRequest, opendexrpc.GetInfoResponse> = async (_, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const getInfoResponse = await this.service.getInfo();
      const response = new opendexrpc.GetInfoResponse();
      response.setNodePubKey(getInfoResponse.nodePubKey);
      response.setUrisList(getInfoResponse.uris);
      response.setNumPairs(getInfoResponse.numPairs);
      response.setNumPeers(getInfoResponse.numPeers);
      response.setVersion(getInfoResponse.version);
      response.setAlias(getInfoResponse.alias);
      response.setNetwork(getInfoResponse.network);

      const getLndInfo = (lndInfo: LndInfo): opendexrpc.LndInfo => {
        const lnd = new opendexrpc.LndInfo();
        if (lndInfo.blockheight) lnd.setBlockheight(lndInfo.blockheight);
        if (lndInfo.chains) {
          const chains: opendexrpc.Chain[] = lndInfo.chains.map((chain) => {
            const xudChain = new opendexrpc.Chain();
            xudChain.setChain(chain.chain);
            xudChain.setNetwork(chain.network);
            return xudChain;
          });
          lnd.setChainsList(chains);
        }
        if (lndInfo.channels) {
          const channels = new opendexrpc.Channels();
          channels.setActive(lndInfo.channels.active);
          channels.setPending(lndInfo.channels.pending);
          channels.setClosed(lndInfo.channels.closed);
          if (lndInfo.channels.inactive) channels.setInactive(lndInfo.channels.inactive);
          lnd.setChannels(channels);
        }
        lnd.setStatus(lndInfo.status);
        if (lndInfo.uris) lnd.setUrisList(lndInfo.uris);
        if (lndInfo.version) lnd.setVersion(lndInfo.version);
        if (lndInfo.alias) lnd.setAlias(lndInfo.alias);
        return lnd;
      };
      const lndMap = response.getLndMap();
      getInfoResponse.lnd.forEach((lndInfo, currency) => {
        lndMap.set(currency, getLndInfo(lndInfo));
      });

      if (getInfoResponse.connext) {
        const connext = new opendexrpc.ConnextInfo();
        connext.setStatus(getInfoResponse.connext.status);
        if (getInfoResponse.connext.address) connext.setAddress(getInfoResponse.connext.address);
        if (getInfoResponse.connext.version) connext.setVersion(getInfoResponse.connext.version);
        if (getInfoResponse.connext.chain) connext.setChain(getInfoResponse.connext.chain);
        response.setConnext(connext);
      }

      const orders = new opendexrpc.OrdersCount();
      orders.setOwn(getInfoResponse.orders.own);
      orders.setPeer(getInfoResponse.orders.peer);
      response.setOrders(orders);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.getMnemonic]]
   */
  public getMnemonic: grpc.handleUnaryCall<opendexrpc.GetMnemonicRequest, opendexrpc.GetMnemonicResponse> = async (
    _,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const mnemonic = await this.service.getMnemonic();
      const response = new opendexrpc.GetMnemonicResponse();
      response.setSeedMnemonicList(mnemonic);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.getNodeInfo]]
   */
  public getNodeInfo: grpc.handleUnaryCall<opendexrpc.GetNodeInfoRequest, opendexrpc.GetNodeInfoResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const { banned, reputationScore } = await this.service.getNodeInfo(call.request.toObject());
      const response = new opendexrpc.GetNodeInfoResponse();
      if (banned) {
        response.setBanned(banned);
      }
      response.setReputationscore(reputationScore);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.listOrders]]
   */
  public listOrders: grpc.handleUnaryCall<opendexrpc.ListOrdersRequest, opendexrpc.ListOrdersResponse> = (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const listOrdersResponse = this.service.listOrders(call.request.toObject());
      const response = new opendexrpc.ListOrdersResponse();

      const listOrdersList = <T extends ServiceOrder>(orders: T[]) => {
        const ordersList: opendexrpc.Order[] = [];
        orders.forEach((order) => ordersList.push(createServiceOrder(order)));
        return ordersList;
      };

      const ordersMap = response.getOrdersMap();
      listOrdersResponse.forEach((orderArrays, pairId) => {
        const orders = new opendexrpc.Orders();
        orders.setBuyOrdersList(listOrdersList(orderArrays.buyArray));
        orders.setSellOrdersList(listOrdersList(orderArrays.sellArray));

        ordersMap.set(pairId, orders);
      });

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.listCurrencies]]
   */
  public listCurrencies: grpc.handleUnaryCall<opendexrpc.ListCurrenciesRequest, opendexrpc.ListCurrenciesResponse> = (
    _,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const currencies = this.service.listCurrencies();
      const response = new opendexrpc.ListCurrenciesResponse();

      currencies.forEach((currency) => {
        const resultCurrency = new opendexrpc.Currency();
        resultCurrency.setDecimalPlaces(currency.decimalPlaces);
        resultCurrency.setCurrency(currency.id);
        if (currency.tokenAddress) {
          resultCurrency.setTokenAddress(currency.tokenAddress);
        }
        resultCurrency.setSwapClient(currency.swapClient as number);
        response.getCurrenciesList().push(resultCurrency);
      });

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.listPairs]]
   */
  public listPairs: grpc.handleUnaryCall<opendexrpc.ListPairsRequest, opendexrpc.ListPairsResponse> = (_, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const listPairsResponse = this.service.listPairs();
      const response = new opendexrpc.ListPairsResponse();
      response.setPairsList(listPairsResponse);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.tradeHistory]]
   */
  public tradeHistory: grpc.handleUnaryCall<opendexrpc.TradeHistoryRequest, opendexrpc.TradeHistoryResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const trades = await this.service.tradeHistory(call.request.toObject());
      const response = new opendexrpc.TradeHistoryResponse();
      const tradesList: opendexrpc.Trade[] = trades.map((trade) => {
        const grpcTrade = new opendexrpc.Trade();
        grpcTrade.setMakerOrder(createServiceOrder(trade.makerOrder));
        if (trade.takerOrder) {
          grpcTrade.setTakerOrder(createServiceOrder(trade.takerOrder));
        }
        grpcTrade.setPairId(trade.pairId);
        grpcTrade.setQuantity(trade.quantity);
        if (trade.rHash) {
          grpcTrade.setRHash(trade.rHash);
        }
        grpcTrade.setPrice(trade.price);
        grpcTrade.setSide(trade.side as number);
        grpcTrade.setRole(trade.role as number);
        grpcTrade.setExecutedAt(trade.executedAt);
        if (trade.counterparty) {
          const counterparty = new opendexrpc.NodeIdentifier();
          counterparty.setNodePubKey(trade.counterparty.nodePubKey);
          if (trade.counterparty.alias) {
            counterparty.setAlias(trade.counterparty.alias);
          }
          grpcTrade.setCounterparty(counterparty);
        }

        return grpcTrade;
      });

      response.setTradesList(tradesList);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.listPeers]]
   */
  public listPeers: grpc.handleUnaryCall<opendexrpc.ListPeersRequest, opendexrpc.ListPeersResponse> = (_, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const listPeersResponse = this.service.listPeers();
      const response = new opendexrpc.ListPeersResponse();
      const peers: opendexrpc.Peer[] = [];
      listPeersResponse.forEach((peer) => {
        const grpcPeer = new opendexrpc.Peer();
        grpcPeer.setAddress(peer.address);
        grpcPeer.setInbound(peer.inbound);
        grpcPeer.setNodePubKey(peer.nodePubKey || '');
        grpcPeer.setAlias(peer.alias || '');
        grpcPeer.setConnextIdentifier(peer.connextIdentifier || '');
        if (peer.lndPubKeys) {
          const map = grpcPeer.getLndPubKeysMap();
          for (const key of Object.keys(peer.lndPubKeys)) {
            map.set(key, peer.lndPubKeys[key]);
          }
        }
        if (peer.lndUris) {
          for (const key of Object.keys(peer.lndUris)) {
            const grpcUri = new opendexrpc.Peer.LndUris();
            grpcUri.setCurrency(key);
            grpcUri.getUriList().push(...(peer.lndUris[key] || []));
            grpcPeer.getLndUrisList().push(grpcUri);
          }
        }
        grpcPeer.setPairsList(peer.pairs || []);
        grpcPeer.setSecondsConnected(peer.secondsConnected);
        grpcPeer.setXudVersion(peer.xudVersion || '');
        peers.push(grpcPeer);
      });
      response.setPeersList(peers);
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  public orderBook: grpc.handleUnaryCall<opendexrpc.OrderBookRequest, opendexrpc.OrderBookResponse> = (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const orderBookResponse = this.service.orderbook(call.request.toObject());
      const response = new opendexrpc.OrderBookResponse();

      const createBucket = (bucket: { price: number; quantity: number }) => {
        const grpcBucket = new opendexrpc.OrderBookResponse.Bucket();
        grpcBucket.setPrice(bucket.price);
        grpcBucket.setQuantity(bucket.quantity);
        return grpcBucket;
      };

      orderBookResponse.forEach((orderBookBuckets, currency) => {
        const buckets = new opendexrpc.OrderBookResponse.Buckets();
        const buyBuckets = orderBookBuckets.buyBuckets.map(createBucket);
        const sellBuckets = orderBookBuckets.sellBuckets.map(createBucket);
        buckets.setBuyBucketsList(buyBuckets);
        buckets.setSellBucketsList(sellBuckets);
        response.getBucketsMap().set(currency, buckets);
      });

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.placeOrder]]
   */
  public placeOrder: grpc.handleServerStreamingCall<opendexrpc.PlaceOrderRequest, opendexrpc.PlaceOrderEvent> = async (
    call,
  ) => {
    if (!this.service) {
      call.emit('error', {
        code: grpc.status.UNAVAILABLE,
        message: 'opendex is starting',
        name: 'NotReadyError',
      });
      return;
    }
    try {
      await this.service.placeOrder(call.request.toObject(), (result: ServicePlaceOrderEvent) => {
        call.write(createPlaceOrderEvent(result));
      });

      call.end();
    } catch (err) {
      call.emit('error', getGrpcError(err));
    }
  };

  /**
   * See [[Service.placeOrder]]
   */
  public placeOrderSync: grpc.handleUnaryCall<opendexrpc.PlaceOrderRequest, opendexrpc.PlaceOrderResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const result = await this.service.placeOrder(call.request.toObject());
      callback(null, createPlaceOrderResponse(result));
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.addCurrency]]
   */
  public removeCurrency: grpc.handleUnaryCall<
    opendexrpc.RemoveCurrencyRequest,
    opendexrpc.RemoveCurrencyResponse
  > = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.removeCurrency(call.request.toObject());
      const response = new opendexrpc.RemoveCurrencyResponse();

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.addPair]]
   */
  public removePair: grpc.handleUnaryCall<opendexrpc.RemovePairRequest, opendexrpc.RemovePairResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.removePair(call.request.toObject());
      const response = new opendexrpc.RemovePairResponse();

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /**
   * See [[Service.discoverNodes]]
   */
  public discoverNodes: grpc.handleUnaryCall<
    opendexrpc.DiscoverNodesRequest,
    opendexrpc.DiscoverNodesResponse
  > = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      const numNodes = await this.service.discoverNodes(call.request.toObject());

      const response = new opendexrpc.DiscoverNodesResponse();
      response.setNumNodes(numNodes);

      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  public setLogLevel: grpc.handleUnaryCall<opendexrpc.SetLogLevelRequest, opendexrpc.SetLogLevelResponse> = async (
    call,
    callback,
  ) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.setLogLevel(call.request.toObject());

      const response = new opendexrpc.SetLogLevelResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  public changePassword: grpc.handleUnaryCall<
    opendexrpc.ChangePasswordRequest,
    opendexrpc.ChangePasswordResponse
  > = async (call, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      await this.service.changePassword(call.request.toObject());

      const response = new opendexrpc.ChangePasswordResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  public shutdown: grpc.handleUnaryCall<opendexrpc.ShutdownRequest, opendexrpc.ShutdownResponse> = (_, callback) => {
    if (!this.isReady(this.service, callback)) {
      return;
    }
    try {
      this.service.shutdown();
      const response = new opendexrpc.ShutdownResponse();
      callback(null, response);
    } catch (err) {
      callback(getGrpcError(err), null);
    }
  };

  /*
   * See [[Service.subscribeOrders]]
   */
  public subscribeOrders: grpc.handleServerStreamingCall<opendexrpc.SubscribeOrdersRequest, opendexrpc.OrderUpdate> = (
    call,
  ) => {
    if (!this.service) {
      call.emit('error', { code: grpc.status.UNAVAILABLE, message: 'opendex is starting', name: 'NotReadyError' });
      return;
    }
    const cancelled$ = getCancelled$(call);
    this.service.subscribeOrders(
      call.request.toObject(),
      (order?: ServiceOrder, orderRemoval?: OrderPortion) => {
        const orderUpdate = new opendexrpc.OrderUpdate();
        if (order) {
          orderUpdate.setOrder(createServiceOrder(order));
        } else if (orderRemoval) {
          const grpcOrderRemoval = new opendexrpc.OrderRemoval();
          grpcOrderRemoval.setPairId(orderRemoval.pairId);
          grpcOrderRemoval.setOrderId(orderRemoval.id);
          grpcOrderRemoval.setQuantity(orderRemoval.quantity);
          grpcOrderRemoval.setLocalId(orderRemoval.localId || '');
          grpcOrderRemoval.setIsOwnOrder(orderRemoval.localId !== undefined);
          orderUpdate.setOrderRemoval(grpcOrderRemoval);
        }
        call.write(orderUpdate);
      },
      cancelled$,
    );
  };

  /*
   * See [[Service.subscribeSwapFailures]]
   */
  public subscribeSwapFailures: grpc.handleServerStreamingCall<
    opendexrpc.SubscribeSwapsRequest,
    opendexrpc.SwapFailure
  > = (call) => {
    if (!this.service) {
      call.emit('error', { code: grpc.status.UNAVAILABLE, message: 'opendex is starting', name: 'NotReadyError' });
      return;
    }
    const cancelled$ = getCancelled$(call);
    this.service.subscribeSwapFailures(
      call.request.toObject(),
      (result: SwapFailure) => {
        call.write(createSwapFailure(result));
      },
      cancelled$,
    );
    this.addStream(call);
  };

  /*
   * See [[Service.subscribeSwaps]]
   */
  public subscribeSwaps: grpc.handleServerStreamingCall<opendexrpc.SubscribeSwapsRequest, opendexrpc.SwapSuccess> = (
    call,
  ) => {
    if (!this.service) {
      call.emit('error', { code: grpc.status.UNAVAILABLE, message: 'opendex is starting', name: 'NotReadyError' });
      return;
    }
    const cancelled$ = getCancelled$(call);
    this.service.subscribeSwaps(
      call.request.toObject(),
      (result: SwapSuccess) => {
        call.write(createSwapSuccess(result));
      },
      cancelled$,
    );
    this.addStream(call);
  };

  /*
   * See [[Service.subscribeSwapFailures]]
   */
  public subscribeSwapsAccepted: grpc.handleServerStreamingCall<
    opendexrpc.SubscribeSwapsAcceptedRequest,
    opendexrpc.SwapAccepted
  > = (call) => {
    if (!this.service) {
      call.emit('error', { code: grpc.status.UNAVAILABLE, message: 'opendex is starting', name: 'NotReadyError' });
      return;
    }

    const cancelled$ = getCancelled$(call);
    this.service.subscribeSwapsAccepted(
      call.request.toObject(),
      (result: SwapAccepted) => {
        call.write(createSwapAccepted(result));
      },
      cancelled$,
    );
    this.addStream(call);
  };
}

export default GrpcService;

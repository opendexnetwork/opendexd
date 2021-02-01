// package: opendexrpc
// file: opendexrpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as opendexrpc_pb from "./opendexrpc_pb";
import * as annotations_pb from "./annotations_pb";

interface IXudInitService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createNode: IXudInitService_ICreateNode;
    restoreNode: IXudInitService_IRestoreNode;
    unlockNode: IXudInitService_IUnlockNode;
}

interface IXudInitService_ICreateNode extends grpc.MethodDefinition<opendexrpc_pb.CreateNodeRequest, opendexrpc_pb.CreateNodeResponse> {
    path: "/opendexrpc.XudInit/CreateNode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.CreateNodeRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.CreateNodeRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.CreateNodeResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.CreateNodeResponse>;
}
interface IXudInitService_IRestoreNode extends grpc.MethodDefinition<opendexrpc_pb.RestoreNodeRequest, opendexrpc_pb.RestoreNodeResponse> {
    path: "/opendexrpc.XudInit/RestoreNode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.RestoreNodeRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.RestoreNodeRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.RestoreNodeResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.RestoreNodeResponse>;
}
interface IXudInitService_IUnlockNode extends grpc.MethodDefinition<opendexrpc_pb.UnlockNodeRequest, opendexrpc_pb.UnlockNodeResponse> {
    path: "/opendexrpc.XudInit/UnlockNode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.UnlockNodeRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.UnlockNodeRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.UnlockNodeResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.UnlockNodeResponse>;
}

export const XudInitService: IXudInitService;

export interface IXudInitServer extends grpc.UntypedServiceImplementation {
    createNode: grpc.handleUnaryCall<opendexrpc_pb.CreateNodeRequest, opendexrpc_pb.CreateNodeResponse>;
    restoreNode: grpc.handleUnaryCall<opendexrpc_pb.RestoreNodeRequest, opendexrpc_pb.RestoreNodeResponse>;
    unlockNode: grpc.handleUnaryCall<opendexrpc_pb.UnlockNodeRequest, opendexrpc_pb.UnlockNodeResponse>;
}

export interface IXudInitClient {
    createNode(request: opendexrpc_pb.CreateNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    createNode(request: opendexrpc_pb.CreateNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    createNode(request: opendexrpc_pb.CreateNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    restoreNode(request: opendexrpc_pb.RestoreNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    restoreNode(request: opendexrpc_pb.RestoreNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    restoreNode(request: opendexrpc_pb.RestoreNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    unlockNode(request: opendexrpc_pb.UnlockNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
    unlockNode(request: opendexrpc_pb.UnlockNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
    unlockNode(request: opendexrpc_pb.UnlockNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
}

export class XudInitClient extends grpc.Client implements IXudInitClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createNode(request: opendexrpc_pb.CreateNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    public createNode(request: opendexrpc_pb.CreateNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    public createNode(request: opendexrpc_pb.CreateNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CreateNodeResponse) => void): grpc.ClientUnaryCall;
    public restoreNode(request: opendexrpc_pb.RestoreNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    public restoreNode(request: opendexrpc_pb.RestoreNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    public restoreNode(request: opendexrpc_pb.RestoreNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RestoreNodeResponse) => void): grpc.ClientUnaryCall;
    public unlockNode(request: opendexrpc_pb.UnlockNodeRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
    public unlockNode(request: opendexrpc_pb.UnlockNodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
    public unlockNode(request: opendexrpc_pb.UnlockNodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnlockNodeResponse) => void): grpc.ClientUnaryCall;
}

interface IXudService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addCurrency: IXudService_IAddCurrency;
    addPair: IXudService_IAddPair;
    ban: IXudService_IBan;
    changePassword: IXudService_IChangePassword;
    closeChannel: IXudService_ICloseChannel;
    connect: IXudService_IConnect;
    walletDeposit: IXudService_IWalletDeposit;
    deposit: IXudService_IDeposit;
    discoverNodes: IXudService_IDiscoverNodes;
    getBalance: IXudService_IGetBalance;
    getInfo: IXudService_IGetInfo;
    getMnemonic: IXudService_IGetMnemonic;
    getNodeInfo: IXudService_IGetNodeInfo;
    listOrders: IXudService_IListOrders;
    listCurrencies: IXudService_IListCurrencies;
    listPairs: IXudService_IListPairs;
    listPeers: IXudService_IListPeers;
    openChannel: IXudService_IOpenChannel;
    orderBook: IXudService_IOrderBook;
    placeOrder: IXudService_IPlaceOrder;
    placeOrderSync: IXudService_IPlaceOrderSync;
    executeSwap: IXudService_IExecuteSwap;
    removeCurrency: IXudService_IRemoveCurrency;
    removeOrder: IXudService_IRemoveOrder;
    removeAllOrders: IXudService_IRemoveAllOrders;
    removePair: IXudService_IRemovePair;
    setLogLevel: IXudService_ISetLogLevel;
    shutdown: IXudService_IShutdown;
    subscribeOrders: IXudService_ISubscribeOrders;
    subscribeSwapFailures: IXudService_ISubscribeSwapFailures;
    subscribeSwaps: IXudService_ISubscribeSwaps;
    subscribeSwapsAccepted: IXudService_ISubscribeSwapsAccepted;
    tradeHistory: IXudService_ITradeHistory;
    tradingLimits: IXudService_ITradingLimits;
    unban: IXudService_IUnban;
    walletWithdraw: IXudService_IWalletWithdraw;
}

interface IXudService_IAddCurrency extends grpc.MethodDefinition<opendexrpc_pb.Currency, opendexrpc_pb.AddCurrencyResponse> {
    path: "/opendexrpc.Xud/AddCurrency";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.Currency>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.Currency>;
    responseSerialize: grpc.serialize<opendexrpc_pb.AddCurrencyResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.AddCurrencyResponse>;
}
interface IXudService_IAddPair extends grpc.MethodDefinition<opendexrpc_pb.AddPairRequest, opendexrpc_pb.AddPairResponse> {
    path: "/opendexrpc.Xud/AddPair";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.AddPairRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.AddPairRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.AddPairResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.AddPairResponse>;
}
interface IXudService_IBan extends grpc.MethodDefinition<opendexrpc_pb.BanRequest, opendexrpc_pb.BanResponse> {
    path: "/opendexrpc.Xud/Ban";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.BanRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.BanRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.BanResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.BanResponse>;
}
interface IXudService_IChangePassword extends grpc.MethodDefinition<opendexrpc_pb.ChangePasswordRequest, opendexrpc_pb.ChangePasswordResponse> {
    path: "/opendexrpc.Xud/ChangePassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ChangePasswordResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ChangePasswordResponse>;
}
interface IXudService_ICloseChannel extends grpc.MethodDefinition<opendexrpc_pb.CloseChannelRequest, opendexrpc_pb.CloseChannelResponse> {
    path: "/opendexrpc.Xud/CloseChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.CloseChannelRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.CloseChannelRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.CloseChannelResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.CloseChannelResponse>;
}
interface IXudService_IConnect extends grpc.MethodDefinition<opendexrpc_pb.ConnectRequest, opendexrpc_pb.ConnectResponse> {
    path: "/opendexrpc.Xud/Connect";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ConnectRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ConnectRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ConnectResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ConnectResponse>;
}
interface IXudService_IWalletDeposit extends grpc.MethodDefinition<opendexrpc_pb.DepositRequest, opendexrpc_pb.DepositResponse> {
    path: "/opendexrpc.Xud/WalletDeposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.DepositRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.DepositRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.DepositResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.DepositResponse>;
}
interface IXudService_IDeposit extends grpc.MethodDefinition<opendexrpc_pb.DepositRequest, opendexrpc_pb.DepositResponse> {
    path: "/opendexrpc.Xud/Deposit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.DepositRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.DepositRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.DepositResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.DepositResponse>;
}
interface IXudService_IDiscoverNodes extends grpc.MethodDefinition<opendexrpc_pb.DiscoverNodesRequest, opendexrpc_pb.DiscoverNodesResponse> {
    path: "/opendexrpc.Xud/DiscoverNodes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.DiscoverNodesRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.DiscoverNodesRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.DiscoverNodesResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.DiscoverNodesResponse>;
}
interface IXudService_IGetBalance extends grpc.MethodDefinition<opendexrpc_pb.GetBalanceRequest, opendexrpc_pb.GetBalanceResponse> {
    path: "/opendexrpc.Xud/GetBalance";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.GetBalanceRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.GetBalanceRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.GetBalanceResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.GetBalanceResponse>;
}
interface IXudService_IGetInfo extends grpc.MethodDefinition<opendexrpc_pb.GetInfoRequest, opendexrpc_pb.GetInfoResponse> {
    path: "/opendexrpc.Xud/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.GetInfoResponse>;
}
interface IXudService_IGetMnemonic extends grpc.MethodDefinition<opendexrpc_pb.GetMnemonicRequest, opendexrpc_pb.GetMnemonicResponse> {
    path: "/opendexrpc.Xud/GetMnemonic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.GetMnemonicRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.GetMnemonicRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.GetMnemonicResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.GetMnemonicResponse>;
}
interface IXudService_IGetNodeInfo extends grpc.MethodDefinition<opendexrpc_pb.GetNodeInfoRequest, opendexrpc_pb.GetNodeInfoResponse> {
    path: "/opendexrpc.Xud/GetNodeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.GetNodeInfoRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.GetNodeInfoRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.GetNodeInfoResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.GetNodeInfoResponse>;
}
interface IXudService_IListOrders extends grpc.MethodDefinition<opendexrpc_pb.ListOrdersRequest, opendexrpc_pb.ListOrdersResponse> {
    path: "/opendexrpc.Xud/ListOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ListOrdersRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ListOrdersRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ListOrdersResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ListOrdersResponse>;
}
interface IXudService_IListCurrencies extends grpc.MethodDefinition<opendexrpc_pb.ListCurrenciesRequest, opendexrpc_pb.ListCurrenciesResponse> {
    path: "/opendexrpc.Xud/ListCurrencies";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ListCurrenciesRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ListCurrenciesRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ListCurrenciesResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ListCurrenciesResponse>;
}
interface IXudService_IListPairs extends grpc.MethodDefinition<opendexrpc_pb.ListPairsRequest, opendexrpc_pb.ListPairsResponse> {
    path: "/opendexrpc.Xud/ListPairs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ListPairsRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ListPairsRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ListPairsResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ListPairsResponse>;
}
interface IXudService_IListPeers extends grpc.MethodDefinition<opendexrpc_pb.ListPeersRequest, opendexrpc_pb.ListPeersResponse> {
    path: "/opendexrpc.Xud/ListPeers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ListPeersRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ListPeersRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ListPeersResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ListPeersResponse>;
}
interface IXudService_IOpenChannel extends grpc.MethodDefinition<opendexrpc_pb.OpenChannelRequest, opendexrpc_pb.OpenChannelResponse> {
    path: "/opendexrpc.Xud/OpenChannel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.OpenChannelRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.OpenChannelRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.OpenChannelResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.OpenChannelResponse>;
}
interface IXudService_IOrderBook extends grpc.MethodDefinition<opendexrpc_pb.OrderBookRequest, opendexrpc_pb.OrderBookResponse> {
    path: "/opendexrpc.Xud/OrderBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.OrderBookRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.OrderBookRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.OrderBookResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.OrderBookResponse>;
}
interface IXudService_IPlaceOrder extends grpc.MethodDefinition<opendexrpc_pb.PlaceOrderRequest, opendexrpc_pb.PlaceOrderEvent> {
    path: "/opendexrpc.Xud/PlaceOrder";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<opendexrpc_pb.PlaceOrderRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.PlaceOrderRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.PlaceOrderEvent>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.PlaceOrderEvent>;
}
interface IXudService_IPlaceOrderSync extends grpc.MethodDefinition<opendexrpc_pb.PlaceOrderRequest, opendexrpc_pb.PlaceOrderResponse> {
    path: "/opendexrpc.Xud/PlaceOrderSync";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.PlaceOrderRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.PlaceOrderRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.PlaceOrderResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.PlaceOrderResponse>;
}
interface IXudService_IExecuteSwap extends grpc.MethodDefinition<opendexrpc_pb.ExecuteSwapRequest, opendexrpc_pb.SwapSuccess> {
    path: "/opendexrpc.Xud/ExecuteSwap";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ExecuteSwapRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ExecuteSwapRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.SwapSuccess>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.SwapSuccess>;
}
interface IXudService_IRemoveCurrency extends grpc.MethodDefinition<opendexrpc_pb.RemoveCurrencyRequest, opendexrpc_pb.RemoveCurrencyResponse> {
    path: "/opendexrpc.Xud/RemoveCurrency";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.RemoveCurrencyRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.RemoveCurrencyRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.RemoveCurrencyResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.RemoveCurrencyResponse>;
}
interface IXudService_IRemoveOrder extends grpc.MethodDefinition<opendexrpc_pb.RemoveOrderRequest, opendexrpc_pb.RemoveOrderResponse> {
    path: "/opendexrpc.Xud/RemoveOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.RemoveOrderRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.RemoveOrderRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.RemoveOrderResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.RemoveOrderResponse>;
}
interface IXudService_IRemoveAllOrders extends grpc.MethodDefinition<opendexrpc_pb.RemoveAllOrdersRequest, opendexrpc_pb.RemoveAllOrdersResponse> {
    path: "/opendexrpc.Xud/RemoveAllOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.RemoveAllOrdersRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.RemoveAllOrdersRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.RemoveAllOrdersResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.RemoveAllOrdersResponse>;
}
interface IXudService_IRemovePair extends grpc.MethodDefinition<opendexrpc_pb.RemovePairRequest, opendexrpc_pb.RemovePairResponse> {
    path: "/opendexrpc.Xud/RemovePair";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.RemovePairRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.RemovePairRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.RemovePairResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.RemovePairResponse>;
}
interface IXudService_ISetLogLevel extends grpc.MethodDefinition<opendexrpc_pb.SetLogLevelRequest, opendexrpc_pb.SetLogLevelResponse> {
    path: "/opendexrpc.Xud/SetLogLevel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.SetLogLevelRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.SetLogLevelRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.SetLogLevelResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.SetLogLevelResponse>;
}
interface IXudService_IShutdown extends grpc.MethodDefinition<opendexrpc_pb.ShutdownRequest, opendexrpc_pb.ShutdownResponse> {
    path: "/opendexrpc.Xud/Shutdown";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.ShutdownRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.ShutdownRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.ShutdownResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.ShutdownResponse>;
}
interface IXudService_ISubscribeOrders extends grpc.MethodDefinition<opendexrpc_pb.SubscribeOrdersRequest, opendexrpc_pb.OrderUpdate> {
    path: "/opendexrpc.Xud/SubscribeOrders";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<opendexrpc_pb.SubscribeOrdersRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.SubscribeOrdersRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.OrderUpdate>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.OrderUpdate>;
}
interface IXudService_ISubscribeSwapFailures extends grpc.MethodDefinition<opendexrpc_pb.SubscribeSwapsRequest, opendexrpc_pb.SwapFailure> {
    path: "/opendexrpc.Xud/SubscribeSwapFailures";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<opendexrpc_pb.SubscribeSwapsRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.SubscribeSwapsRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.SwapFailure>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.SwapFailure>;
}
interface IXudService_ISubscribeSwaps extends grpc.MethodDefinition<opendexrpc_pb.SubscribeSwapsRequest, opendexrpc_pb.SwapSuccess> {
    path: "/opendexrpc.Xud/SubscribeSwaps";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<opendexrpc_pb.SubscribeSwapsRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.SubscribeSwapsRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.SwapSuccess>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.SwapSuccess>;
}
interface IXudService_ISubscribeSwapsAccepted extends grpc.MethodDefinition<opendexrpc_pb.SubscribeSwapsAcceptedRequest, opendexrpc_pb.SwapAccepted> {
    path: "/opendexrpc.Xud/SubscribeSwapsAccepted";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<opendexrpc_pb.SubscribeSwapsAcceptedRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.SubscribeSwapsAcceptedRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.SwapAccepted>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.SwapAccepted>;
}
interface IXudService_ITradeHistory extends grpc.MethodDefinition<opendexrpc_pb.TradeHistoryRequest, opendexrpc_pb.TradeHistoryResponse> {
    path: "/opendexrpc.Xud/TradeHistory";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.TradeHistoryRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.TradeHistoryRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.TradeHistoryResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.TradeHistoryResponse>;
}
interface IXudService_ITradingLimits extends grpc.MethodDefinition<opendexrpc_pb.TradingLimitsRequest, opendexrpc_pb.TradingLimitsResponse> {
    path: "/opendexrpc.Xud/TradingLimits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.TradingLimitsRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.TradingLimitsRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.TradingLimitsResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.TradingLimitsResponse>;
}
interface IXudService_IUnban extends grpc.MethodDefinition<opendexrpc_pb.UnbanRequest, opendexrpc_pb.UnbanResponse> {
    path: "/opendexrpc.Xud/Unban";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.UnbanRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.UnbanRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.UnbanResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.UnbanResponse>;
}
interface IXudService_IWalletWithdraw extends grpc.MethodDefinition<opendexrpc_pb.WithdrawRequest, opendexrpc_pb.WithdrawResponse> {
    path: "/opendexrpc.Xud/WalletWithdraw";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<opendexrpc_pb.WithdrawRequest>;
    requestDeserialize: grpc.deserialize<opendexrpc_pb.WithdrawRequest>;
    responseSerialize: grpc.serialize<opendexrpc_pb.WithdrawResponse>;
    responseDeserialize: grpc.deserialize<opendexrpc_pb.WithdrawResponse>;
}

export const XudService: IXudService;

export interface IXudServer extends grpc.UntypedServiceImplementation {
    addCurrency: grpc.handleUnaryCall<opendexrpc_pb.Currency, opendexrpc_pb.AddCurrencyResponse>;
    addPair: grpc.handleUnaryCall<opendexrpc_pb.AddPairRequest, opendexrpc_pb.AddPairResponse>;
    ban: grpc.handleUnaryCall<opendexrpc_pb.BanRequest, opendexrpc_pb.BanResponse>;
    changePassword: grpc.handleUnaryCall<opendexrpc_pb.ChangePasswordRequest, opendexrpc_pb.ChangePasswordResponse>;
    closeChannel: grpc.handleUnaryCall<opendexrpc_pb.CloseChannelRequest, opendexrpc_pb.CloseChannelResponse>;
    connect: grpc.handleUnaryCall<opendexrpc_pb.ConnectRequest, opendexrpc_pb.ConnectResponse>;
    walletDeposit: grpc.handleUnaryCall<opendexrpc_pb.DepositRequest, opendexrpc_pb.DepositResponse>;
    deposit: grpc.handleUnaryCall<opendexrpc_pb.DepositRequest, opendexrpc_pb.DepositResponse>;
    discoverNodes: grpc.handleUnaryCall<opendexrpc_pb.DiscoverNodesRequest, opendexrpc_pb.DiscoverNodesResponse>;
    getBalance: grpc.handleUnaryCall<opendexrpc_pb.GetBalanceRequest, opendexrpc_pb.GetBalanceResponse>;
    getInfo: grpc.handleUnaryCall<opendexrpc_pb.GetInfoRequest, opendexrpc_pb.GetInfoResponse>;
    getMnemonic: grpc.handleUnaryCall<opendexrpc_pb.GetMnemonicRequest, opendexrpc_pb.GetMnemonicResponse>;
    getNodeInfo: grpc.handleUnaryCall<opendexrpc_pb.GetNodeInfoRequest, opendexrpc_pb.GetNodeInfoResponse>;
    listOrders: grpc.handleUnaryCall<opendexrpc_pb.ListOrdersRequest, opendexrpc_pb.ListOrdersResponse>;
    listCurrencies: grpc.handleUnaryCall<opendexrpc_pb.ListCurrenciesRequest, opendexrpc_pb.ListCurrenciesResponse>;
    listPairs: grpc.handleUnaryCall<opendexrpc_pb.ListPairsRequest, opendexrpc_pb.ListPairsResponse>;
    listPeers: grpc.handleUnaryCall<opendexrpc_pb.ListPeersRequest, opendexrpc_pb.ListPeersResponse>;
    openChannel: grpc.handleUnaryCall<opendexrpc_pb.OpenChannelRequest, opendexrpc_pb.OpenChannelResponse>;
    orderBook: grpc.handleUnaryCall<opendexrpc_pb.OrderBookRequest, opendexrpc_pb.OrderBookResponse>;
    placeOrder: grpc.handleServerStreamingCall<opendexrpc_pb.PlaceOrderRequest, opendexrpc_pb.PlaceOrderEvent>;
    placeOrderSync: grpc.handleUnaryCall<opendexrpc_pb.PlaceOrderRequest, opendexrpc_pb.PlaceOrderResponse>;
    executeSwap: grpc.handleUnaryCall<opendexrpc_pb.ExecuteSwapRequest, opendexrpc_pb.SwapSuccess>;
    removeCurrency: grpc.handleUnaryCall<opendexrpc_pb.RemoveCurrencyRequest, opendexrpc_pb.RemoveCurrencyResponse>;
    removeOrder: grpc.handleUnaryCall<opendexrpc_pb.RemoveOrderRequest, opendexrpc_pb.RemoveOrderResponse>;
    removeAllOrders: grpc.handleUnaryCall<opendexrpc_pb.RemoveAllOrdersRequest, opendexrpc_pb.RemoveAllOrdersResponse>;
    removePair: grpc.handleUnaryCall<opendexrpc_pb.RemovePairRequest, opendexrpc_pb.RemovePairResponse>;
    setLogLevel: grpc.handleUnaryCall<opendexrpc_pb.SetLogLevelRequest, opendexrpc_pb.SetLogLevelResponse>;
    shutdown: grpc.handleUnaryCall<opendexrpc_pb.ShutdownRequest, opendexrpc_pb.ShutdownResponse>;
    subscribeOrders: grpc.handleServerStreamingCall<opendexrpc_pb.SubscribeOrdersRequest, opendexrpc_pb.OrderUpdate>;
    subscribeSwapFailures: grpc.handleServerStreamingCall<opendexrpc_pb.SubscribeSwapsRequest, opendexrpc_pb.SwapFailure>;
    subscribeSwaps: grpc.handleServerStreamingCall<opendexrpc_pb.SubscribeSwapsRequest, opendexrpc_pb.SwapSuccess>;
    subscribeSwapsAccepted: grpc.handleServerStreamingCall<opendexrpc_pb.SubscribeSwapsAcceptedRequest, opendexrpc_pb.SwapAccepted>;
    tradeHistory: grpc.handleUnaryCall<opendexrpc_pb.TradeHistoryRequest, opendexrpc_pb.TradeHistoryResponse>;
    tradingLimits: grpc.handleUnaryCall<opendexrpc_pb.TradingLimitsRequest, opendexrpc_pb.TradingLimitsResponse>;
    unban: grpc.handleUnaryCall<opendexrpc_pb.UnbanRequest, opendexrpc_pb.UnbanResponse>;
    walletWithdraw: grpc.handleUnaryCall<opendexrpc_pb.WithdrawRequest, opendexrpc_pb.WithdrawResponse>;
}

export interface IXudClient {
    addCurrency(request: opendexrpc_pb.Currency, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    addCurrency(request: opendexrpc_pb.Currency, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    addCurrency(request: opendexrpc_pb.Currency, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    addPair(request: opendexrpc_pb.AddPairRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    addPair(request: opendexrpc_pb.AddPairRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    addPair(request: opendexrpc_pb.AddPairRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    ban(request: opendexrpc_pb.BanRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    ban(request: opendexrpc_pb.BanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    ban(request: opendexrpc_pb.BanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: opendexrpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: opendexrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: opendexrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    closeChannel(request: opendexrpc_pb.CloseChannelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    closeChannel(request: opendexrpc_pb.CloseChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    closeChannel(request: opendexrpc_pb.CloseChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    connect(request: opendexrpc_pb.ConnectRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    connect(request: opendexrpc_pb.ConnectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    connect(request: opendexrpc_pb.ConnectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    walletDeposit(request: opendexrpc_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    walletDeposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    walletDeposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: opendexrpc_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    deposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: opendexrpc_pb.GetBalanceRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: opendexrpc_pb.GetBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    getBalance(request: opendexrpc_pb.GetBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: opendexrpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: opendexrpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: opendexrpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    listOrders(request: opendexrpc_pb.ListOrdersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    listOrders(request: opendexrpc_pb.ListOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    listOrders(request: opendexrpc_pb.ListOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    listPairs(request: opendexrpc_pb.ListPairsRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    listPairs(request: opendexrpc_pb.ListPairsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    listPairs(request: opendexrpc_pb.ListPairsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: opendexrpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: opendexrpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: opendexrpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    openChannel(request: opendexrpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    openChannel(request: opendexrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    openChannel(request: opendexrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    orderBook(request: opendexrpc_pb.OrderBookRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    orderBook(request: opendexrpc_pb.OrderBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    orderBook(request: opendexrpc_pb.OrderBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    placeOrder(request: opendexrpc_pb.PlaceOrderRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.PlaceOrderEvent>;
    placeOrder(request: opendexrpc_pb.PlaceOrderRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.PlaceOrderEvent>;
    placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    removeOrder(request: opendexrpc_pb.RemoveOrderRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    removeOrder(request: opendexrpc_pb.RemoveOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    removeOrder(request: opendexrpc_pb.RemoveOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    removePair(request: opendexrpc_pb.RemovePairRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    removePair(request: opendexrpc_pb.RemovePairRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    removePair(request: opendexrpc_pb.RemovePairRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    shutdown(request: opendexrpc_pb.ShutdownRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    shutdown(request: opendexrpc_pb.ShutdownRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    shutdown(request: opendexrpc_pb.ShutdownRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    subscribeOrders(request: opendexrpc_pb.SubscribeOrdersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.OrderUpdate>;
    subscribeOrders(request: opendexrpc_pb.SubscribeOrdersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.OrderUpdate>;
    subscribeSwapFailures(request: opendexrpc_pb.SubscribeSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapFailure>;
    subscribeSwapFailures(request: opendexrpc_pb.SubscribeSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapFailure>;
    subscribeSwaps(request: opendexrpc_pb.SubscribeSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapSuccess>;
    subscribeSwaps(request: opendexrpc_pb.SubscribeSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapSuccess>;
    subscribeSwapsAccepted(request: opendexrpc_pb.SubscribeSwapsAcceptedRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapAccepted>;
    subscribeSwapsAccepted(request: opendexrpc_pb.SubscribeSwapsAcceptedRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapAccepted>;
    tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    unban(request: opendexrpc_pb.UnbanRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    unban(request: opendexrpc_pb.UnbanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    unban(request: opendexrpc_pb.UnbanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    walletWithdraw(request: opendexrpc_pb.WithdrawRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
    walletWithdraw(request: opendexrpc_pb.WithdrawRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
    walletWithdraw(request: opendexrpc_pb.WithdrawRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
}

export class XudClient extends grpc.Client implements IXudClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addCurrency(request: opendexrpc_pb.Currency, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    public addCurrency(request: opendexrpc_pb.Currency, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    public addCurrency(request: opendexrpc_pb.Currency, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddCurrencyResponse) => void): grpc.ClientUnaryCall;
    public addPair(request: opendexrpc_pb.AddPairRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    public addPair(request: opendexrpc_pb.AddPairRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    public addPair(request: opendexrpc_pb.AddPairRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.AddPairResponse) => void): grpc.ClientUnaryCall;
    public ban(request: opendexrpc_pb.BanRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    public ban(request: opendexrpc_pb.BanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    public ban(request: opendexrpc_pb.BanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.BanResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: opendexrpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: opendexrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: opendexrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public closeChannel(request: opendexrpc_pb.CloseChannelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    public closeChannel(request: opendexrpc_pb.CloseChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    public closeChannel(request: opendexrpc_pb.CloseChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.CloseChannelResponse) => void): grpc.ClientUnaryCall;
    public connect(request: opendexrpc_pb.ConnectRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    public connect(request: opendexrpc_pb.ConnectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    public connect(request: opendexrpc_pb.ConnectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ConnectResponse) => void): grpc.ClientUnaryCall;
    public walletDeposit(request: opendexrpc_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public walletDeposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public walletDeposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: opendexrpc_pb.DepositRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public deposit(request: opendexrpc_pb.DepositRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DepositResponse) => void): grpc.ClientUnaryCall;
    public discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    public discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    public discoverNodes(request: opendexrpc_pb.DiscoverNodesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.DiscoverNodesResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: opendexrpc_pb.GetBalanceRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: opendexrpc_pb.GetBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public getBalance(request: opendexrpc_pb.GetBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetBalanceResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: opendexrpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: opendexrpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: opendexrpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    public getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    public getMnemonic(request: opendexrpc_pb.GetMnemonicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetMnemonicResponse) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: opendexrpc_pb.GetNodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.GetNodeInfoResponse) => void): grpc.ClientUnaryCall;
    public listOrders(request: opendexrpc_pb.ListOrdersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    public listOrders(request: opendexrpc_pb.ListOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    public listOrders(request: opendexrpc_pb.ListOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListOrdersResponse) => void): grpc.ClientUnaryCall;
    public listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    public listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    public listCurrencies(request: opendexrpc_pb.ListCurrenciesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListCurrenciesResponse) => void): grpc.ClientUnaryCall;
    public listPairs(request: opendexrpc_pb.ListPairsRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    public listPairs(request: opendexrpc_pb.ListPairsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    public listPairs(request: opendexrpc_pb.ListPairsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPairsResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: opendexrpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: opendexrpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: opendexrpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public openChannel(request: opendexrpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    public openChannel(request: opendexrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    public openChannel(request: opendexrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OpenChannelResponse) => void): grpc.ClientUnaryCall;
    public orderBook(request: opendexrpc_pb.OrderBookRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    public orderBook(request: opendexrpc_pb.OrderBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    public orderBook(request: opendexrpc_pb.OrderBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.OrderBookResponse) => void): grpc.ClientUnaryCall;
    public placeOrder(request: opendexrpc_pb.PlaceOrderRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.PlaceOrderEvent>;
    public placeOrder(request: opendexrpc_pb.PlaceOrderRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.PlaceOrderEvent>;
    public placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public placeOrderSync(request: opendexrpc_pb.PlaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.PlaceOrderResponse) => void): grpc.ClientUnaryCall;
    public executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    public executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    public executeSwap(request: opendexrpc_pb.ExecuteSwapRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SwapSuccess) => void): grpc.ClientUnaryCall;
    public removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    public removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    public removeCurrency(request: opendexrpc_pb.RemoveCurrencyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveCurrencyResponse) => void): grpc.ClientUnaryCall;
    public removeOrder(request: opendexrpc_pb.RemoveOrderRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    public removeOrder(request: opendexrpc_pb.RemoveOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    public removeOrder(request: opendexrpc_pb.RemoveOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveOrderResponse) => void): grpc.ClientUnaryCall;
    public removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    public removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    public removeAllOrders(request: opendexrpc_pb.RemoveAllOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemoveAllOrdersResponse) => void): grpc.ClientUnaryCall;
    public removePair(request: opendexrpc_pb.RemovePairRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    public removePair(request: opendexrpc_pb.RemovePairRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    public removePair(request: opendexrpc_pb.RemovePairRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.RemovePairResponse) => void): grpc.ClientUnaryCall;
    public setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    public setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    public setLogLevel(request: opendexrpc_pb.SetLogLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.SetLogLevelResponse) => void): grpc.ClientUnaryCall;
    public shutdown(request: opendexrpc_pb.ShutdownRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    public shutdown(request: opendexrpc_pb.ShutdownRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    public shutdown(request: opendexrpc_pb.ShutdownRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.ShutdownResponse) => void): grpc.ClientUnaryCall;
    public subscribeOrders(request: opendexrpc_pb.SubscribeOrdersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.OrderUpdate>;
    public subscribeOrders(request: opendexrpc_pb.SubscribeOrdersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.OrderUpdate>;
    public subscribeSwapFailures(request: opendexrpc_pb.SubscribeSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapFailure>;
    public subscribeSwapFailures(request: opendexrpc_pb.SubscribeSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapFailure>;
    public subscribeSwaps(request: opendexrpc_pb.SubscribeSwapsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapSuccess>;
    public subscribeSwaps(request: opendexrpc_pb.SubscribeSwapsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapSuccess>;
    public subscribeSwapsAccepted(request: opendexrpc_pb.SubscribeSwapsAcceptedRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapAccepted>;
    public subscribeSwapsAccepted(request: opendexrpc_pb.SubscribeSwapsAcceptedRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<opendexrpc_pb.SwapAccepted>;
    public tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    public tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    public tradeHistory(request: opendexrpc_pb.TradeHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradeHistoryResponse) => void): grpc.ClientUnaryCall;
    public tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    public tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    public tradingLimits(request: opendexrpc_pb.TradingLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.TradingLimitsResponse) => void): grpc.ClientUnaryCall;
    public unban(request: opendexrpc_pb.UnbanRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    public unban(request: opendexrpc_pb.UnbanRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    public unban(request: opendexrpc_pb.UnbanRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.UnbanResponse) => void): grpc.ClientUnaryCall;
    public walletWithdraw(request: opendexrpc_pb.WithdrawRequest, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
    public walletWithdraw(request: opendexrpc_pb.WithdrawRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
    public walletWithdraw(request: opendexrpc_pb.WithdrawRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: opendexrpc_pb.WithdrawResponse) => void): grpc.ClientUnaryCall;
}

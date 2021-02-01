// source: opendexrpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var annotations_pb = require('./annotations_pb.js');
goog.object.extend(proto, annotations_pb);
goog.exportSymbol('proto.opendexrpc.AddCurrencyResponse', null, global);
goog.exportSymbol('proto.opendexrpc.AddPairRequest', null, global);
goog.exportSymbol('proto.opendexrpc.AddPairResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Balance', null, global);
goog.exportSymbol('proto.opendexrpc.BanRequest', null, global);
goog.exportSymbol('proto.opendexrpc.BanResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Chain', null, global);
goog.exportSymbol('proto.opendexrpc.ChangePasswordRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ChangePasswordResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Channels', null, global);
goog.exportSymbol('proto.opendexrpc.CloseChannelRequest', null, global);
goog.exportSymbol('proto.opendexrpc.CloseChannelResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ConnectRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ConnectResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ConnextInfo', null, global);
goog.exportSymbol('proto.opendexrpc.CreateNodeRequest', null, global);
goog.exportSymbol('proto.opendexrpc.CreateNodeResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Currency', null, global);
goog.exportSymbol('proto.opendexrpc.Currency.SwapClient', null, global);
goog.exportSymbol('proto.opendexrpc.DepositRequest', null, global);
goog.exportSymbol('proto.opendexrpc.DepositResponse', null, global);
goog.exportSymbol('proto.opendexrpc.DiscoverNodesRequest', null, global);
goog.exportSymbol('proto.opendexrpc.DiscoverNodesResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ExecuteSwapRequest', null, global);
goog.exportSymbol('proto.opendexrpc.GetBalanceRequest', null, global);
goog.exportSymbol('proto.opendexrpc.GetBalanceResponse', null, global);
goog.exportSymbol('proto.opendexrpc.GetInfoRequest', null, global);
goog.exportSymbol('proto.opendexrpc.GetInfoResponse', null, global);
goog.exportSymbol('proto.opendexrpc.GetMnemonicRequest', null, global);
goog.exportSymbol('proto.opendexrpc.GetMnemonicResponse', null, global);
goog.exportSymbol('proto.opendexrpc.GetNodeInfoRequest', null, global);
goog.exportSymbol('proto.opendexrpc.GetNodeInfoResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ListCurrenciesRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ListCurrenciesResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ListOrdersRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ListOrdersRequest.Owner', null, global);
goog.exportSymbol('proto.opendexrpc.ListOrdersResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ListPairsRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ListPairsResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ListPeersRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ListPeersResponse', null, global);
goog.exportSymbol('proto.opendexrpc.LndInfo', null, global);
goog.exportSymbol('proto.opendexrpc.LogLevel', null, global);
goog.exportSymbol('proto.opendexrpc.NodeIdentifier', null, global);
goog.exportSymbol('proto.opendexrpc.OpenChannelRequest', null, global);
goog.exportSymbol('proto.opendexrpc.OpenChannelResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Order', null, global);
goog.exportSymbol('proto.opendexrpc.OrderBookRequest', null, global);
goog.exportSymbol('proto.opendexrpc.OrderBookResponse', null, global);
goog.exportSymbol('proto.opendexrpc.OrderBookResponse.Bucket', null, global);
goog.exportSymbol('proto.opendexrpc.OrderBookResponse.Buckets', null, global);
goog.exportSymbol('proto.opendexrpc.OrderRemoval', null, global);
goog.exportSymbol('proto.opendexrpc.OrderSide', null, global);
goog.exportSymbol('proto.opendexrpc.OrderUpdate', null, global);
goog.exportSymbol('proto.opendexrpc.OrderUpdate.OrderUpdateCase', null, global);
goog.exportSymbol('proto.opendexrpc.Orders', null, global);
goog.exportSymbol('proto.opendexrpc.OrdersCount', null, global);
goog.exportSymbol('proto.opendexrpc.Peer', null, global);
goog.exportSymbol('proto.opendexrpc.Peer.LndUris', null, global);
goog.exportSymbol('proto.opendexrpc.PlaceOrderEvent', null, global);
goog.exportSymbol('proto.opendexrpc.PlaceOrderEvent.EventCase', null, global);
goog.exportSymbol('proto.opendexrpc.PlaceOrderRequest', null, global);
goog.exportSymbol('proto.opendexrpc.PlaceOrderResponse', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveAllOrdersRequest', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveAllOrdersResponse', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveCurrencyRequest', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveCurrencyResponse', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveOrderRequest', null, global);
goog.exportSymbol('proto.opendexrpc.RemoveOrderResponse', null, global);
goog.exportSymbol('proto.opendexrpc.RemovePairRequest', null, global);
goog.exportSymbol('proto.opendexrpc.RemovePairResponse', null, global);
goog.exportSymbol('proto.opendexrpc.RestoreNodeRequest', null, global);
goog.exportSymbol('proto.opendexrpc.RestoreNodeResponse', null, global);
goog.exportSymbol('proto.opendexrpc.Role', null, global);
goog.exportSymbol('proto.opendexrpc.SetLogLevelRequest', null, global);
goog.exportSymbol('proto.opendexrpc.SetLogLevelResponse', null, global);
goog.exportSymbol('proto.opendexrpc.ShutdownRequest', null, global);
goog.exportSymbol('proto.opendexrpc.ShutdownResponse', null, global);
goog.exportSymbol('proto.opendexrpc.SubscribeOrdersRequest', null, global);
goog.exportSymbol('proto.opendexrpc.SubscribeSwapsAcceptedRequest', null, global);
goog.exportSymbol('proto.opendexrpc.SubscribeSwapsRequest', null, global);
goog.exportSymbol('proto.opendexrpc.SwapAccepted', null, global);
goog.exportSymbol('proto.opendexrpc.SwapFailure', null, global);
goog.exportSymbol('proto.opendexrpc.SwapSuccess', null, global);
goog.exportSymbol('proto.opendexrpc.Trade', null, global);
goog.exportSymbol('proto.opendexrpc.TradeHistoryRequest', null, global);
goog.exportSymbol('proto.opendexrpc.TradeHistoryResponse', null, global);
goog.exportSymbol('proto.opendexrpc.TradingLimits', null, global);
goog.exportSymbol('proto.opendexrpc.TradingLimitsRequest', null, global);
goog.exportSymbol('proto.opendexrpc.TradingLimitsResponse', null, global);
goog.exportSymbol('proto.opendexrpc.UnbanRequest', null, global);
goog.exportSymbol('proto.opendexrpc.UnbanResponse', null, global);
goog.exportSymbol('proto.opendexrpc.UnlockNodeRequest', null, global);
goog.exportSymbol('proto.opendexrpc.UnlockNodeResponse', null, global);
goog.exportSymbol('proto.opendexrpc.WithdrawRequest', null, global);
goog.exportSymbol('proto.opendexrpc.WithdrawResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.AddCurrencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.AddCurrencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.AddCurrencyResponse.displayName = 'proto.opendexrpc.AddCurrencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.AddPairRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.AddPairRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.AddPairRequest.displayName = 'proto.opendexrpc.AddPairRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.AddPairResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.AddPairResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.AddPairResponse.displayName = 'proto.opendexrpc.AddPairResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Balance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Balance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Balance.displayName = 'proto.opendexrpc.Balance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.BanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.BanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.BanRequest.displayName = 'proto.opendexrpc.BanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.BanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.BanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.BanResponse.displayName = 'proto.opendexrpc.BanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Chain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Chain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Chain.displayName = 'proto.opendexrpc.Chain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Channels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Channels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Channels.displayName = 'proto.opendexrpc.Channels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ChangePasswordRequest.displayName = 'proto.opendexrpc.ChangePasswordRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ChangePasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ChangePasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ChangePasswordResponse.displayName = 'proto.opendexrpc.ChangePasswordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.CloseChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.CloseChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.CloseChannelRequest.displayName = 'proto.opendexrpc.CloseChannelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.CloseChannelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.CloseChannelResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.CloseChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.CloseChannelResponse.displayName = 'proto.opendexrpc.CloseChannelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ConnectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ConnectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ConnectRequest.displayName = 'proto.opendexrpc.ConnectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ConnectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ConnectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ConnectResponse.displayName = 'proto.opendexrpc.ConnectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.CreateNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.CreateNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.CreateNodeRequest.displayName = 'proto.opendexrpc.CreateNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.CreateNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.CreateNodeResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.CreateNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.CreateNodeResponse.displayName = 'proto.opendexrpc.CreateNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Currency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Currency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Currency.displayName = 'proto.opendexrpc.Currency';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.DepositRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.DepositRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.DepositRequest.displayName = 'proto.opendexrpc.DepositRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.DepositResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.DepositResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.DepositResponse.displayName = 'proto.opendexrpc.DepositResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.DiscoverNodesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.DiscoverNodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.DiscoverNodesRequest.displayName = 'proto.opendexrpc.DiscoverNodesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.DiscoverNodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.DiscoverNodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.DiscoverNodesResponse.displayName = 'proto.opendexrpc.DiscoverNodesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ExecuteSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ExecuteSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ExecuteSwapRequest.displayName = 'proto.opendexrpc.ExecuteSwapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetBalanceRequest.displayName = 'proto.opendexrpc.GetBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetBalanceResponse.displayName = 'proto.opendexrpc.GetBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetInfoRequest.displayName = 'proto.opendexrpc.GetInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.GetInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.GetInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetInfoResponse.displayName = 'proto.opendexrpc.GetInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetMnemonicRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetMnemonicRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetMnemonicRequest.displayName = 'proto.opendexrpc.GetMnemonicRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetMnemonicResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.GetMnemonicResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.GetMnemonicResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetMnemonicResponse.displayName = 'proto.opendexrpc.GetMnemonicResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetNodeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetNodeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetNodeInfoRequest.displayName = 'proto.opendexrpc.GetNodeInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.GetNodeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.GetNodeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.GetNodeInfoResponse.displayName = 'proto.opendexrpc.GetNodeInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListCurrenciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ListCurrenciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListCurrenciesRequest.displayName = 'proto.opendexrpc.ListCurrenciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListCurrenciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.ListCurrenciesResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.ListCurrenciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListCurrenciesResponse.displayName = 'proto.opendexrpc.ListCurrenciesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ListOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListOrdersRequest.displayName = 'proto.opendexrpc.ListOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ListOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListOrdersResponse.displayName = 'proto.opendexrpc.ListOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListPairsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ListPairsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListPairsRequest.displayName = 'proto.opendexrpc.ListPairsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListPairsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.ListPairsResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.ListPairsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListPairsResponse.displayName = 'proto.opendexrpc.ListPairsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListPeersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ListPeersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListPeersRequest.displayName = 'proto.opendexrpc.ListPeersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ListPeersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.ListPeersResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.ListPeersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ListPeersResponse.displayName = 'proto.opendexrpc.ListPeersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.LndInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.LndInfo.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.LndInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.LndInfo.displayName = 'proto.opendexrpc.LndInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.NodeIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.NodeIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.NodeIdentifier.displayName = 'proto.opendexrpc.NodeIdentifier';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OpenChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OpenChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OpenChannelRequest.displayName = 'proto.opendexrpc.OpenChannelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OpenChannelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OpenChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OpenChannelResponse.displayName = 'proto.opendexrpc.OpenChannelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Order.displayName = 'proto.opendexrpc.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderBookRequest.displayName = 'proto.opendexrpc.OrderBookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderBookResponse.displayName = 'proto.opendexrpc.OrderBookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderBookResponse.Bucket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OrderBookResponse.Bucket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderBookResponse.Bucket.displayName = 'proto.opendexrpc.OrderBookResponse.Bucket';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderBookResponse.Buckets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.OrderBookResponse.Buckets.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.OrderBookResponse.Buckets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderBookResponse.Buckets.displayName = 'proto.opendexrpc.OrderBookResponse.Buckets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderRemoval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OrderRemoval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderRemoval.displayName = 'proto.opendexrpc.OrderRemoval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Orders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.Orders.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.Orders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Orders.displayName = 'proto.opendexrpc.Orders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrdersCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.OrdersCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrdersCount.displayName = 'proto.opendexrpc.OrdersCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.OrderUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.opendexrpc.OrderUpdate.oneofGroups_);
};
goog.inherits(proto.opendexrpc.OrderUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.OrderUpdate.displayName = 'proto.opendexrpc.OrderUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Peer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.Peer.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.Peer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Peer.displayName = 'proto.opendexrpc.Peer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Peer.LndUris = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.Peer.LndUris.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.Peer.LndUris, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Peer.LndUris.displayName = 'proto.opendexrpc.Peer.LndUris';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.PlaceOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.PlaceOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.PlaceOrderRequest.displayName = 'proto.opendexrpc.PlaceOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.PlaceOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.PlaceOrderResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.PlaceOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.PlaceOrderResponse.displayName = 'proto.opendexrpc.PlaceOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.PlaceOrderEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.opendexrpc.PlaceOrderEvent.oneofGroups_);
};
goog.inherits(proto.opendexrpc.PlaceOrderEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.PlaceOrderEvent.displayName = 'proto.opendexrpc.PlaceOrderEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ConnextInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ConnextInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ConnextInfo.displayName = 'proto.opendexrpc.ConnextInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveCurrencyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemoveCurrencyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveCurrencyRequest.displayName = 'proto.opendexrpc.RemoveCurrencyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveCurrencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemoveCurrencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveCurrencyResponse.displayName = 'proto.opendexrpc.RemoveCurrencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemoveOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveOrderRequest.displayName = 'proto.opendexrpc.RemoveOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemoveOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveOrderResponse.displayName = 'proto.opendexrpc.RemoveOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveAllOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemoveAllOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveAllOrdersRequest.displayName = 'proto.opendexrpc.RemoveAllOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemoveAllOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.RemoveAllOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.RemoveAllOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemoveAllOrdersResponse.displayName = 'proto.opendexrpc.RemoveAllOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemovePairRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemovePairRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemovePairRequest.displayName = 'proto.opendexrpc.RemovePairRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RemovePairResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.RemovePairResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RemovePairResponse.displayName = 'proto.opendexrpc.RemovePairResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RestoreNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.RestoreNodeRequest.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.RestoreNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RestoreNodeRequest.displayName = 'proto.opendexrpc.RestoreNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.RestoreNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.RestoreNodeResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.RestoreNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.RestoreNodeResponse.displayName = 'proto.opendexrpc.RestoreNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SetLogLevelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SetLogLevelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SetLogLevelRequest.displayName = 'proto.opendexrpc.SetLogLevelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SetLogLevelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SetLogLevelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SetLogLevelResponse.displayName = 'proto.opendexrpc.SetLogLevelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ShutdownRequest.displayName = 'proto.opendexrpc.ShutdownRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.ShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.ShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.ShutdownResponse.displayName = 'proto.opendexrpc.ShutdownResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SubscribeOrdersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SubscribeOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SubscribeOrdersRequest.displayName = 'proto.opendexrpc.SubscribeOrdersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SubscribeSwapsAcceptedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SubscribeSwapsAcceptedRequest.displayName = 'proto.opendexrpc.SubscribeSwapsAcceptedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SubscribeSwapsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SubscribeSwapsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SubscribeSwapsRequest.displayName = 'proto.opendexrpc.SubscribeSwapsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SwapAccepted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SwapAccepted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SwapAccepted.displayName = 'proto.opendexrpc.SwapAccepted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SwapFailure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SwapFailure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SwapFailure.displayName = 'proto.opendexrpc.SwapFailure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.SwapSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.SwapSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.SwapSuccess.displayName = 'proto.opendexrpc.SwapSuccess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.Trade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.Trade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.Trade.displayName = 'proto.opendexrpc.Trade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.TradeHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.TradeHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.TradeHistoryRequest.displayName = 'proto.opendexrpc.TradeHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.TradeHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.TradeHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.TradeHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.TradeHistoryResponse.displayName = 'proto.opendexrpc.TradeHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.TradingLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.TradingLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.TradingLimits.displayName = 'proto.opendexrpc.TradingLimits';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.TradingLimitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.TradingLimitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.TradingLimitsRequest.displayName = 'proto.opendexrpc.TradingLimitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.TradingLimitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.TradingLimitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.TradingLimitsResponse.displayName = 'proto.opendexrpc.TradingLimitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.UnbanRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.UnbanRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.UnbanRequest.displayName = 'proto.opendexrpc.UnbanRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.UnbanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.UnbanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.UnbanResponse.displayName = 'proto.opendexrpc.UnbanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.UnlockNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.UnlockNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.UnlockNodeRequest.displayName = 'proto.opendexrpc.UnlockNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.UnlockNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.opendexrpc.UnlockNodeResponse.repeatedFields_, null);
};
goog.inherits(proto.opendexrpc.UnlockNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.UnlockNodeResponse.displayName = 'proto.opendexrpc.UnlockNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.WithdrawRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.WithdrawRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.WithdrawRequest.displayName = 'proto.opendexrpc.WithdrawRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.opendexrpc.WithdrawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opendexrpc.WithdrawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opendexrpc.WithdrawResponse.displayName = 'proto.opendexrpc.WithdrawResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.AddCurrencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.AddCurrencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.AddCurrencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddCurrencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.AddCurrencyResponse}
 */
proto.opendexrpc.AddCurrencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.AddCurrencyResponse;
  return proto.opendexrpc.AddCurrencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.AddCurrencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.AddCurrencyResponse}
 */
proto.opendexrpc.AddCurrencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.AddCurrencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.AddCurrencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.AddCurrencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddCurrencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.AddPairRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.AddPairRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.AddPairRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddPairRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseCurrency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quoteCurrency: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.AddPairRequest}
 */
proto.opendexrpc.AddPairRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.AddPairRequest;
  return proto.opendexrpc.AddPairRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.AddPairRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.AddPairRequest}
 */
proto.opendexrpc.AddPairRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseCurrency(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.AddPairRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.AddPairRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.AddPairRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddPairRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuoteCurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string base_currency = 1;
 * @return {string}
 */
proto.opendexrpc.AddPairRequest.prototype.getBaseCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.AddPairRequest} returns this
 */
proto.opendexrpc.AddPairRequest.prototype.setBaseCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string quote_currency = 2;
 * @return {string}
 */
proto.opendexrpc.AddPairRequest.prototype.getQuoteCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.AddPairRequest} returns this
 */
proto.opendexrpc.AddPairRequest.prototype.setQuoteCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.AddPairResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.AddPairResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.AddPairResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddPairResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.AddPairResponse}
 */
proto.opendexrpc.AddPairResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.AddPairResponse;
  return proto.opendexrpc.AddPairResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.AddPairResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.AddPairResponse}
 */
proto.opendexrpc.AddPairResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.AddPairResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.AddPairResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.AddPairResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.AddPairResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Balance.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Balance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Balance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Balance.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalBalance: jspb.Message.getFieldWithDefault(msg, 1, 0),
    channelBalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pendingChannelBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    inactiveChannelBalance: jspb.Message.getFieldWithDefault(msg, 4, 0),
    walletBalance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    unconfirmedWalletBalance: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Balance}
 */
proto.opendexrpc.Balance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Balance;
  return proto.opendexrpc.Balance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Balance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Balance}
 */
proto.opendexrpc.Balance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalBalance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChannelBalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPendingChannelBalance(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInactiveChannelBalance(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWalletBalance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnconfirmedWalletBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Balance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Balance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Balance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Balance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalBalance();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getChannelBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPendingChannelBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getInactiveChannelBalance();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getWalletBalance();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getUnconfirmedWalletBalance();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint64 total_balance = 1;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getTotalBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setTotalBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 channel_balance = 2;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getChannelBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setChannelBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 pending_channel_balance = 3;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getPendingChannelBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setPendingChannelBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 inactive_channel_balance = 4;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getInactiveChannelBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setInactiveChannelBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 wallet_balance = 5;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getWalletBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setWalletBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 unconfirmed_wallet_balance = 6;
 * @return {number}
 */
proto.opendexrpc.Balance.prototype.getUnconfirmedWalletBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Balance} returns this
 */
proto.opendexrpc.Balance.prototype.setUnconfirmedWalletBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.BanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.BanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.BanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.BanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.BanRequest}
 */
proto.opendexrpc.BanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.BanRequest;
  return proto.opendexrpc.BanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.BanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.BanRequest}
 */
proto.opendexrpc.BanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.BanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.BanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.BanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.BanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.BanRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.BanRequest} returns this
 */
proto.opendexrpc.BanRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.BanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.BanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.BanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.BanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.BanResponse}
 */
proto.opendexrpc.BanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.BanResponse;
  return proto.opendexrpc.BanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.BanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.BanResponse}
 */
proto.opendexrpc.BanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.BanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.BanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.BanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.BanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Chain.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Chain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Chain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Chain.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    network: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Chain}
 */
proto.opendexrpc.Chain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Chain;
  return proto.opendexrpc.Chain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Chain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Chain}
 */
proto.opendexrpc.Chain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Chain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Chain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Chain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Chain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string chain = 1;
 * @return {string}
 */
proto.opendexrpc.Chain.prototype.getChain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Chain} returns this
 */
proto.opendexrpc.Chain.prototype.setChain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string network = 2;
 * @return {string}
 */
proto.opendexrpc.Chain.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Chain} returns this
 */
proto.opendexrpc.Chain.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Channels.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Channels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Channels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Channels.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inactive: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pending: jspb.Message.getFieldWithDefault(msg, 3, 0),
    closed: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Channels}
 */
proto.opendexrpc.Channels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Channels;
  return proto.opendexrpc.Channels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Channels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Channels}
 */
proto.opendexrpc.Channels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInactive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPending(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClosed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Channels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Channels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Channels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Channels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInactive();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPending();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getClosed();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 active = 1;
 * @return {number}
 */
proto.opendexrpc.Channels.prototype.getActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Channels} returns this
 */
proto.opendexrpc.Channels.prototype.setActive = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 inactive = 2;
 * @return {number}
 */
proto.opendexrpc.Channels.prototype.getInactive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Channels} returns this
 */
proto.opendexrpc.Channels.prototype.setInactive = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 pending = 3;
 * @return {number}
 */
proto.opendexrpc.Channels.prototype.getPending = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Channels} returns this
 */
proto.opendexrpc.Channels.prototype.setPending = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 closed = 4;
 * @return {number}
 */
proto.opendexrpc.Channels.prototype.getClosed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Channels} returns this
 */
proto.opendexrpc.Channels.prototype.setClosed = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    newPassword: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ChangePasswordRequest}
 */
proto.opendexrpc.ChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ChangePasswordRequest;
  return proto.opendexrpc.ChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ChangePasswordRequest}
 */
proto.opendexrpc.ChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ChangePasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string new_password = 1;
 * @return {string}
 */
proto.opendexrpc.ChangePasswordRequest.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ChangePasswordRequest} returns this
 */
proto.opendexrpc.ChangePasswordRequest.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.opendexrpc.ChangePasswordRequest.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ChangePasswordRequest} returns this
 */
proto.opendexrpc.ChangePasswordRequest.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ChangePasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ChangePasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ChangePasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ChangePasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ChangePasswordResponse}
 */
proto.opendexrpc.ChangePasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ChangePasswordResponse;
  return proto.opendexrpc.ChangePasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ChangePasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ChangePasswordResponse}
 */
proto.opendexrpc.ChangePasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ChangePasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ChangePasswordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ChangePasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ChangePasswordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.CloseChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.CloseChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.CloseChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CloseChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 2, ""),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    destination: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.CloseChannelRequest}
 */
proto.opendexrpc.CloseChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.CloseChannelRequest;
  return proto.opendexrpc.CloseChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.CloseChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.CloseChannelRequest}
 */
proto.opendexrpc.CloseChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.CloseChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.CloseChannelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.CloseChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CloseChannelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency = 2;
 * @return {string}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool force = 3;
 * @return {boolean}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string destination = 4;
 * @return {string}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 amount = 5;
 * @return {number}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 fee = 6;
 * @return {number}
 */
proto.opendexrpc.CloseChannelRequest.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.CloseChannelRequest} returns this
 */
proto.opendexrpc.CloseChannelRequest.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.CloseChannelResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.CloseChannelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.CloseChannelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.CloseChannelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CloseChannelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.CloseChannelResponse}
 */
proto.opendexrpc.CloseChannelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.CloseChannelResponse;
  return proto.opendexrpc.CloseChannelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.CloseChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.CloseChannelResponse}
 */
proto.opendexrpc.CloseChannelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTransactionIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.CloseChannelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.CloseChannelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.CloseChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CloseChannelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string transaction_ids = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.CloseChannelResponse.prototype.getTransactionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.CloseChannelResponse} returns this
 */
proto.opendexrpc.CloseChannelResponse.prototype.setTransactionIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.CloseChannelResponse} returns this
 */
proto.opendexrpc.CloseChannelResponse.prototype.addTransactionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.CloseChannelResponse} returns this
 */
proto.opendexrpc.CloseChannelResponse.prototype.clearTransactionIdsList = function() {
  return this.setTransactionIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ConnectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ConnectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ConnectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeUri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ConnectRequest}
 */
proto.opendexrpc.ConnectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ConnectRequest;
  return proto.opendexrpc.ConnectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ConnectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ConnectRequest}
 */
proto.opendexrpc.ConnectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ConnectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ConnectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ConnectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_uri = 1;
 * @return {string}
 */
proto.opendexrpc.ConnectRequest.prototype.getNodeUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ConnectRequest} returns this
 */
proto.opendexrpc.ConnectRequest.prototype.setNodeUri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ConnectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ConnectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ConnectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ConnectResponse}
 */
proto.opendexrpc.ConnectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ConnectResponse;
  return proto.opendexrpc.ConnectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ConnectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ConnectResponse}
 */
proto.opendexrpc.ConnectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ConnectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ConnectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ConnectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.CreateNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.CreateNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.CreateNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CreateNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.CreateNodeRequest}
 */
proto.opendexrpc.CreateNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.CreateNodeRequest;
  return proto.opendexrpc.CreateNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.CreateNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.CreateNodeRequest}
 */
proto.opendexrpc.CreateNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.CreateNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.CreateNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.CreateNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CreateNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.opendexrpc.CreateNodeRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.CreateNodeRequest} returns this
 */
proto.opendexrpc.CreateNodeRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.CreateNodeResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.CreateNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.CreateNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.CreateNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CreateNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    seedMnemonicList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    initializedLndsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    initializedConnext: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.CreateNodeResponse}
 */
proto.opendexrpc.CreateNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.CreateNodeResponse;
  return proto.opendexrpc.CreateNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.CreateNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.CreateNodeResponse}
 */
proto.opendexrpc.CreateNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeedMnemonic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addInitializedLnds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInitializedConnext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.CreateNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.CreateNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.CreateNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.CreateNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeedMnemonicList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getInitializedLndsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getInitializedConnext();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated string seed_mnemonic = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.CreateNodeResponse.prototype.getSeedMnemonicList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.setSeedMnemonicList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.addSeedMnemonic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.clearSeedMnemonicList = function() {
  return this.setSeedMnemonicList([]);
};


/**
 * repeated string initialized_lnds = 2;
 * @return {!Array<string>}
 */
proto.opendexrpc.CreateNodeResponse.prototype.getInitializedLndsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.setInitializedLndsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.addInitializedLnds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.clearInitializedLndsList = function() {
  return this.setInitializedLndsList([]);
};


/**
 * optional bool initialized_connext = 3;
 * @return {boolean}
 */
proto.opendexrpc.CreateNodeResponse.prototype.getInitializedConnext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.CreateNodeResponse} returns this
 */
proto.opendexrpc.CreateNodeResponse.prototype.setInitializedConnext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Currency.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Currency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Currency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Currency.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    swapClient: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tokenAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    decimalPlaces: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Currency}
 */
proto.opendexrpc.Currency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Currency;
  return proto.opendexrpc.Currency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Currency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Currency}
 */
proto.opendexrpc.Currency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {!proto.opendexrpc.Currency.SwapClient} */ (reader.readEnum());
      msg.setSwapClient(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDecimalPlaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Currency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Currency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Currency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Currency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSwapClient();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTokenAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDecimalPlaces();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.opendexrpc.Currency.SwapClient = {
  LND: 0,
  CONNEXT: 2
};

/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.Currency.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Currency} returns this
 */
proto.opendexrpc.Currency.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SwapClient swap_client = 2;
 * @return {!proto.opendexrpc.Currency.SwapClient}
 */
proto.opendexrpc.Currency.prototype.getSwapClient = function() {
  return /** @type {!proto.opendexrpc.Currency.SwapClient} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.opendexrpc.Currency.SwapClient} value
 * @return {!proto.opendexrpc.Currency} returns this
 */
proto.opendexrpc.Currency.prototype.setSwapClient = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string token_address = 3;
 * @return {string}
 */
proto.opendexrpc.Currency.prototype.getTokenAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Currency} returns this
 */
proto.opendexrpc.Currency.prototype.setTokenAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 decimal_places = 4;
 * @return {number}
 */
proto.opendexrpc.Currency.prototype.getDecimalPlaces = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Currency} returns this
 */
proto.opendexrpc.Currency.prototype.setDecimalPlaces = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.DepositRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.DepositRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.DepositRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DepositRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.DepositRequest}
 */
proto.opendexrpc.DepositRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.DepositRequest;
  return proto.opendexrpc.DepositRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.DepositRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.DepositRequest}
 */
proto.opendexrpc.DepositRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.DepositRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.DepositRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.DepositRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DepositRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.DepositRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.DepositRequest} returns this
 */
proto.opendexrpc.DepositRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.DepositResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.DepositResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.DepositResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DepositResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.DepositResponse}
 */
proto.opendexrpc.DepositResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.DepositResponse;
  return proto.opendexrpc.DepositResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.DepositResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.DepositResponse}
 */
proto.opendexrpc.DepositResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.DepositResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.DepositResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.DepositResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DepositResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.opendexrpc.DepositResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.DepositResponse} returns this
 */
proto.opendexrpc.DepositResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.DiscoverNodesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.DiscoverNodesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.DiscoverNodesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DiscoverNodesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.DiscoverNodesRequest}
 */
proto.opendexrpc.DiscoverNodesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.DiscoverNodesRequest;
  return proto.opendexrpc.DiscoverNodesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.DiscoverNodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.DiscoverNodesRequest}
 */
proto.opendexrpc.DiscoverNodesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.DiscoverNodesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.DiscoverNodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.DiscoverNodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DiscoverNodesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.DiscoverNodesRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.DiscoverNodesRequest} returns this
 */
proto.opendexrpc.DiscoverNodesRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.DiscoverNodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.DiscoverNodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.DiscoverNodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DiscoverNodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    numNodes: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.DiscoverNodesResponse}
 */
proto.opendexrpc.DiscoverNodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.DiscoverNodesResponse;
  return proto.opendexrpc.DiscoverNodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.DiscoverNodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.DiscoverNodesResponse}
 */
proto.opendexrpc.DiscoverNodesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.DiscoverNodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.DiscoverNodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.DiscoverNodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.DiscoverNodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumNodes();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 num_nodes = 1;
 * @return {number}
 */
proto.opendexrpc.DiscoverNodesResponse.prototype.getNumNodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.DiscoverNodesResponse} returns this
 */
proto.opendexrpc.DiscoverNodesResponse.prototype.setNumNodes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ExecuteSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ExecuteSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ExecuteSwapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pairId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    peerPubKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ExecuteSwapRequest}
 */
proto.opendexrpc.ExecuteSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ExecuteSwapRequest;
  return proto.opendexrpc.ExecuteSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ExecuteSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ExecuteSwapRequest}
 */
proto.opendexrpc.ExecuteSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerPubKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ExecuteSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ExecuteSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ExecuteSwapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPeerPubKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ExecuteSwapRequest} returns this
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pair_id = 2;
 * @return {string}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ExecuteSwapRequest} returns this
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string peer_pub_key = 3;
 * @return {string}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.getPeerPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ExecuteSwapRequest} returns this
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.setPeerPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 quantity = 4;
 * @return {number}
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.ExecuteSwapRequest} returns this
 */
proto.opendexrpc.ExecuteSwapRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetBalanceRequest}
 */
proto.opendexrpc.GetBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetBalanceRequest;
  return proto.opendexrpc.GetBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetBalanceRequest}
 */
proto.opendexrpc.GetBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.GetBalanceRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetBalanceRequest} returns this
 */
proto.opendexrpc.GetBalanceRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balancesMap: (f = msg.getBalancesMap()) ? f.toObject(includeInstance, proto.opendexrpc.Balance.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetBalanceResponse}
 */
proto.opendexrpc.GetBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetBalanceResponse;
  return proto.opendexrpc.GetBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetBalanceResponse}
 */
proto.opendexrpc.GetBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBalancesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.opendexrpc.Balance.deserializeBinaryFromReader, "", new proto.opendexrpc.Balance());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalancesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.opendexrpc.Balance.serializeBinaryToWriter);
  }
};


/**
 * map<string, Balance> balances = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.opendexrpc.Balance>}
 */
proto.opendexrpc.GetBalanceResponse.prototype.getBalancesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.opendexrpc.Balance>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.opendexrpc.Balance));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.GetBalanceResponse} returns this
 */
proto.opendexrpc.GetBalanceResponse.prototype.clearBalancesMap = function() {
  this.getBalancesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetInfoRequest}
 */
proto.opendexrpc.GetInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetInfoRequest;
  return proto.opendexrpc.GetInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetInfoRequest}
 */
proto.opendexrpc.GetInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.GetInfoResponse.repeatedFields_ = [3,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodePubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    urisList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    numPeers: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numPairs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orders: (f = msg.getOrders()) && proto.opendexrpc.OrdersCount.toObject(includeInstance, f),
    lndMap: (f = msg.getLndMap()) ? f.toObject(includeInstance, proto.opendexrpc.LndInfo.toObject) : [],
    alias: jspb.Message.getFieldWithDefault(msg, 9, ""),
    network: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pendingSwapHashesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    connext: (f = msg.getConnext()) && proto.opendexrpc.ConnextInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetInfoResponse}
 */
proto.opendexrpc.GetInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetInfoResponse;
  return proto.opendexrpc.GetInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetInfoResponse}
 */
proto.opendexrpc.GetInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePubKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addUris(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPeers(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPairs(value);
      break;
    case 6:
      var value = new proto.opendexrpc.OrdersCount;
      reader.readMessage(value,proto.opendexrpc.OrdersCount.deserializeBinaryFromReader);
      msg.setOrders(value);
      break;
    case 7:
      var value = msg.getLndMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.opendexrpc.LndInfo.deserializeBinaryFromReader, "", new proto.opendexrpc.LndInfo());
         });
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetwork(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addPendingSwapHashes(value);
      break;
    case 12:
      var value = new proto.opendexrpc.ConnextInfo;
      reader.readMessage(value,proto.opendexrpc.ConnextInfo.deserializeBinaryFromReader);
      msg.setConnext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodePubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getNumPeers();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNumPairs();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getOrders();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.opendexrpc.OrdersCount.serializeBinaryToWriter
    );
  }
  f = message.getLndMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.opendexrpc.LndInfo.serializeBinaryToWriter);
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getNetwork();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPendingSwapHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getConnext();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.opendexrpc.ConnextInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.opendexrpc.GetInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_pub_key = 2;
 * @return {string}
 */
proto.opendexrpc.GetInfoResponse.prototype.getNodePubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setNodePubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string uris = 3;
 * @return {!Array<string>}
 */
proto.opendexrpc.GetInfoResponse.prototype.getUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setUrisList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.addUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.clearUrisList = function() {
  return this.setUrisList([]);
};


/**
 * optional uint32 num_peers = 4;
 * @return {number}
 */
proto.opendexrpc.GetInfoResponse.prototype.getNumPeers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setNumPeers = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 num_pairs = 5;
 * @return {number}
 */
proto.opendexrpc.GetInfoResponse.prototype.getNumPairs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setNumPairs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional OrdersCount orders = 6;
 * @return {?proto.opendexrpc.OrdersCount}
 */
proto.opendexrpc.GetInfoResponse.prototype.getOrders = function() {
  return /** @type{?proto.opendexrpc.OrdersCount} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.OrdersCount, 6));
};


/**
 * @param {?proto.opendexrpc.OrdersCount|undefined} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
*/
proto.opendexrpc.GetInfoResponse.prototype.setOrders = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.clearOrders = function() {
  return this.setOrders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.GetInfoResponse.prototype.hasOrders = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * map<string, LndInfo> lnd = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.opendexrpc.LndInfo>}
 */
proto.opendexrpc.GetInfoResponse.prototype.getLndMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.opendexrpc.LndInfo>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.opendexrpc.LndInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.clearLndMap = function() {
  this.getLndMap().clear();
  return this;};


/**
 * optional string alias = 9;
 * @return {string}
 */
proto.opendexrpc.GetInfoResponse.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string network = 10;
 * @return {string}
 */
proto.opendexrpc.GetInfoResponse.prototype.getNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string pending_swap_hashes = 11;
 * @return {!Array<string>}
 */
proto.opendexrpc.GetInfoResponse.prototype.getPendingSwapHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.setPendingSwapHashesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.addPendingSwapHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.clearPendingSwapHashesList = function() {
  return this.setPendingSwapHashesList([]);
};


/**
 * optional ConnextInfo connext = 12;
 * @return {?proto.opendexrpc.ConnextInfo}
 */
proto.opendexrpc.GetInfoResponse.prototype.getConnext = function() {
  return /** @type{?proto.opendexrpc.ConnextInfo} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.ConnextInfo, 12));
};


/**
 * @param {?proto.opendexrpc.ConnextInfo|undefined} value
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
*/
proto.opendexrpc.GetInfoResponse.prototype.setConnext = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.GetInfoResponse} returns this
 */
proto.opendexrpc.GetInfoResponse.prototype.clearConnext = function() {
  return this.setConnext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.GetInfoResponse.prototype.hasConnext = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetMnemonicRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetMnemonicRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetMnemonicRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetMnemonicRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetMnemonicRequest}
 */
proto.opendexrpc.GetMnemonicRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetMnemonicRequest;
  return proto.opendexrpc.GetMnemonicRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetMnemonicRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetMnemonicRequest}
 */
proto.opendexrpc.GetMnemonicRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetMnemonicRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetMnemonicRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetMnemonicRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetMnemonicRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.GetMnemonicResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetMnemonicResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetMnemonicResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetMnemonicResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetMnemonicResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    seedMnemonicList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetMnemonicResponse}
 */
proto.opendexrpc.GetMnemonicResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetMnemonicResponse;
  return proto.opendexrpc.GetMnemonicResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetMnemonicResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetMnemonicResponse}
 */
proto.opendexrpc.GetMnemonicResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeedMnemonic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetMnemonicResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetMnemonicResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetMnemonicResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetMnemonicResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeedMnemonicList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string seed_mnemonic = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.GetMnemonicResponse.prototype.getSeedMnemonicList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.GetMnemonicResponse} returns this
 */
proto.opendexrpc.GetMnemonicResponse.prototype.setSeedMnemonicList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.GetMnemonicResponse} returns this
 */
proto.opendexrpc.GetMnemonicResponse.prototype.addSeedMnemonic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.GetMnemonicResponse} returns this
 */
proto.opendexrpc.GetMnemonicResponse.prototype.clearSeedMnemonicList = function() {
  return this.setSeedMnemonicList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetNodeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetNodeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetNodeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetNodeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetNodeInfoRequest}
 */
proto.opendexrpc.GetNodeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetNodeInfoRequest;
  return proto.opendexrpc.GetNodeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetNodeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetNodeInfoRequest}
 */
proto.opendexrpc.GetNodeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetNodeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetNodeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetNodeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetNodeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.GetNodeInfoRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.GetNodeInfoRequest} returns this
 */
proto.opendexrpc.GetNodeInfoRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.GetNodeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.GetNodeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetNodeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reputationscore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    banned: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.GetNodeInfoResponse}
 */
proto.opendexrpc.GetNodeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.GetNodeInfoResponse;
  return proto.opendexrpc.GetNodeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.GetNodeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.GetNodeInfoResponse}
 */
proto.opendexrpc.GetNodeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setReputationscore(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBanned(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.GetNodeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.GetNodeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.GetNodeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReputationscore();
  if (f !== 0) {
    writer.writeSint32(
      1,
      f
    );
  }
  f = message.getBanned();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional sint32 reputationScore = 1;
 * @return {number}
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.getReputationscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.GetNodeInfoResponse} returns this
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.setReputationscore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool banned = 2;
 * @return {boolean}
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.getBanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.GetNodeInfoResponse} returns this
 */
proto.opendexrpc.GetNodeInfoResponse.prototype.setBanned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListCurrenciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListCurrenciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListCurrenciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListCurrenciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListCurrenciesRequest}
 */
proto.opendexrpc.ListCurrenciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListCurrenciesRequest;
  return proto.opendexrpc.ListCurrenciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListCurrenciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListCurrenciesRequest}
 */
proto.opendexrpc.ListCurrenciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListCurrenciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListCurrenciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListCurrenciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListCurrenciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.ListCurrenciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListCurrenciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListCurrenciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListCurrenciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListCurrenciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    currenciesList: jspb.Message.toObjectList(msg.getCurrenciesList(),
    proto.opendexrpc.Currency.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListCurrenciesResponse}
 */
proto.opendexrpc.ListCurrenciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListCurrenciesResponse;
  return proto.opendexrpc.ListCurrenciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListCurrenciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListCurrenciesResponse}
 */
proto.opendexrpc.ListCurrenciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Currency;
      reader.readMessage(value,proto.opendexrpc.Currency.deserializeBinaryFromReader);
      msg.addCurrencies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListCurrenciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListCurrenciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListCurrenciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListCurrenciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrenciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.Currency.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Currency currencies = 1;
 * @return {!Array<!proto.opendexrpc.Currency>}
 */
proto.opendexrpc.ListCurrenciesResponse.prototype.getCurrenciesList = function() {
  return /** @type{!Array<!proto.opendexrpc.Currency>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Currency, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.Currency>} value
 * @return {!proto.opendexrpc.ListCurrenciesResponse} returns this
*/
proto.opendexrpc.ListCurrenciesResponse.prototype.setCurrenciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.Currency=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Currency}
 */
proto.opendexrpc.ListCurrenciesResponse.prototype.addCurrencies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.Currency, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.ListCurrenciesResponse} returns this
 */
proto.opendexrpc.ListCurrenciesResponse.prototype.clearCurrenciesList = function() {
  return this.setCurrenciesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeAliases: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListOrdersRequest}
 */
proto.opendexrpc.ListOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListOrdersRequest;
  return proto.opendexrpc.ListOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListOrdersRequest}
 */
proto.opendexrpc.ListOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 2:
      var value = /** @type {!proto.opendexrpc.ListOrdersRequest.Owner} */ (reader.readEnum());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeAliases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getIncludeAliases();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.opendexrpc.ListOrdersRequest.Owner = {
  BOTH: 0,
  OWN: 1,
  PEER: 2
};

/**
 * optional string pair_id = 1;
 * @return {string}
 */
proto.opendexrpc.ListOrdersRequest.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ListOrdersRequest} returns this
 */
proto.opendexrpc.ListOrdersRequest.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Owner owner = 2;
 * @return {!proto.opendexrpc.ListOrdersRequest.Owner}
 */
proto.opendexrpc.ListOrdersRequest.prototype.getOwner = function() {
  return /** @type {!proto.opendexrpc.ListOrdersRequest.Owner} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.opendexrpc.ListOrdersRequest.Owner} value
 * @return {!proto.opendexrpc.ListOrdersRequest} returns this
 */
proto.opendexrpc.ListOrdersRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.opendexrpc.ListOrdersRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.ListOrdersRequest} returns this
 */
proto.opendexrpc.ListOrdersRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool include_aliases = 4;
 * @return {boolean}
 */
proto.opendexrpc.ListOrdersRequest.prototype.getIncludeAliases = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.ListOrdersRequest} returns this
 */
proto.opendexrpc.ListOrdersRequest.prototype.setIncludeAliases = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ordersMap: (f = msg.getOrdersMap()) ? f.toObject(includeInstance, proto.opendexrpc.Orders.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListOrdersResponse}
 */
proto.opendexrpc.ListOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListOrdersResponse;
  return proto.opendexrpc.ListOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListOrdersResponse}
 */
proto.opendexrpc.ListOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getOrdersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.opendexrpc.Orders.deserializeBinaryFromReader, "", new proto.opendexrpc.Orders());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrdersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.opendexrpc.Orders.serializeBinaryToWriter);
  }
};


/**
 * map<string, Orders> orders = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.opendexrpc.Orders>}
 */
proto.opendexrpc.ListOrdersResponse.prototype.getOrdersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.opendexrpc.Orders>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.opendexrpc.Orders));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.ListOrdersResponse} returns this
 */
proto.opendexrpc.ListOrdersResponse.prototype.clearOrdersMap = function() {
  this.getOrdersMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListPairsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListPairsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListPairsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPairsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListPairsRequest}
 */
proto.opendexrpc.ListPairsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListPairsRequest;
  return proto.opendexrpc.ListPairsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListPairsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListPairsRequest}
 */
proto.opendexrpc.ListPairsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListPairsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListPairsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListPairsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPairsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.ListPairsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListPairsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListPairsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListPairsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPairsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListPairsResponse}
 */
proto.opendexrpc.ListPairsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListPairsResponse;
  return proto.opendexrpc.ListPairsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListPairsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListPairsResponse}
 */
proto.opendexrpc.ListPairsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPairs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListPairsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListPairsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListPairsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPairsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string pairs = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.ListPairsResponse.prototype.getPairsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.ListPairsResponse} returns this
 */
proto.opendexrpc.ListPairsResponse.prototype.setPairsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.ListPairsResponse} returns this
 */
proto.opendexrpc.ListPairsResponse.prototype.addPairs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.ListPairsResponse} returns this
 */
proto.opendexrpc.ListPairsResponse.prototype.clearPairsList = function() {
  return this.setPairsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListPeersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListPeersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListPeersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPeersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListPeersRequest}
 */
proto.opendexrpc.ListPeersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListPeersRequest;
  return proto.opendexrpc.ListPeersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListPeersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListPeersRequest}
 */
proto.opendexrpc.ListPeersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListPeersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListPeersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListPeersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPeersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.ListPeersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ListPeersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ListPeersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ListPeersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPeersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    peersList: jspb.Message.toObjectList(msg.getPeersList(),
    proto.opendexrpc.Peer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ListPeersResponse}
 */
proto.opendexrpc.ListPeersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ListPeersResponse;
  return proto.opendexrpc.ListPeersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ListPeersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ListPeersResponse}
 */
proto.opendexrpc.ListPeersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Peer;
      reader.readMessage(value,proto.opendexrpc.Peer.deserializeBinaryFromReader);
      msg.addPeers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ListPeersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ListPeersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ListPeersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ListPeersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.Peer.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Peer peers = 1;
 * @return {!Array<!proto.opendexrpc.Peer>}
 */
proto.opendexrpc.ListPeersResponse.prototype.getPeersList = function() {
  return /** @type{!Array<!proto.opendexrpc.Peer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Peer, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.Peer>} value
 * @return {!proto.opendexrpc.ListPeersResponse} returns this
*/
proto.opendexrpc.ListPeersResponse.prototype.setPeersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.Peer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Peer}
 */
proto.opendexrpc.ListPeersResponse.prototype.addPeers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.Peer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.ListPeersResponse} returns this
 */
proto.opendexrpc.ListPeersResponse.prototype.clearPeersList = function() {
  return this.setPeersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.LndInfo.repeatedFields_ = [3,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.LndInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.LndInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.LndInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.LndInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    channels: (f = msg.getChannels()) && proto.opendexrpc.Channels.toObject(includeInstance, f),
    chainsList: jspb.Message.toObjectList(msg.getChainsList(),
    proto.opendexrpc.Chain.toObject, includeInstance),
    blockheight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    urisList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    version: jspb.Message.getFieldWithDefault(msg, 6, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.LndInfo}
 */
proto.opendexrpc.LndInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.LndInfo;
  return proto.opendexrpc.LndInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.LndInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.LndInfo}
 */
proto.opendexrpc.LndInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.opendexrpc.Channels;
      reader.readMessage(value,proto.opendexrpc.Channels.deserializeBinaryFromReader);
      msg.setChannels(value);
      break;
    case 3:
      var value = new proto.opendexrpc.Chain;
      reader.readMessage(value,proto.opendexrpc.Chain.deserializeBinaryFromReader);
      msg.addChains(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockheight(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addUris(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.LndInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.LndInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.LndInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.LndInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChannels();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.opendexrpc.Channels.serializeBinaryToWriter
    );
  }
  f = message.getChainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.opendexrpc.Chain.serializeBinaryToWriter
    );
  }
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.opendexrpc.LndInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Channels channels = 2;
 * @return {?proto.opendexrpc.Channels}
 */
proto.opendexrpc.LndInfo.prototype.getChannels = function() {
  return /** @type{?proto.opendexrpc.Channels} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Channels, 2));
};


/**
 * @param {?proto.opendexrpc.Channels|undefined} value
 * @return {!proto.opendexrpc.LndInfo} returns this
*/
proto.opendexrpc.LndInfo.prototype.setChannels = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.clearChannels = function() {
  return this.setChannels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.LndInfo.prototype.hasChannels = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Chain chains = 3;
 * @return {!Array<!proto.opendexrpc.Chain>}
 */
proto.opendexrpc.LndInfo.prototype.getChainsList = function() {
  return /** @type{!Array<!proto.opendexrpc.Chain>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Chain, 3));
};


/**
 * @param {!Array<!proto.opendexrpc.Chain>} value
 * @return {!proto.opendexrpc.LndInfo} returns this
*/
proto.opendexrpc.LndInfo.prototype.setChainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.opendexrpc.Chain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Chain}
 */
proto.opendexrpc.LndInfo.prototype.addChains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.opendexrpc.Chain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.clearChainsList = function() {
  return this.setChainsList([]);
};


/**
 * optional uint32 blockheight = 4;
 * @return {number}
 */
proto.opendexrpc.LndInfo.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.setBlockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string uris = 5;
 * @return {!Array<string>}
 */
proto.opendexrpc.LndInfo.prototype.getUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.setUrisList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.addUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.clearUrisList = function() {
  return this.setUrisList([]);
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.opendexrpc.LndInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string alias = 7;
 * @return {string}
 */
proto.opendexrpc.LndInfo.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.LndInfo} returns this
 */
proto.opendexrpc.LndInfo.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.NodeIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.NodeIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.NodeIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.NodeIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodePubKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    alias: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.NodeIdentifier}
 */
proto.opendexrpc.NodeIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.NodeIdentifier;
  return proto.opendexrpc.NodeIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.NodeIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.NodeIdentifier}
 */
proto.opendexrpc.NodeIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePubKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.NodeIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.NodeIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.NodeIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.NodeIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodePubKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string node_pub_key = 1;
 * @return {string}
 */
proto.opendexrpc.NodeIdentifier.prototype.getNodePubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.NodeIdentifier} returns this
 */
proto.opendexrpc.NodeIdentifier.prototype.setNodePubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string alias = 2;
 * @return {string}
 */
proto.opendexrpc.NodeIdentifier.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.NodeIdentifier} returns this
 */
proto.opendexrpc.NodeIdentifier.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OpenChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OpenChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OpenChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OpenChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pushAmount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OpenChannelRequest}
 */
proto.opendexrpc.OpenChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OpenChannelRequest;
  return proto.opendexrpc.OpenChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OpenChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OpenChannelRequest}
 */
proto.opendexrpc.OpenChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPushAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OpenChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OpenChannelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OpenChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OpenChannelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPushAmount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.OpenChannelRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OpenChannelRequest} returns this
 */
proto.opendexrpc.OpenChannelRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency = 2;
 * @return {string}
 */
proto.opendexrpc.OpenChannelRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OpenChannelRequest} returns this
 */
proto.opendexrpc.OpenChannelRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.opendexrpc.OpenChannelRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OpenChannelRequest} returns this
 */
proto.opendexrpc.OpenChannelRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 push_amount = 4;
 * @return {number}
 */
proto.opendexrpc.OpenChannelRequest.prototype.getPushAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OpenChannelRequest} returns this
 */
proto.opendexrpc.OpenChannelRequest.prototype.setPushAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 fee = 5;
 * @return {number}
 */
proto.opendexrpc.OpenChannelRequest.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OpenChannelRequest} returns this
 */
proto.opendexrpc.OpenChannelRequest.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OpenChannelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OpenChannelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OpenChannelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OpenChannelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OpenChannelResponse}
 */
proto.opendexrpc.OpenChannelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OpenChannelResponse;
  return proto.opendexrpc.OpenChannelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OpenChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OpenChannelResponse}
 */
proto.opendexrpc.OpenChannelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OpenChannelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OpenChannelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OpenChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OpenChannelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.opendexrpc.OpenChannelResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OpenChannelResponse} returns this
 */
proto.opendexrpc.OpenChannelResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pairId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nodeIdentifier: (f = msg.getNodeIdentifier()) && proto.opendexrpc.NodeIdentifier.toObject(includeInstance, f),
    localId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    side: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isOwnOrder: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    hold: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Order}
 */
proto.opendexrpc.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Order;
  return proto.opendexrpc.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Order}
 */
proto.opendexrpc.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = new proto.opendexrpc.NodeIdentifier;
      reader.readMessage(value,proto.opendexrpc.NodeIdentifier.deserializeBinaryFromReader);
      msg.setNodeIdentifier(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = /** @type {!proto.opendexrpc.OrderSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOwnOrder(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNodeIdentifier();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.opendexrpc.NodeIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getLocalId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getIsOwnOrder();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getHold();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.opendexrpc.Order.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint64 quantity = 2;
 * @return {number}
 */
proto.opendexrpc.Order.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string pair_id = 3;
 * @return {string}
 */
proto.opendexrpc.Order.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.opendexrpc.Order.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional NodeIdentifier node_identifier = 5;
 * @return {?proto.opendexrpc.NodeIdentifier}
 */
proto.opendexrpc.Order.prototype.getNodeIdentifier = function() {
  return /** @type{?proto.opendexrpc.NodeIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.NodeIdentifier, 5));
};


/**
 * @param {?proto.opendexrpc.NodeIdentifier|undefined} value
 * @return {!proto.opendexrpc.Order} returns this
*/
proto.opendexrpc.Order.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.clearNodeIdentifier = function() {
  return this.setNodeIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.Order.prototype.hasNodeIdentifier = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string local_id = 6;
 * @return {string}
 */
proto.opendexrpc.Order.prototype.getLocalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setLocalId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 created_at = 7;
 * @return {number}
 */
proto.opendexrpc.Order.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional OrderSide side = 8;
 * @return {!proto.opendexrpc.OrderSide}
 */
proto.opendexrpc.Order.prototype.getSide = function() {
  return /** @type {!proto.opendexrpc.OrderSide} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.opendexrpc.OrderSide} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bool is_own_order = 9;
 * @return {boolean}
 */
proto.opendexrpc.Order.prototype.getIsOwnOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setIsOwnOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional uint64 hold = 10;
 * @return {number}
 */
proto.opendexrpc.Order.prototype.getHold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Order} returns this
 */
proto.opendexrpc.Order.prototype.setHold = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    precision: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderBookRequest}
 */
proto.opendexrpc.OrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderBookRequest;
  return proto.opendexrpc.OrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderBookRequest}
 */
proto.opendexrpc.OrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrecision(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrecision();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string pair_id = 1;
 * @return {string}
 */
proto.opendexrpc.OrderBookRequest.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OrderBookRequest} returns this
 */
proto.opendexrpc.OrderBookRequest.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 precision = 2;
 * @return {number}
 */
proto.opendexrpc.OrderBookRequest.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrderBookRequest} returns this
 */
proto.opendexrpc.OrderBookRequest.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 limit = 3;
 * @return {number}
 */
proto.opendexrpc.OrderBookRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrderBookRequest} returns this
 */
proto.opendexrpc.OrderBookRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketsMap: (f = msg.getBucketsMap()) ? f.toObject(includeInstance, proto.opendexrpc.OrderBookResponse.Buckets.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderBookResponse}
 */
proto.opendexrpc.OrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderBookResponse;
  return proto.opendexrpc.OrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderBookResponse}
 */
proto.opendexrpc.OrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBucketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.opendexrpc.OrderBookResponse.Buckets.deserializeBinaryFromReader, "", new proto.opendexrpc.OrderBookResponse.Buckets());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.opendexrpc.OrderBookResponse.Buckets.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderBookResponse.Bucket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderBookResponse.Bucket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.Bucket.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket}
 */
proto.opendexrpc.OrderBookResponse.Bucket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderBookResponse.Bucket;
  return proto.opendexrpc.OrderBookResponse.Bucket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderBookResponse.Bucket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket}
 */
proto.opendexrpc.OrderBookResponse.Bucket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderBookResponse.Bucket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderBookResponse.Bucket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.Bucket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket} returns this
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint64 quantity = 2;
 * @return {number}
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket} returns this
 */
proto.opendexrpc.OrderBookResponse.Bucket.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.OrderBookResponse.Buckets.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderBookResponse.Buckets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderBookResponse.Buckets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.Buckets.toObject = function(includeInstance, msg) {
  var f, obj = {
    sellBucketsList: jspb.Message.toObjectList(msg.getSellBucketsList(),
    proto.opendexrpc.OrderBookResponse.Bucket.toObject, includeInstance),
    buyBucketsList: jspb.Message.toObjectList(msg.getBuyBucketsList(),
    proto.opendexrpc.OrderBookResponse.Bucket.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets}
 */
proto.opendexrpc.OrderBookResponse.Buckets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderBookResponse.Buckets;
  return proto.opendexrpc.OrderBookResponse.Buckets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderBookResponse.Buckets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets}
 */
proto.opendexrpc.OrderBookResponse.Buckets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.OrderBookResponse.Bucket;
      reader.readMessage(value,proto.opendexrpc.OrderBookResponse.Bucket.deserializeBinaryFromReader);
      msg.addSellBuckets(value);
      break;
    case 2:
      var value = new proto.opendexrpc.OrderBookResponse.Bucket;
      reader.readMessage(value,proto.opendexrpc.OrderBookResponse.Bucket.deserializeBinaryFromReader);
      msg.addBuyBuckets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderBookResponse.Buckets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderBookResponse.Buckets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderBookResponse.Buckets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSellBucketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.OrderBookResponse.Bucket.serializeBinaryToWriter
    );
  }
  f = message.getBuyBucketsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.opendexrpc.OrderBookResponse.Bucket.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Bucket sell_buckets = 1;
 * @return {!Array<!proto.opendexrpc.OrderBookResponse.Bucket>}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.getSellBucketsList = function() {
  return /** @type{!Array<!proto.opendexrpc.OrderBookResponse.Bucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.OrderBookResponse.Bucket, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.OrderBookResponse.Bucket>} value
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets} returns this
*/
proto.opendexrpc.OrderBookResponse.Buckets.prototype.setSellBucketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.OrderBookResponse.Bucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.addSellBuckets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.OrderBookResponse.Bucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets} returns this
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.clearSellBucketsList = function() {
  return this.setSellBucketsList([]);
};


/**
 * repeated Bucket buy_buckets = 2;
 * @return {!Array<!proto.opendexrpc.OrderBookResponse.Bucket>}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.getBuyBucketsList = function() {
  return /** @type{!Array<!proto.opendexrpc.OrderBookResponse.Bucket>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.OrderBookResponse.Bucket, 2));
};


/**
 * @param {!Array<!proto.opendexrpc.OrderBookResponse.Bucket>} value
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets} returns this
*/
proto.opendexrpc.OrderBookResponse.Buckets.prototype.setBuyBucketsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.opendexrpc.OrderBookResponse.Bucket=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.OrderBookResponse.Bucket}
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.addBuyBuckets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.opendexrpc.OrderBookResponse.Bucket, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.OrderBookResponse.Buckets} returns this
 */
proto.opendexrpc.OrderBookResponse.Buckets.prototype.clearBuyBucketsList = function() {
  return this.setBuyBucketsList([]);
};


/**
 * map<string, Buckets> buckets = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.opendexrpc.OrderBookResponse.Buckets>}
 */
proto.opendexrpc.OrderBookResponse.prototype.getBucketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.opendexrpc.OrderBookResponse.Buckets>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.opendexrpc.OrderBookResponse.Buckets));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.OrderBookResponse} returns this
 */
proto.opendexrpc.OrderBookResponse.prototype.clearBucketsMap = function() {
  this.getBucketsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderRemoval.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderRemoval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderRemoval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderRemoval.toObject = function(includeInstance, msg) {
  var f, obj = {
    quantity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pairId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    localId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isOwnOrder: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderRemoval}
 */
proto.opendexrpc.OrderRemoval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderRemoval;
  return proto.opendexrpc.OrderRemoval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderRemoval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderRemoval}
 */
proto.opendexrpc.OrderRemoval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOwnOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderRemoval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderRemoval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderRemoval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderRemoval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLocalId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIsOwnOrder();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint64 quantity = 1;
 * @return {number}
 */
proto.opendexrpc.OrderRemoval.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrderRemoval} returns this
 */
proto.opendexrpc.OrderRemoval.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string pair_id = 2;
 * @return {string}
 */
proto.opendexrpc.OrderRemoval.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OrderRemoval} returns this
 */
proto.opendexrpc.OrderRemoval.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_id = 3;
 * @return {string}
 */
proto.opendexrpc.OrderRemoval.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OrderRemoval} returns this
 */
proto.opendexrpc.OrderRemoval.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string local_id = 4;
 * @return {string}
 */
proto.opendexrpc.OrderRemoval.prototype.getLocalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.OrderRemoval} returns this
 */
proto.opendexrpc.OrderRemoval.prototype.setLocalId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool is_own_order = 5;
 * @return {boolean}
 */
proto.opendexrpc.OrderRemoval.prototype.getIsOwnOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.OrderRemoval} returns this
 */
proto.opendexrpc.OrderRemoval.prototype.setIsOwnOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.Orders.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Orders.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Orders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Orders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Orders.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyOrdersList: jspb.Message.toObjectList(msg.getBuyOrdersList(),
    proto.opendexrpc.Order.toObject, includeInstance),
    sellOrdersList: jspb.Message.toObjectList(msg.getSellOrdersList(),
    proto.opendexrpc.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Orders}
 */
proto.opendexrpc.Orders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Orders;
  return proto.opendexrpc.Orders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Orders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Orders}
 */
proto.opendexrpc.Orders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.addBuyOrders(value);
      break;
    case 2:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.addSellOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Orders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Orders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Orders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Orders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getSellOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order buy_orders = 1;
 * @return {!Array<!proto.opendexrpc.Order>}
 */
proto.opendexrpc.Orders.prototype.getBuyOrdersList = function() {
  return /** @type{!Array<!proto.opendexrpc.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Order, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.Order>} value
 * @return {!proto.opendexrpc.Orders} returns this
*/
proto.opendexrpc.Orders.prototype.setBuyOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Order}
 */
proto.opendexrpc.Orders.prototype.addBuyOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.Orders} returns this
 */
proto.opendexrpc.Orders.prototype.clearBuyOrdersList = function() {
  return this.setBuyOrdersList([]);
};


/**
 * repeated Order sell_orders = 2;
 * @return {!Array<!proto.opendexrpc.Order>}
 */
proto.opendexrpc.Orders.prototype.getSellOrdersList = function() {
  return /** @type{!Array<!proto.opendexrpc.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Order, 2));
};


/**
 * @param {!Array<!proto.opendexrpc.Order>} value
 * @return {!proto.opendexrpc.Orders} returns this
*/
proto.opendexrpc.Orders.prototype.setSellOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.opendexrpc.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Order}
 */
proto.opendexrpc.Orders.prototype.addSellOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.opendexrpc.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.Orders} returns this
 */
proto.opendexrpc.Orders.prototype.clearSellOrdersList = function() {
  return this.setSellOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrdersCount.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrdersCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrdersCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrdersCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    peer: jspb.Message.getFieldWithDefault(msg, 1, 0),
    own: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrdersCount}
 */
proto.opendexrpc.OrdersCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrdersCount;
  return proto.opendexrpc.OrdersCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrdersCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrdersCount}
 */
proto.opendexrpc.OrdersCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPeer(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOwn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrdersCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrdersCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrdersCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrdersCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeer();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOwn();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 peer = 1;
 * @return {number}
 */
proto.opendexrpc.OrdersCount.prototype.getPeer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrdersCount} returns this
 */
proto.opendexrpc.OrdersCount.prototype.setPeer = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 own = 2;
 * @return {number}
 */
proto.opendexrpc.OrdersCount.prototype.getOwn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.OrdersCount} returns this
 */
proto.opendexrpc.OrdersCount.prototype.setOwn = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.opendexrpc.OrderUpdate.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.opendexrpc.OrderUpdate.OrderUpdateCase = {
  ORDER_UPDATE_NOT_SET: 0,
  ORDER: 1,
  ORDER_REMOVAL: 2
};

/**
 * @return {proto.opendexrpc.OrderUpdate.OrderUpdateCase}
 */
proto.opendexrpc.OrderUpdate.prototype.getOrderUpdateCase = function() {
  return /** @type {proto.opendexrpc.OrderUpdate.OrderUpdateCase} */(jspb.Message.computeOneofCase(this, proto.opendexrpc.OrderUpdate.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.OrderUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.OrderUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.OrderUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    orderRemoval: (f = msg.getOrderRemoval()) && proto.opendexrpc.OrderRemoval.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.OrderUpdate}
 */
proto.opendexrpc.OrderUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.OrderUpdate;
  return proto.opendexrpc.OrderUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.OrderUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.OrderUpdate}
 */
proto.opendexrpc.OrderUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.opendexrpc.OrderRemoval;
      reader.readMessage(value,proto.opendexrpc.OrderRemoval.deserializeBinaryFromReader);
      msg.setOrderRemoval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.OrderUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.OrderUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.OrderUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.OrderUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getOrderRemoval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.opendexrpc.OrderRemoval.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.OrderUpdate.prototype.getOrder = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 1));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.OrderUpdate} returns this
*/
proto.opendexrpc.OrderUpdate.prototype.setOrder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.opendexrpc.OrderUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.OrderUpdate} returns this
 */
proto.opendexrpc.OrderUpdate.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.OrderUpdate.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrderRemoval order_removal = 2;
 * @return {?proto.opendexrpc.OrderRemoval}
 */
proto.opendexrpc.OrderUpdate.prototype.getOrderRemoval = function() {
  return /** @type{?proto.opendexrpc.OrderRemoval} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.OrderRemoval, 2));
};


/**
 * @param {?proto.opendexrpc.OrderRemoval|undefined} value
 * @return {!proto.opendexrpc.OrderUpdate} returns this
*/
proto.opendexrpc.OrderUpdate.prototype.setOrderRemoval = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.opendexrpc.OrderUpdate.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.OrderUpdate} returns this
 */
proto.opendexrpc.OrderUpdate.prototype.clearOrderRemoval = function() {
  return this.setOrderRemoval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.OrderUpdate.prototype.hasOrderRemoval = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.Peer.repeatedFields_ = [5,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Peer.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Peer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Peer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Peer.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodePubKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lndPubKeysMap: (f = msg.getLndPubKeysMap()) ? f.toObject(includeInstance, undefined) : [],
    inbound: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pairsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    xudVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    secondsConnected: jspb.Message.getFieldWithDefault(msg, 7, 0),
    alias: jspb.Message.getFieldWithDefault(msg, 9, ""),
    lndUrisList: jspb.Message.toObjectList(msg.getLndUrisList(),
    proto.opendexrpc.Peer.LndUris.toObject, includeInstance),
    connextIdentifier: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Peer}
 */
proto.opendexrpc.Peer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Peer;
  return proto.opendexrpc.Peer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Peer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Peer}
 */
proto.opendexrpc.Peer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodePubKey(value);
      break;
    case 3:
      var value = msg.getLndPubKeysMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInbound(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addPairs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setXudVersion(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecondsConnected(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlias(value);
      break;
    case 10:
      var value = new proto.opendexrpc.Peer.LndUris;
      reader.readMessage(value,proto.opendexrpc.Peer.LndUris.deserializeBinaryFromReader);
      msg.addLndUris(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnextIdentifier(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Peer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Peer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Peer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Peer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodePubKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLndPubKeysMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getInbound();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPairsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getXudVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSecondsConnected();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getAlias();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLndUrisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.opendexrpc.Peer.LndUris.serializeBinaryToWriter
    );
  }
  f = message.getConnextIdentifier();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.Peer.LndUris.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Peer.LndUris.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Peer.LndUris.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Peer.LndUris} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Peer.LndUris.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uriList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Peer.LndUris}
 */
proto.opendexrpc.Peer.LndUris.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Peer.LndUris;
  return proto.opendexrpc.Peer.LndUris.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Peer.LndUris} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Peer.LndUris}
 */
proto.opendexrpc.Peer.LndUris.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Peer.LndUris.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Peer.LndUris.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Peer.LndUris} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Peer.LndUris.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUriList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.Peer.LndUris.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer.LndUris} returns this
 */
proto.opendexrpc.Peer.LndUris.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string uri = 2;
 * @return {!Array<string>}
 */
proto.opendexrpc.Peer.LndUris.prototype.getUriList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.Peer.LndUris} returns this
 */
proto.opendexrpc.Peer.LndUris.prototype.setUriList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Peer.LndUris} returns this
 */
proto.opendexrpc.Peer.LndUris.prototype.addUri = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.Peer.LndUris} returns this
 */
proto.opendexrpc.Peer.LndUris.prototype.clearUriList = function() {
  return this.setUriList([]);
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.opendexrpc.Peer.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_pub_key = 2;
 * @return {string}
 */
proto.opendexrpc.Peer.prototype.getNodePubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setNodePubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> lnd_pub_keys = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.opendexrpc.Peer.prototype.getLndPubKeysMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.clearLndPubKeysMap = function() {
  this.getLndPubKeysMap().clear();
  return this;};


/**
 * optional bool inbound = 4;
 * @return {boolean}
 */
proto.opendexrpc.Peer.prototype.getInbound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setInbound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string pairs = 5;
 * @return {!Array<string>}
 */
proto.opendexrpc.Peer.prototype.getPairsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setPairsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.addPairs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.clearPairsList = function() {
  return this.setPairsList([]);
};


/**
 * optional string xud_version = 6;
 * @return {string}
 */
proto.opendexrpc.Peer.prototype.getXudVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setXudVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 seconds_connected = 7;
 * @return {number}
 */
proto.opendexrpc.Peer.prototype.getSecondsConnected = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setSecondsConnected = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string alias = 9;
 * @return {string}
 */
proto.opendexrpc.Peer.prototype.getAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated LndUris lnd_uris = 10;
 * @return {!Array<!proto.opendexrpc.Peer.LndUris>}
 */
proto.opendexrpc.Peer.prototype.getLndUrisList = function() {
  return /** @type{!Array<!proto.opendexrpc.Peer.LndUris>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Peer.LndUris, 10));
};


/**
 * @param {!Array<!proto.opendexrpc.Peer.LndUris>} value
 * @return {!proto.opendexrpc.Peer} returns this
*/
proto.opendexrpc.Peer.prototype.setLndUrisList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.opendexrpc.Peer.LndUris=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Peer.LndUris}
 */
proto.opendexrpc.Peer.prototype.addLndUris = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.opendexrpc.Peer.LndUris, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.clearLndUrisList = function() {
  return this.setLndUrisList([]);
};


/**
 * optional string connext_identifier = 11;
 * @return {string}
 */
proto.opendexrpc.Peer.prototype.getConnextIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Peer} returns this
 */
proto.opendexrpc.Peer.prototype.setConnextIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.PlaceOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.PlaceOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pairId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    side: jspb.Message.getFieldWithDefault(msg, 5, 0),
    replaceOrderId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    immediateOrCancel: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.PlaceOrderRequest}
 */
proto.opendexrpc.PlaceOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.PlaceOrderRequest;
  return proto.opendexrpc.PlaceOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.PlaceOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.PlaceOrderRequest}
 */
proto.opendexrpc.PlaceOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 5:
      var value = /** @type {!proto.opendexrpc.OrderSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplaceOrderId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImmediateOrCancel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.PlaceOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.PlaceOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getReplaceOrderId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getImmediateOrCancel();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional double price = 1;
 * @return {number}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional uint64 quantity = 2;
 * @return {number}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string pair_id = 3;
 * @return {string}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_id = 4;
 * @return {string}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OrderSide side = 5;
 * @return {!proto.opendexrpc.OrderSide}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getSide = function() {
  return /** @type {!proto.opendexrpc.OrderSide} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.opendexrpc.OrderSide} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string replace_order_id = 6;
 * @return {string}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getReplaceOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setReplaceOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool immediate_or_cancel = 7;
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderRequest.prototype.getImmediateOrCancel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.PlaceOrderRequest} returns this
 */
proto.opendexrpc.PlaceOrderRequest.prototype.setImmediateOrCancel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.PlaceOrderResponse.repeatedFields_ = [1,2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.PlaceOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.PlaceOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalMatchesList: jspb.Message.toObjectList(msg.getInternalMatchesList(),
    proto.opendexrpc.Order.toObject, includeInstance),
    swapSuccessesList: jspb.Message.toObjectList(msg.getSwapSuccessesList(),
    proto.opendexrpc.SwapSuccess.toObject, includeInstance),
    remainingOrder: (f = msg.getRemainingOrder()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    swapFailuresList: jspb.Message.toObjectList(msg.getSwapFailuresList(),
    proto.opendexrpc.SwapFailure.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.PlaceOrderResponse}
 */
proto.opendexrpc.PlaceOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.PlaceOrderResponse;
  return proto.opendexrpc.PlaceOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.PlaceOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.PlaceOrderResponse}
 */
proto.opendexrpc.PlaceOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.addInternalMatches(value);
      break;
    case 2:
      var value = new proto.opendexrpc.SwapSuccess;
      reader.readMessage(value,proto.opendexrpc.SwapSuccess.deserializeBinaryFromReader);
      msg.addSwapSuccesses(value);
      break;
    case 3:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setRemainingOrder(value);
      break;
    case 4:
      var value = new proto.opendexrpc.SwapFailure;
      reader.readMessage(value,proto.opendexrpc.SwapFailure.deserializeBinaryFromReader);
      msg.addSwapFailures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.PlaceOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.PlaceOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getSwapSuccessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.opendexrpc.SwapSuccess.serializeBinaryToWriter
    );
  }
  f = message.getRemainingOrder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getSwapFailuresList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.opendexrpc.SwapFailure.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order internal_matches = 1;
 * @return {!Array<!proto.opendexrpc.Order>}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.getInternalMatchesList = function() {
  return /** @type{!Array<!proto.opendexrpc.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Order, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.Order>} value
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
*/
proto.opendexrpc.PlaceOrderResponse.prototype.setInternalMatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Order}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.addInternalMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
 */
proto.opendexrpc.PlaceOrderResponse.prototype.clearInternalMatchesList = function() {
  return this.setInternalMatchesList([]);
};


/**
 * repeated SwapSuccess swap_successes = 2;
 * @return {!Array<!proto.opendexrpc.SwapSuccess>}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.getSwapSuccessesList = function() {
  return /** @type{!Array<!proto.opendexrpc.SwapSuccess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.SwapSuccess, 2));
};


/**
 * @param {!Array<!proto.opendexrpc.SwapSuccess>} value
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
*/
proto.opendexrpc.PlaceOrderResponse.prototype.setSwapSuccessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.opendexrpc.SwapSuccess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.SwapSuccess}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.addSwapSuccesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.opendexrpc.SwapSuccess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
 */
proto.opendexrpc.PlaceOrderResponse.prototype.clearSwapSuccessesList = function() {
  return this.setSwapSuccessesList([]);
};


/**
 * optional Order remaining_order = 3;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.getRemainingOrder = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 3));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
*/
proto.opendexrpc.PlaceOrderResponse.prototype.setRemainingOrder = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
 */
proto.opendexrpc.PlaceOrderResponse.prototype.clearRemainingOrder = function() {
  return this.setRemainingOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.hasRemainingOrder = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated SwapFailure swap_failures = 4;
 * @return {!Array<!proto.opendexrpc.SwapFailure>}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.getSwapFailuresList = function() {
  return /** @type{!Array<!proto.opendexrpc.SwapFailure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.SwapFailure, 4));
};


/**
 * @param {!Array<!proto.opendexrpc.SwapFailure>} value
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
*/
proto.opendexrpc.PlaceOrderResponse.prototype.setSwapFailuresList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.opendexrpc.SwapFailure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.SwapFailure}
 */
proto.opendexrpc.PlaceOrderResponse.prototype.addSwapFailures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.opendexrpc.SwapFailure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.PlaceOrderResponse} returns this
 */
proto.opendexrpc.PlaceOrderResponse.prototype.clearSwapFailuresList = function() {
  return this.setSwapFailuresList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.opendexrpc.PlaceOrderEvent.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.opendexrpc.PlaceOrderEvent.EventCase = {
  EVENT_NOT_SET: 0,
  MATCH: 1,
  SWAP_SUCCESS: 2,
  REMAINING_ORDER: 3,
  SWAP_FAILURE: 4
};

/**
 * @return {proto.opendexrpc.PlaceOrderEvent.EventCase}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.getEventCase = function() {
  return /** @type {proto.opendexrpc.PlaceOrderEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.opendexrpc.PlaceOrderEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.PlaceOrderEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.PlaceOrderEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    match: (f = msg.getMatch()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    swapSuccess: (f = msg.getSwapSuccess()) && proto.opendexrpc.SwapSuccess.toObject(includeInstance, f),
    remainingOrder: (f = msg.getRemainingOrder()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    swapFailure: (f = msg.getSwapFailure()) && proto.opendexrpc.SwapFailure.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.PlaceOrderEvent}
 */
proto.opendexrpc.PlaceOrderEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.PlaceOrderEvent;
  return proto.opendexrpc.PlaceOrderEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.PlaceOrderEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.PlaceOrderEvent}
 */
proto.opendexrpc.PlaceOrderEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setMatch(value);
      break;
    case 2:
      var value = new proto.opendexrpc.SwapSuccess;
      reader.readMessage(value,proto.opendexrpc.SwapSuccess.deserializeBinaryFromReader);
      msg.setSwapSuccess(value);
      break;
    case 3:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setRemainingOrder(value);
      break;
    case 4:
      var value = new proto.opendexrpc.SwapFailure;
      reader.readMessage(value,proto.opendexrpc.SwapFailure.deserializeBinaryFromReader);
      msg.setSwapFailure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.PlaceOrderEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.PlaceOrderEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.PlaceOrderEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getSwapSuccess();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.opendexrpc.SwapSuccess.serializeBinaryToWriter
    );
  }
  f = message.getRemainingOrder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getSwapFailure();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.opendexrpc.SwapFailure.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order match = 1;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.getMatch = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 1));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
*/
proto.opendexrpc.PlaceOrderEvent.prototype.setMatch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.opendexrpc.PlaceOrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
 */
proto.opendexrpc.PlaceOrderEvent.prototype.clearMatch = function() {
  return this.setMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.hasMatch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SwapSuccess swap_success = 2;
 * @return {?proto.opendexrpc.SwapSuccess}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.getSwapSuccess = function() {
  return /** @type{?proto.opendexrpc.SwapSuccess} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.SwapSuccess, 2));
};


/**
 * @param {?proto.opendexrpc.SwapSuccess|undefined} value
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
*/
proto.opendexrpc.PlaceOrderEvent.prototype.setSwapSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.opendexrpc.PlaceOrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
 */
proto.opendexrpc.PlaceOrderEvent.prototype.clearSwapSuccess = function() {
  return this.setSwapSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.hasSwapSuccess = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Order remaining_order = 3;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.getRemainingOrder = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 3));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
*/
proto.opendexrpc.PlaceOrderEvent.prototype.setRemainingOrder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.opendexrpc.PlaceOrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
 */
proto.opendexrpc.PlaceOrderEvent.prototype.clearRemainingOrder = function() {
  return this.setRemainingOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.hasRemainingOrder = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SwapFailure swap_failure = 4;
 * @return {?proto.opendexrpc.SwapFailure}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.getSwapFailure = function() {
  return /** @type{?proto.opendexrpc.SwapFailure} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.SwapFailure, 4));
};


/**
 * @param {?proto.opendexrpc.SwapFailure|undefined} value
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
*/
proto.opendexrpc.PlaceOrderEvent.prototype.setSwapFailure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.opendexrpc.PlaceOrderEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.PlaceOrderEvent} returns this
 */
proto.opendexrpc.PlaceOrderEvent.prototype.clearSwapFailure = function() {
  return this.setSwapFailure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.PlaceOrderEvent.prototype.hasSwapFailure = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ConnextInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ConnextInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ConnextInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnextInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chain: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ConnextInfo}
 */
proto.opendexrpc.ConnextInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ConnextInfo;
  return proto.opendexrpc.ConnextInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ConnextInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ConnextInfo}
 */
proto.opendexrpc.ConnextInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ConnextInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ConnextInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ConnextInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ConnextInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChain();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.opendexrpc.ConnextInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ConnextInfo} returns this
 */
proto.opendexrpc.ConnextInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.opendexrpc.ConnextInfo.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ConnextInfo} returns this
 */
proto.opendexrpc.ConnextInfo.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string version = 4;
 * @return {string}
 */
proto.opendexrpc.ConnextInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ConnextInfo} returns this
 */
proto.opendexrpc.ConnextInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string chain = 5;
 * @return {string}
 */
proto.opendexrpc.ConnextInfo.prototype.getChain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.ConnextInfo} returns this
 */
proto.opendexrpc.ConnextInfo.prototype.setChain = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveCurrencyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveCurrencyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveCurrencyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveCurrencyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveCurrencyRequest}
 */
proto.opendexrpc.RemoveCurrencyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveCurrencyRequest;
  return proto.opendexrpc.RemoveCurrencyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveCurrencyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveCurrencyRequest}
 */
proto.opendexrpc.RemoveCurrencyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveCurrencyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveCurrencyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveCurrencyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveCurrencyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.RemoveCurrencyRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.RemoveCurrencyRequest} returns this
 */
proto.opendexrpc.RemoveCurrencyRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveCurrencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveCurrencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveCurrencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveCurrencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveCurrencyResponse}
 */
proto.opendexrpc.RemoveCurrencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveCurrencyResponse;
  return proto.opendexrpc.RemoveCurrencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveCurrencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveCurrencyResponse}
 */
proto.opendexrpc.RemoveCurrencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveCurrencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveCurrencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveCurrencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveCurrencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveOrderRequest}
 */
proto.opendexrpc.RemoveOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveOrderRequest;
  return proto.opendexrpc.RemoveOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveOrderRequest}
 */
proto.opendexrpc.RemoveOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.opendexrpc.RemoveOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.RemoveOrderRequest} returns this
 */
proto.opendexrpc.RemoveOrderRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 quantity = 2;
 * @return {number}
 */
proto.opendexrpc.RemoveOrderRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.RemoveOrderRequest} returns this
 */
proto.opendexrpc.RemoveOrderRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    quantityOnHold: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remainingQuantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    removedQuantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pairId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveOrderResponse}
 */
proto.opendexrpc.RemoveOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveOrderResponse;
  return proto.opendexrpc.RemoveOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveOrderResponse}
 */
proto.opendexrpc.RemoveOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantityOnHold(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemainingQuantity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemovedQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuantityOnHold();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRemainingQuantity();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRemovedQuantity();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 quantity_on_hold = 1;
 * @return {number}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.getQuantityOnHold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.RemoveOrderResponse} returns this
 */
proto.opendexrpc.RemoveOrderResponse.prototype.setQuantityOnHold = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 remaining_quantity = 2;
 * @return {number}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.getRemainingQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.RemoveOrderResponse} returns this
 */
proto.opendexrpc.RemoveOrderResponse.prototype.setRemainingQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 removed_quantity = 3;
 * @return {number}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.getRemovedQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.RemoveOrderResponse} returns this
 */
proto.opendexrpc.RemoveOrderResponse.prototype.setRemovedQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string pair_id = 4;
 * @return {string}
 */
proto.opendexrpc.RemoveOrderResponse.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.RemoveOrderResponse} returns this
 */
proto.opendexrpc.RemoveOrderResponse.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveAllOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveAllOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveAllOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveAllOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveAllOrdersRequest}
 */
proto.opendexrpc.RemoveAllOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveAllOrdersRequest;
  return proto.opendexrpc.RemoveAllOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveAllOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveAllOrdersRequest}
 */
proto.opendexrpc.RemoveAllOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveAllOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveAllOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveAllOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveAllOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.RemoveAllOrdersResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemoveAllOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemoveAllOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveAllOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    removedOrderIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    onHoldOrderIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse}
 */
proto.opendexrpc.RemoveAllOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemoveAllOrdersResponse;
  return proto.opendexrpc.RemoveAllOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemoveAllOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse}
 */
proto.opendexrpc.RemoveAllOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedOrderIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addOnHoldOrderIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemoveAllOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemoveAllOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemoveAllOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemovedOrderIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getOnHoldOrderIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string removed_order_ids = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.getRemovedOrderIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.setRemovedOrderIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.addRemovedOrderIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.clearRemovedOrderIdsList = function() {
  return this.setRemovedOrderIdsList([]);
};


/**
 * repeated string on_hold_order_ids = 2;
 * @return {!Array<string>}
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.getOnHoldOrderIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.setOnHoldOrderIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.addOnHoldOrderIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.RemoveAllOrdersResponse} returns this
 */
proto.opendexrpc.RemoveAllOrdersResponse.prototype.clearOnHoldOrderIdsList = function() {
  return this.setOnHoldOrderIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemovePairRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemovePairRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemovePairRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemovePairRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemovePairRequest}
 */
proto.opendexrpc.RemovePairRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemovePairRequest;
  return proto.opendexrpc.RemovePairRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemovePairRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemovePairRequest}
 */
proto.opendexrpc.RemovePairRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemovePairRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemovePairRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemovePairRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemovePairRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pair_id = 1;
 * @return {string}
 */
proto.opendexrpc.RemovePairRequest.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.RemovePairRequest} returns this
 */
proto.opendexrpc.RemovePairRequest.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RemovePairResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RemovePairResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RemovePairResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemovePairResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RemovePairResponse}
 */
proto.opendexrpc.RemovePairResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RemovePairResponse;
  return proto.opendexrpc.RemovePairResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RemovePairResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RemovePairResponse}
 */
proto.opendexrpc.RemovePairResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RemovePairResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RemovePairResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RemovePairResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RemovePairResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.RestoreNodeRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RestoreNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RestoreNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RestoreNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    seedMnemonicList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lndBackupsMap: (f = msg.getLndBackupsMap()) ? f.toObject(includeInstance, undefined) : [],
    xudDatabase: msg.getXudDatabase_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RestoreNodeRequest}
 */
proto.opendexrpc.RestoreNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RestoreNodeRequest;
  return proto.opendexrpc.RestoreNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RestoreNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RestoreNodeRequest}
 */
proto.opendexrpc.RestoreNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSeedMnemonic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = msg.getLndBackupsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setXudDatabase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RestoreNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RestoreNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RestoreNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeedMnemonicList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLndBackupsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getXudDatabase_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * repeated string seed_mnemonic = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getSeedMnemonicList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.setSeedMnemonicList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.addSeedMnemonic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.clearSeedMnemonicList = function() {
  return this.setSeedMnemonicList([]);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, bytes> lnd_backups = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getLndBackupsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.clearLndBackupsMap = function() {
  this.getLndBackupsMap().clear();
  return this;};


/**
 * optional bytes xud_database = 6;
 * @return {!(string|Uint8Array)}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getXudDatabase = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes xud_database = 6;
 * This is a type-conversion wrapper around `getXudDatabase()`
 * @return {string}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getXudDatabase_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getXudDatabase()));
};


/**
 * optional bytes xud_database = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getXudDatabase()`
 * @return {!Uint8Array}
 */
proto.opendexrpc.RestoreNodeRequest.prototype.getXudDatabase_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getXudDatabase()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.opendexrpc.RestoreNodeRequest} returns this
 */
proto.opendexrpc.RestoreNodeRequest.prototype.setXudDatabase = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.RestoreNodeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.RestoreNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.RestoreNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.RestoreNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RestoreNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    restoredLndsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    restoredConnext: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.RestoreNodeResponse}
 */
proto.opendexrpc.RestoreNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.RestoreNodeResponse;
  return proto.opendexrpc.RestoreNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.RestoreNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.RestoreNodeResponse}
 */
proto.opendexrpc.RestoreNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRestoredLnds(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestoredConnext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.RestoreNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.RestoreNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.RestoreNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.RestoreNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRestoredLndsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRestoredConnext();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string restored_lnds = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.RestoreNodeResponse.prototype.getRestoredLndsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.RestoreNodeResponse} returns this
 */
proto.opendexrpc.RestoreNodeResponse.prototype.setRestoredLndsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.RestoreNodeResponse} returns this
 */
proto.opendexrpc.RestoreNodeResponse.prototype.addRestoredLnds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.RestoreNodeResponse} returns this
 */
proto.opendexrpc.RestoreNodeResponse.prototype.clearRestoredLndsList = function() {
  return this.setRestoredLndsList([]);
};


/**
 * optional bool restored_connext = 2;
 * @return {boolean}
 */
proto.opendexrpc.RestoreNodeResponse.prototype.getRestoredConnext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.RestoreNodeResponse} returns this
 */
proto.opendexrpc.RestoreNodeResponse.prototype.setRestoredConnext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SetLogLevelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SetLogLevelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SetLogLevelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SetLogLevelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    logLevel: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SetLogLevelRequest}
 */
proto.opendexrpc.SetLogLevelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SetLogLevelRequest;
  return proto.opendexrpc.SetLogLevelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SetLogLevelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SetLogLevelRequest}
 */
proto.opendexrpc.SetLogLevelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.opendexrpc.LogLevel} */ (reader.readEnum());
      msg.setLogLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SetLogLevelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SetLogLevelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SetLogLevelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SetLogLevelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional LogLevel log_level = 1;
 * @return {!proto.opendexrpc.LogLevel}
 */
proto.opendexrpc.SetLogLevelRequest.prototype.getLogLevel = function() {
  return /** @type {!proto.opendexrpc.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.opendexrpc.LogLevel} value
 * @return {!proto.opendexrpc.SetLogLevelRequest} returns this
 */
proto.opendexrpc.SetLogLevelRequest.prototype.setLogLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SetLogLevelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SetLogLevelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SetLogLevelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SetLogLevelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SetLogLevelResponse}
 */
proto.opendexrpc.SetLogLevelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SetLogLevelResponse;
  return proto.opendexrpc.SetLogLevelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SetLogLevelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SetLogLevelResponse}
 */
proto.opendexrpc.SetLogLevelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SetLogLevelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SetLogLevelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SetLogLevelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SetLogLevelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ShutdownRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ShutdownRequest}
 */
proto.opendexrpc.ShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ShutdownRequest;
  return proto.opendexrpc.ShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ShutdownRequest}
 */
proto.opendexrpc.ShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ShutdownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.ShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.ShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.ShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ShutdownResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.ShutdownResponse}
 */
proto.opendexrpc.ShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.ShutdownResponse;
  return proto.opendexrpc.ShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.ShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.ShutdownResponse}
 */
proto.opendexrpc.ShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.ShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.ShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.ShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.ShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SubscribeOrdersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SubscribeOrdersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SubscribeOrdersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeOrdersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    existing: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SubscribeOrdersRequest}
 */
proto.opendexrpc.SubscribeOrdersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SubscribeOrdersRequest;
  return proto.opendexrpc.SubscribeOrdersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SubscribeOrdersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SubscribeOrdersRequest}
 */
proto.opendexrpc.SubscribeOrdersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExisting(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SubscribeOrdersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SubscribeOrdersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SubscribeOrdersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeOrdersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExisting();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool existing = 1;
 * @return {boolean}
 */
proto.opendexrpc.SubscribeOrdersRequest.prototype.getExisting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.SubscribeOrdersRequest} returns this
 */
proto.opendexrpc.SubscribeOrdersRequest.prototype.setExisting = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SubscribeSwapsAcceptedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SubscribeSwapsAcceptedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SubscribeSwapsAcceptedRequest}
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SubscribeSwapsAcceptedRequest;
  return proto.opendexrpc.SubscribeSwapsAcceptedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SubscribeSwapsAcceptedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SubscribeSwapsAcceptedRequest}
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SubscribeSwapsAcceptedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SubscribeSwapsAcceptedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeSwapsAcceptedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SubscribeSwapsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SubscribeSwapsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SubscribeSwapsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeSwapsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includeTaker: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SubscribeSwapsRequest}
 */
proto.opendexrpc.SubscribeSwapsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SubscribeSwapsRequest;
  return proto.opendexrpc.SubscribeSwapsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SubscribeSwapsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SubscribeSwapsRequest}
 */
proto.opendexrpc.SubscribeSwapsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeTaker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SubscribeSwapsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SubscribeSwapsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SubscribeSwapsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SubscribeSwapsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludeTaker();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool include_taker = 1;
 * @return {boolean}
 */
proto.opendexrpc.SubscribeSwapsRequest.prototype.getIncludeTaker = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.SubscribeSwapsRequest} returns this
 */
proto.opendexrpc.SubscribeSwapsRequest.prototype.setIncludeTaker = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SwapAccepted.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SwapAccepted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SwapAccepted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapAccepted.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    localId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pairId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    peerPubKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rHash: jspb.Message.getFieldWithDefault(msg, 7, ""),
    amountReceiving: jspb.Message.getFieldWithDefault(msg, 8, 0),
    amountSending: jspb.Message.getFieldWithDefault(msg, 9, 0),
    currencyReceiving: jspb.Message.getFieldWithDefault(msg, 10, ""),
    currencySending: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SwapAccepted}
 */
proto.opendexrpc.SwapAccepted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SwapAccepted;
  return proto.opendexrpc.SwapAccepted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SwapAccepted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SwapAccepted}
 */
proto.opendexrpc.SwapAccepted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerPubKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRHash(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountReceiving(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountSending(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyReceiving(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencySending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SwapAccepted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SwapAccepted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SwapAccepted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapAccepted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPeerPubKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRHash();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAmountReceiving();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAmountSending();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getCurrencyReceiving();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCurrencySending();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string local_id = 2;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getLocalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setLocalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pair_id = 3;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 quantity = 4;
 * @return {number}
 */
proto.opendexrpc.SwapAccepted.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double price = 5;
 * @return {number}
 */
proto.opendexrpc.SwapAccepted.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string peer_pub_key = 6;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getPeerPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setPeerPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string r_hash = 7;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getRHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setRHash = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 amount_receiving = 8;
 * @return {number}
 */
proto.opendexrpc.SwapAccepted.prototype.getAmountReceiving = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setAmountReceiving = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 amount_sending = 9;
 * @return {number}
 */
proto.opendexrpc.SwapAccepted.prototype.getAmountSending = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setAmountSending = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string currency_receiving = 10;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getCurrencyReceiving = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setCurrencyReceiving = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string currency_sending = 11;
 * @return {string}
 */
proto.opendexrpc.SwapAccepted.prototype.getCurrencySending = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapAccepted} returns this
 */
proto.opendexrpc.SwapAccepted.prototype.setCurrencySending = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SwapFailure.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SwapFailure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SwapFailure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapFailure.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pairId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    peerPubKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    failureReason: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SwapFailure}
 */
proto.opendexrpc.SwapFailure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SwapFailure;
  return proto.opendexrpc.SwapFailure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SwapFailure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SwapFailure}
 */
proto.opendexrpc.SwapFailure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerPubKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailureReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SwapFailure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SwapFailure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SwapFailure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapFailure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPeerPubKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFailureReason();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.opendexrpc.SwapFailure.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapFailure} returns this
 */
proto.opendexrpc.SwapFailure.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pair_id = 2;
 * @return {string}
 */
proto.opendexrpc.SwapFailure.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapFailure} returns this
 */
proto.opendexrpc.SwapFailure.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 quantity = 3;
 * @return {number}
 */
proto.opendexrpc.SwapFailure.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapFailure} returns this
 */
proto.opendexrpc.SwapFailure.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string peer_pub_key = 4;
 * @return {string}
 */
proto.opendexrpc.SwapFailure.prototype.getPeerPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapFailure} returns this
 */
proto.opendexrpc.SwapFailure.prototype.setPeerPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string failure_reason = 5;
 * @return {string}
 */
proto.opendexrpc.SwapFailure.prototype.getFailureReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapFailure} returns this
 */
proto.opendexrpc.SwapFailure.prototype.setFailureReason = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.SwapSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.SwapSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.SwapSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    localId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pairId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rHash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    amountReceived: jspb.Message.getFieldWithDefault(msg, 8, 0),
    amountSent: jspb.Message.getFieldWithDefault(msg, 9, 0),
    peerPubKey: jspb.Message.getFieldWithDefault(msg, 10, ""),
    role: jspb.Message.getFieldWithDefault(msg, 11, 0),
    currencyReceived: jspb.Message.getFieldWithDefault(msg, 12, ""),
    currencySent: jspb.Message.getFieldWithDefault(msg, 13, ""),
    rPreimage: jspb.Message.getFieldWithDefault(msg, 14, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.SwapSuccess}
 */
proto.opendexrpc.SwapSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.SwapSuccess;
  return proto.opendexrpc.SwapSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.SwapSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.SwapSuccess}
 */
proto.opendexrpc.SwapSuccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRHash(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountReceived(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountSent(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerPubKey(value);
      break;
    case 11:
      var value = /** @type {!proto.opendexrpc.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyReceived(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencySent(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRPreimage(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.SwapSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.SwapSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.SwapSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.SwapSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAmountReceived();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAmountSent();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getPeerPubKey();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getCurrencyReceived();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCurrencySent();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRPreimage();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string local_id = 2;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getLocalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setLocalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string pair_id = 3;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 quantity = 4;
 * @return {number}
 */
proto.opendexrpc.SwapSuccess.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string r_hash = 5;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getRHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setRHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 amount_received = 8;
 * @return {number}
 */
proto.opendexrpc.SwapSuccess.prototype.getAmountReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setAmountReceived = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 amount_sent = 9;
 * @return {number}
 */
proto.opendexrpc.SwapSuccess.prototype.getAmountSent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setAmountSent = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string peer_pub_key = 10;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getPeerPubKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setPeerPubKey = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Role role = 11;
 * @return {!proto.opendexrpc.Role}
 */
proto.opendexrpc.SwapSuccess.prototype.getRole = function() {
  return /** @type {!proto.opendexrpc.Role} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.opendexrpc.Role} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string currency_received = 12;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getCurrencyReceived = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setCurrencyReceived = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string currency_sent = 13;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getCurrencySent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setCurrencySent = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string r_preimage = 14;
 * @return {string}
 */
proto.opendexrpc.SwapSuccess.prototype.getRPreimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setRPreimage = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional double price = 15;
 * @return {number}
 */
proto.opendexrpc.SwapSuccess.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.SwapSuccess} returns this
 */
proto.opendexrpc.SwapSuccess.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.Trade.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.Trade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.Trade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Trade.toObject = function(includeInstance, msg) {
  var f, obj = {
    makerOrder: (f = msg.getMakerOrder()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    takerOrder: (f = msg.getTakerOrder()) && proto.opendexrpc.Order.toObject(includeInstance, f),
    rHash: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pairId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    role: jspb.Message.getFieldWithDefault(msg, 7, 0),
    executedAt: jspb.Message.getFieldWithDefault(msg, 8, 0),
    side: jspb.Message.getFieldWithDefault(msg, 9, 0),
    counterparty: (f = msg.getCounterparty()) && proto.opendexrpc.NodeIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.Trade}
 */
proto.opendexrpc.Trade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.Trade;
  return proto.opendexrpc.Trade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.Trade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.Trade}
 */
proto.opendexrpc.Trade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setMakerOrder(value);
      break;
    case 2:
      var value = new proto.opendexrpc.Order;
      reader.readMessage(value,proto.opendexrpc.Order.deserializeBinaryFromReader);
      msg.setTakerOrder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQuantity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPairId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 7:
      var value = /** @type {!proto.opendexrpc.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExecutedAt(value);
      break;
    case 9:
      var value = /** @type {!proto.opendexrpc.OrderSide} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 10:
      var value = new proto.opendexrpc.NodeIdentifier;
      reader.readMessage(value,proto.opendexrpc.NodeIdentifier.deserializeBinaryFromReader);
      msg.setCounterparty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.Trade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.Trade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.Trade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.Trade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMakerOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getTakerOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.opendexrpc.Order.serializeBinaryToWriter
    );
  }
  f = message.getRHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPairId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getExecutedAt();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCounterparty();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.opendexrpc.NodeIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order maker_order = 1;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.Trade.prototype.getMakerOrder = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 1));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.Trade} returns this
*/
proto.opendexrpc.Trade.prototype.setMakerOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.clearMakerOrder = function() {
  return this.setMakerOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.Trade.prototype.hasMakerOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Order taker_order = 2;
 * @return {?proto.opendexrpc.Order}
 */
proto.opendexrpc.Trade.prototype.getTakerOrder = function() {
  return /** @type{?proto.opendexrpc.Order} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.Order, 2));
};


/**
 * @param {?proto.opendexrpc.Order|undefined} value
 * @return {!proto.opendexrpc.Trade} returns this
*/
proto.opendexrpc.Trade.prototype.setTakerOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.clearTakerOrder = function() {
  return this.setTakerOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.Trade.prototype.hasTakerOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string r_hash = 3;
 * @return {string}
 */
proto.opendexrpc.Trade.prototype.getRHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setRHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 quantity = 4;
 * @return {number}
 */
proto.opendexrpc.Trade.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string pair_id = 5;
 * @return {string}
 */
proto.opendexrpc.Trade.prototype.getPairId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setPairId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double price = 6;
 * @return {number}
 */
proto.opendexrpc.Trade.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional Role role = 7;
 * @return {!proto.opendexrpc.Role}
 */
proto.opendexrpc.Trade.prototype.getRole = function() {
  return /** @type {!proto.opendexrpc.Role} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.opendexrpc.Role} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setRole = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint64 executed_at = 8;
 * @return {number}
 */
proto.opendexrpc.Trade.prototype.getExecutedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setExecutedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional OrderSide side = 9;
 * @return {!proto.opendexrpc.OrderSide}
 */
proto.opendexrpc.Trade.prototype.getSide = function() {
  return /** @type {!proto.opendexrpc.OrderSide} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.opendexrpc.OrderSide} value
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional NodeIdentifier counterparty = 10;
 * @return {?proto.opendexrpc.NodeIdentifier}
 */
proto.opendexrpc.Trade.prototype.getCounterparty = function() {
  return /** @type{?proto.opendexrpc.NodeIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.opendexrpc.NodeIdentifier, 10));
};


/**
 * @param {?proto.opendexrpc.NodeIdentifier|undefined} value
 * @return {!proto.opendexrpc.Trade} returns this
*/
proto.opendexrpc.Trade.prototype.setCounterparty = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opendexrpc.Trade} returns this
 */
proto.opendexrpc.Trade.prototype.clearCounterparty = function() {
  return this.setCounterparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opendexrpc.Trade.prototype.hasCounterparty = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.TradeHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.TradeHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.TradeHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradeHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.TradeHistoryRequest}
 */
proto.opendexrpc.TradeHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.TradeHistoryRequest;
  return proto.opendexrpc.TradeHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.TradeHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.TradeHistoryRequest}
 */
proto.opendexrpc.TradeHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.TradeHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.TradeHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.TradeHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradeHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.opendexrpc.TradeHistoryRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.TradeHistoryRequest} returns this
 */
proto.opendexrpc.TradeHistoryRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.TradeHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.TradeHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.TradeHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.TradeHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradeHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.opendexrpc.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.TradeHistoryResponse}
 */
proto.opendexrpc.TradeHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.TradeHistoryResponse;
  return proto.opendexrpc.TradeHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.TradeHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.TradeHistoryResponse}
 */
proto.opendexrpc.TradeHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opendexrpc.Trade;
      reader.readMessage(value,proto.opendexrpc.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.TradeHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.TradeHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.TradeHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradeHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.opendexrpc.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trade trades = 1;
 * @return {!Array<!proto.opendexrpc.Trade>}
 */
proto.opendexrpc.TradeHistoryResponse.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.opendexrpc.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.opendexrpc.Trade, 1));
};


/**
 * @param {!Array<!proto.opendexrpc.Trade>} value
 * @return {!proto.opendexrpc.TradeHistoryResponse} returns this
*/
proto.opendexrpc.TradeHistoryResponse.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.opendexrpc.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.Trade}
 */
proto.opendexrpc.TradeHistoryResponse.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.opendexrpc.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.TradeHistoryResponse} returns this
 */
proto.opendexrpc.TradeHistoryResponse.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.TradingLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.TradingLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.TradingLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxSell: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxBuy: jspb.Message.getFieldWithDefault(msg, 2, 0),
    reservedSell: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reservedBuy: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.TradingLimits}
 */
proto.opendexrpc.TradingLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.TradingLimits;
  return proto.opendexrpc.TradingLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.TradingLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.TradingLimits}
 */
proto.opendexrpc.TradingLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxSell(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxBuy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReservedBuy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.TradingLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.TradingLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.TradingLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxSell();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMaxBuy();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getReservedSell();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getReservedBuy();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 max_sell = 1;
 * @return {number}
 */
proto.opendexrpc.TradingLimits.prototype.getMaxSell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.TradingLimits} returns this
 */
proto.opendexrpc.TradingLimits.prototype.setMaxSell = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 max_buy = 2;
 * @return {number}
 */
proto.opendexrpc.TradingLimits.prototype.getMaxBuy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.TradingLimits} returns this
 */
proto.opendexrpc.TradingLimits.prototype.setMaxBuy = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 reserved_sell = 3;
 * @return {number}
 */
proto.opendexrpc.TradingLimits.prototype.getReservedSell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.TradingLimits} returns this
 */
proto.opendexrpc.TradingLimits.prototype.setReservedSell = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 reserved_buy = 4;
 * @return {number}
 */
proto.opendexrpc.TradingLimits.prototype.getReservedBuy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.TradingLimits} returns this
 */
proto.opendexrpc.TradingLimits.prototype.setReservedBuy = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.TradingLimitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.TradingLimitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.TradingLimitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.TradingLimitsRequest}
 */
proto.opendexrpc.TradingLimitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.TradingLimitsRequest;
  return proto.opendexrpc.TradingLimitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.TradingLimitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.TradingLimitsRequest}
 */
proto.opendexrpc.TradingLimitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.TradingLimitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.TradingLimitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.TradingLimitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.TradingLimitsRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.TradingLimitsRequest} returns this
 */
proto.opendexrpc.TradingLimitsRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.TradingLimitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.TradingLimitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.TradingLimitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    limitsMap: (f = msg.getLimitsMap()) ? f.toObject(includeInstance, proto.opendexrpc.TradingLimits.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.TradingLimitsResponse}
 */
proto.opendexrpc.TradingLimitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.TradingLimitsResponse;
  return proto.opendexrpc.TradingLimitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.TradingLimitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.TradingLimitsResponse}
 */
proto.opendexrpc.TradingLimitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getLimitsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.opendexrpc.TradingLimits.deserializeBinaryFromReader, "", new proto.opendexrpc.TradingLimits());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.TradingLimitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.TradingLimitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.TradingLimitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.TradingLimitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimitsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.opendexrpc.TradingLimits.serializeBinaryToWriter);
  }
};


/**
 * map<string, TradingLimits> limits = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.opendexrpc.TradingLimits>}
 */
proto.opendexrpc.TradingLimitsResponse.prototype.getLimitsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.opendexrpc.TradingLimits>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.opendexrpc.TradingLimits));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.opendexrpc.TradingLimitsResponse} returns this
 */
proto.opendexrpc.TradingLimitsResponse.prototype.clearLimitsMap = function() {
  this.getLimitsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.UnbanRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.UnbanRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.UnbanRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnbanRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reconnect: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.UnbanRequest}
 */
proto.opendexrpc.UnbanRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.UnbanRequest;
  return proto.opendexrpc.UnbanRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.UnbanRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.UnbanRequest}
 */
proto.opendexrpc.UnbanRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIdentifier(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReconnect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.UnbanRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.UnbanRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.UnbanRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnbanRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReconnect();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string node_identifier = 1;
 * @return {string}
 */
proto.opendexrpc.UnbanRequest.prototype.getNodeIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.UnbanRequest} returns this
 */
proto.opendexrpc.UnbanRequest.prototype.setNodeIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool reconnect = 2;
 * @return {boolean}
 */
proto.opendexrpc.UnbanRequest.prototype.getReconnect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.UnbanRequest} returns this
 */
proto.opendexrpc.UnbanRequest.prototype.setReconnect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.UnbanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.UnbanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.UnbanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnbanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.UnbanResponse}
 */
proto.opendexrpc.UnbanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.UnbanResponse;
  return proto.opendexrpc.UnbanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.UnbanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.UnbanResponse}
 */
proto.opendexrpc.UnbanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.UnbanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.UnbanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.UnbanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnbanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.UnlockNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.UnlockNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.UnlockNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnlockNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.UnlockNodeRequest}
 */
proto.opendexrpc.UnlockNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.UnlockNodeRequest;
  return proto.opendexrpc.UnlockNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.UnlockNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.UnlockNodeRequest}
 */
proto.opendexrpc.UnlockNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.UnlockNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.UnlockNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.UnlockNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnlockNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.opendexrpc.UnlockNodeRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.UnlockNodeRequest} returns this
 */
proto.opendexrpc.UnlockNodeRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.opendexrpc.UnlockNodeResponse.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.UnlockNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.UnlockNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.UnlockNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnlockNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unlockedLndsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    lockedLndsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.UnlockNodeResponse}
 */
proto.opendexrpc.UnlockNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.UnlockNodeResponse;
  return proto.opendexrpc.UnlockNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.UnlockNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.UnlockNodeResponse}
 */
proto.opendexrpc.UnlockNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnlockedLnds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLockedLnds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.UnlockNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.UnlockNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.UnlockNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.UnlockNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnlockedLndsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLockedLndsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string unlocked_lnds = 1;
 * @return {!Array<string>}
 */
proto.opendexrpc.UnlockNodeResponse.prototype.getUnlockedLndsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.setUnlockedLndsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.addUnlockedLnds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.clearUnlockedLndsList = function() {
  return this.setUnlockedLndsList([]);
};


/**
 * repeated string locked_lnds = 3;
 * @return {!Array<string>}
 */
proto.opendexrpc.UnlockNodeResponse.prototype.getLockedLndsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.setLockedLndsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.addLockedLnds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.opendexrpc.UnlockNodeResponse} returns this
 */
proto.opendexrpc.UnlockNodeResponse.prototype.clearLockedLndsList = function() {
  return this.setLockedLndsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.WithdrawRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.WithdrawRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.WithdrawRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.WithdrawRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    fee: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.WithdrawRequest}
 */
proto.opendexrpc.WithdrawRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.WithdrawRequest;
  return proto.opendexrpc.WithdrawRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.WithdrawRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.WithdrawRequest}
 */
proto.opendexrpc.WithdrawRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.WithdrawRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.WithdrawRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.WithdrawRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.WithdrawRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.opendexrpc.WithdrawRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.WithdrawRequest} returns this
 */
proto.opendexrpc.WithdrawRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination = 2;
 * @return {string}
 */
proto.opendexrpc.WithdrawRequest.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.WithdrawRequest} returns this
 */
proto.opendexrpc.WithdrawRequest.prototype.setDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.opendexrpc.WithdrawRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.WithdrawRequest} returns this
 */
proto.opendexrpc.WithdrawRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool all = 4;
 * @return {boolean}
 */
proto.opendexrpc.WithdrawRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.opendexrpc.WithdrawRequest} returns this
 */
proto.opendexrpc.WithdrawRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint32 fee = 5;
 * @return {number}
 */
proto.opendexrpc.WithdrawRequest.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opendexrpc.WithdrawRequest} returns this
 */
proto.opendexrpc.WithdrawRequest.prototype.setFee = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.opendexrpc.WithdrawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.opendexrpc.WithdrawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opendexrpc.WithdrawResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.WithdrawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.opendexrpc.WithdrawResponse}
 */
proto.opendexrpc.WithdrawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opendexrpc.WithdrawResponse;
  return proto.opendexrpc.WithdrawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opendexrpc.WithdrawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opendexrpc.WithdrawResponse}
 */
proto.opendexrpc.WithdrawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.opendexrpc.WithdrawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opendexrpc.WithdrawResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opendexrpc.WithdrawResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opendexrpc.WithdrawResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.opendexrpc.WithdrawResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.opendexrpc.WithdrawResponse} returns this
 */
proto.opendexrpc.WithdrawResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.opendexrpc.OrderSide = {
  BUY: 0,
  SELL: 1,
  BOTH: 2
};

/**
 * @enum {number}
 */
proto.opendexrpc.Role = {
  TAKER: 0,
  MAKER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.opendexrpc.LogLevel = {
  ALERT: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  VERBOSE: 4,
  DEBUG: 5,
  TRACE: 6
};

goog.object.extend(exports, proto.opendexrpc);

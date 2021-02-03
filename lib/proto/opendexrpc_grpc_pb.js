// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 The Exchange Union Developers
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
'use strict';
var opendexrpc_pb = require('./opendexrpc_pb.js');
var annotations_pb = require('./annotations_pb.js');

function serialize_opendexrpc_AddCurrencyResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.AddCurrencyResponse)) {
    throw new Error('Expected argument of type opendexrpc.AddCurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_AddCurrencyResponse(buffer_arg) {
  return opendexrpc_pb.AddCurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_AddPairRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.AddPairRequest)) {
    throw new Error('Expected argument of type opendexrpc.AddPairRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_AddPairRequest(buffer_arg) {
  return opendexrpc_pb.AddPairRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_AddPairResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.AddPairResponse)) {
    throw new Error('Expected argument of type opendexrpc.AddPairResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_AddPairResponse(buffer_arg) {
  return opendexrpc_pb.AddPairResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_BanRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.BanRequest)) {
    throw new Error('Expected argument of type opendexrpc.BanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_BanRequest(buffer_arg) {
  return opendexrpc_pb.BanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_BanResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.BanResponse)) {
    throw new Error('Expected argument of type opendexrpc.BanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_BanResponse(buffer_arg) {
  return opendexrpc_pb.BanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ChangePasswordRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type opendexrpc.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ChangePasswordRequest(buffer_arg) {
  return opendexrpc_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ChangePasswordResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ChangePasswordResponse)) {
    throw new Error('Expected argument of type opendexrpc.ChangePasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ChangePasswordResponse(buffer_arg) {
  return opendexrpc_pb.ChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_CloseChannelRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.CloseChannelRequest)) {
    throw new Error('Expected argument of type opendexrpc.CloseChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_CloseChannelRequest(buffer_arg) {
  return opendexrpc_pb.CloseChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_CloseChannelResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.CloseChannelResponse)) {
    throw new Error('Expected argument of type opendexrpc.CloseChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_CloseChannelResponse(buffer_arg) {
  return opendexrpc_pb.CloseChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ConnectRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ConnectRequest)) {
    throw new Error('Expected argument of type opendexrpc.ConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ConnectRequest(buffer_arg) {
  return opendexrpc_pb.ConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ConnectResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ConnectResponse)) {
    throw new Error('Expected argument of type opendexrpc.ConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ConnectResponse(buffer_arg) {
  return opendexrpc_pb.ConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_CreateNodeRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.CreateNodeRequest)) {
    throw new Error('Expected argument of type opendexrpc.CreateNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_CreateNodeRequest(buffer_arg) {
  return opendexrpc_pb.CreateNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_CreateNodeResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.CreateNodeResponse)) {
    throw new Error('Expected argument of type opendexrpc.CreateNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_CreateNodeResponse(buffer_arg) {
  return opendexrpc_pb.CreateNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_Currency(arg) {
  if (!(arg instanceof opendexrpc_pb.Currency)) {
    throw new Error('Expected argument of type opendexrpc.Currency');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_Currency(buffer_arg) {
  return opendexrpc_pb.Currency.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_DepositRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.DepositRequest)) {
    throw new Error('Expected argument of type opendexrpc.DepositRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_DepositRequest(buffer_arg) {
  return opendexrpc_pb.DepositRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_DepositResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.DepositResponse)) {
    throw new Error('Expected argument of type opendexrpc.DepositResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_DepositResponse(buffer_arg) {
  return opendexrpc_pb.DepositResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_DiscoverNodesRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.DiscoverNodesRequest)) {
    throw new Error('Expected argument of type opendexrpc.DiscoverNodesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_DiscoverNodesRequest(buffer_arg) {
  return opendexrpc_pb.DiscoverNodesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_DiscoverNodesResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.DiscoverNodesResponse)) {
    throw new Error('Expected argument of type opendexrpc.DiscoverNodesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_DiscoverNodesResponse(buffer_arg) {
  return opendexrpc_pb.DiscoverNodesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ExecuteSwapRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ExecuteSwapRequest)) {
    throw new Error('Expected argument of type opendexrpc.ExecuteSwapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ExecuteSwapRequest(buffer_arg) {
  return opendexrpc_pb.ExecuteSwapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetBalanceRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.GetBalanceRequest)) {
    throw new Error('Expected argument of type opendexrpc.GetBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetBalanceRequest(buffer_arg) {
  return opendexrpc_pb.GetBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetBalanceResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.GetBalanceResponse)) {
    throw new Error('Expected argument of type opendexrpc.GetBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetBalanceResponse(buffer_arg) {
  return opendexrpc_pb.GetBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetInfoRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type opendexrpc.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetInfoRequest(buffer_arg) {
  return opendexrpc_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetInfoResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type opendexrpc.GetInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetInfoResponse(buffer_arg) {
  return opendexrpc_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetMnemonicRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.GetMnemonicRequest)) {
    throw new Error('Expected argument of type opendexrpc.GetMnemonicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetMnemonicRequest(buffer_arg) {
  return opendexrpc_pb.GetMnemonicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetMnemonicResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.GetMnemonicResponse)) {
    throw new Error('Expected argument of type opendexrpc.GetMnemonicResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetMnemonicResponse(buffer_arg) {
  return opendexrpc_pb.GetMnemonicResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetNodeInfoRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.GetNodeInfoRequest)) {
    throw new Error('Expected argument of type opendexrpc.GetNodeInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetNodeInfoRequest(buffer_arg) {
  return opendexrpc_pb.GetNodeInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_GetNodeInfoResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.GetNodeInfoResponse)) {
    throw new Error('Expected argument of type opendexrpc.GetNodeInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_GetNodeInfoResponse(buffer_arg) {
  return opendexrpc_pb.GetNodeInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListCurrenciesRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ListCurrenciesRequest)) {
    throw new Error('Expected argument of type opendexrpc.ListCurrenciesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListCurrenciesRequest(buffer_arg) {
  return opendexrpc_pb.ListCurrenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListCurrenciesResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ListCurrenciesResponse)) {
    throw new Error('Expected argument of type opendexrpc.ListCurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListCurrenciesResponse(buffer_arg) {
  return opendexrpc_pb.ListCurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListOrdersRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type opendexrpc.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListOrdersRequest(buffer_arg) {
  return opendexrpc_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListOrdersResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type opendexrpc.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListOrdersResponse(buffer_arg) {
  return opendexrpc_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListPairsRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ListPairsRequest)) {
    throw new Error('Expected argument of type opendexrpc.ListPairsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListPairsRequest(buffer_arg) {
  return opendexrpc_pb.ListPairsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListPairsResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ListPairsResponse)) {
    throw new Error('Expected argument of type opendexrpc.ListPairsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListPairsResponse(buffer_arg) {
  return opendexrpc_pb.ListPairsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListPeersRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ListPeersRequest)) {
    throw new Error('Expected argument of type opendexrpc.ListPeersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListPeersRequest(buffer_arg) {
  return opendexrpc_pb.ListPeersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ListPeersResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ListPeersResponse)) {
    throw new Error('Expected argument of type opendexrpc.ListPeersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ListPeersResponse(buffer_arg) {
  return opendexrpc_pb.ListPeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_OpenChannelRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.OpenChannelRequest)) {
    throw new Error('Expected argument of type opendexrpc.OpenChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_OpenChannelRequest(buffer_arg) {
  return opendexrpc_pb.OpenChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_OpenChannelResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.OpenChannelResponse)) {
    throw new Error('Expected argument of type opendexrpc.OpenChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_OpenChannelResponse(buffer_arg) {
  return opendexrpc_pb.OpenChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_OrderBookRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.OrderBookRequest)) {
    throw new Error('Expected argument of type opendexrpc.OrderBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_OrderBookRequest(buffer_arg) {
  return opendexrpc_pb.OrderBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_OrderBookResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.OrderBookResponse)) {
    throw new Error('Expected argument of type opendexrpc.OrderBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_OrderBookResponse(buffer_arg) {
  return opendexrpc_pb.OrderBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_OrderUpdate(arg) {
  if (!(arg instanceof opendexrpc_pb.OrderUpdate)) {
    throw new Error('Expected argument of type opendexrpc.OrderUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_OrderUpdate(buffer_arg) {
  return opendexrpc_pb.OrderUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_PlaceOrderEvent(arg) {
  if (!(arg instanceof opendexrpc_pb.PlaceOrderEvent)) {
    throw new Error('Expected argument of type opendexrpc.PlaceOrderEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_PlaceOrderEvent(buffer_arg) {
  return opendexrpc_pb.PlaceOrderEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_PlaceOrderRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.PlaceOrderRequest)) {
    throw new Error('Expected argument of type opendexrpc.PlaceOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_PlaceOrderRequest(buffer_arg) {
  return opendexrpc_pb.PlaceOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_PlaceOrderResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.PlaceOrderResponse)) {
    throw new Error('Expected argument of type opendexrpc.PlaceOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_PlaceOrderResponse(buffer_arg) {
  return opendexrpc_pb.PlaceOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveAllOrdersRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveAllOrdersRequest)) {
    throw new Error('Expected argument of type opendexrpc.RemoveAllOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveAllOrdersRequest(buffer_arg) {
  return opendexrpc_pb.RemoveAllOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveAllOrdersResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveAllOrdersResponse)) {
    throw new Error('Expected argument of type opendexrpc.RemoveAllOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveAllOrdersResponse(buffer_arg) {
  return opendexrpc_pb.RemoveAllOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveCurrencyRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveCurrencyRequest)) {
    throw new Error('Expected argument of type opendexrpc.RemoveCurrencyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveCurrencyRequest(buffer_arg) {
  return opendexrpc_pb.RemoveCurrencyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveCurrencyResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveCurrencyResponse)) {
    throw new Error('Expected argument of type opendexrpc.RemoveCurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveCurrencyResponse(buffer_arg) {
  return opendexrpc_pb.RemoveCurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveOrderRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveOrderRequest)) {
    throw new Error('Expected argument of type opendexrpc.RemoveOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveOrderRequest(buffer_arg) {
  return opendexrpc_pb.RemoveOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemoveOrderResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.RemoveOrderResponse)) {
    throw new Error('Expected argument of type opendexrpc.RemoveOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemoveOrderResponse(buffer_arg) {
  return opendexrpc_pb.RemoveOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemovePairRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.RemovePairRequest)) {
    throw new Error('Expected argument of type opendexrpc.RemovePairRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemovePairRequest(buffer_arg) {
  return opendexrpc_pb.RemovePairRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RemovePairResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.RemovePairResponse)) {
    throw new Error('Expected argument of type opendexrpc.RemovePairResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RemovePairResponse(buffer_arg) {
  return opendexrpc_pb.RemovePairResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RestoreNodeRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.RestoreNodeRequest)) {
    throw new Error('Expected argument of type opendexrpc.RestoreNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RestoreNodeRequest(buffer_arg) {
  return opendexrpc_pb.RestoreNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_RestoreNodeResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.RestoreNodeResponse)) {
    throw new Error('Expected argument of type opendexrpc.RestoreNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_RestoreNodeResponse(buffer_arg) {
  return opendexrpc_pb.RestoreNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SetLogLevelRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.SetLogLevelRequest)) {
    throw new Error('Expected argument of type opendexrpc.SetLogLevelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SetLogLevelRequest(buffer_arg) {
  return opendexrpc_pb.SetLogLevelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SetLogLevelResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.SetLogLevelResponse)) {
    throw new Error('Expected argument of type opendexrpc.SetLogLevelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SetLogLevelResponse(buffer_arg) {
  return opendexrpc_pb.SetLogLevelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ShutdownRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.ShutdownRequest)) {
    throw new Error('Expected argument of type opendexrpc.ShutdownRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ShutdownRequest(buffer_arg) {
  return opendexrpc_pb.ShutdownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_ShutdownResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.ShutdownResponse)) {
    throw new Error('Expected argument of type opendexrpc.ShutdownResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_ShutdownResponse(buffer_arg) {
  return opendexrpc_pb.ShutdownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SubscribeOrdersRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.SubscribeOrdersRequest)) {
    throw new Error('Expected argument of type opendexrpc.SubscribeOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SubscribeOrdersRequest(buffer_arg) {
  return opendexrpc_pb.SubscribeOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SubscribeSwapsAcceptedRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.SubscribeSwapsAcceptedRequest)) {
    throw new Error('Expected argument of type opendexrpc.SubscribeSwapsAcceptedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SubscribeSwapsAcceptedRequest(buffer_arg) {
  return opendexrpc_pb.SubscribeSwapsAcceptedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SubscribeSwapsRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.SubscribeSwapsRequest)) {
    throw new Error('Expected argument of type opendexrpc.SubscribeSwapsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SubscribeSwapsRequest(buffer_arg) {
  return opendexrpc_pb.SubscribeSwapsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SwapAccepted(arg) {
  if (!(arg instanceof opendexrpc_pb.SwapAccepted)) {
    throw new Error('Expected argument of type opendexrpc.SwapAccepted');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SwapAccepted(buffer_arg) {
  return opendexrpc_pb.SwapAccepted.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SwapFailure(arg) {
  if (!(arg instanceof opendexrpc_pb.SwapFailure)) {
    throw new Error('Expected argument of type opendexrpc.SwapFailure');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SwapFailure(buffer_arg) {
  return opendexrpc_pb.SwapFailure.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_SwapSuccess(arg) {
  if (!(arg instanceof opendexrpc_pb.SwapSuccess)) {
    throw new Error('Expected argument of type opendexrpc.SwapSuccess');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_SwapSuccess(buffer_arg) {
  return opendexrpc_pb.SwapSuccess.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_TradeHistoryRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.TradeHistoryRequest)) {
    throw new Error('Expected argument of type opendexrpc.TradeHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_TradeHistoryRequest(buffer_arg) {
  return opendexrpc_pb.TradeHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_TradeHistoryResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.TradeHistoryResponse)) {
    throw new Error('Expected argument of type opendexrpc.TradeHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_TradeHistoryResponse(buffer_arg) {
  return opendexrpc_pb.TradeHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_TradingLimitsRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.TradingLimitsRequest)) {
    throw new Error('Expected argument of type opendexrpc.TradingLimitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_TradingLimitsRequest(buffer_arg) {
  return opendexrpc_pb.TradingLimitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_TradingLimitsResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.TradingLimitsResponse)) {
    throw new Error('Expected argument of type opendexrpc.TradingLimitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_TradingLimitsResponse(buffer_arg) {
  return opendexrpc_pb.TradingLimitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_UnbanRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.UnbanRequest)) {
    throw new Error('Expected argument of type opendexrpc.UnbanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_UnbanRequest(buffer_arg) {
  return opendexrpc_pb.UnbanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_UnbanResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.UnbanResponse)) {
    throw new Error('Expected argument of type opendexrpc.UnbanResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_UnbanResponse(buffer_arg) {
  return opendexrpc_pb.UnbanResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_UnlockNodeRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.UnlockNodeRequest)) {
    throw new Error('Expected argument of type opendexrpc.UnlockNodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_UnlockNodeRequest(buffer_arg) {
  return opendexrpc_pb.UnlockNodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_UnlockNodeResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.UnlockNodeResponse)) {
    throw new Error('Expected argument of type opendexrpc.UnlockNodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_UnlockNodeResponse(buffer_arg) {
  return opendexrpc_pb.UnlockNodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_WithdrawRequest(arg) {
  if (!(arg instanceof opendexrpc_pb.WithdrawRequest)) {
    throw new Error('Expected argument of type opendexrpc.WithdrawRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_WithdrawRequest(buffer_arg) {
  return opendexrpc_pb.WithdrawRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_opendexrpc_WithdrawResponse(arg) {
  if (!(arg instanceof opendexrpc_pb.WithdrawResponse)) {
    throw new Error('Expected argument of type opendexrpc.WithdrawResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_opendexrpc_WithdrawResponse(buffer_arg) {
  return opendexrpc_pb.WithdrawResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for interacting with a locked or uninitalized opendex node. 
var XudInitService = exports['opendexrpc.XudInit'] = {
  // Creates an opendex identity node key and underlying wallets. The node key and
// wallets are derived from a single seed and encrypted using a single
// password provided as a parameter to the call. 
// shell: xucli create 
createNode: {
    path: '/opendexrpc.XudInit/CreateNode',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.CreateNodeRequest,
    responseType: opendexrpc_pb.CreateNodeResponse,
    requestSerialize: serialize_opendexrpc_CreateNodeRequest,
    requestDeserialize: deserialize_opendexrpc_CreateNodeRequest,
    responseSerialize: serialize_opendexrpc_CreateNodeResponse,
    responseDeserialize: deserialize_opendexrpc_CreateNodeResponse,
  },
  // Restores an opendex instance and underlying wallets from a seed.
// shell: xucli restore [backup_directory] 
restoreNode: {
    path: '/opendexrpc.XudInit/RestoreNode',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.RestoreNodeRequest,
    responseType: opendexrpc_pb.RestoreNodeResponse,
    requestSerialize: serialize_opendexrpc_RestoreNodeRequest,
    requestDeserialize: deserialize_opendexrpc_RestoreNodeRequest,
    responseSerialize: serialize_opendexrpc_RestoreNodeResponse,
    responseDeserialize: deserialize_opendexrpc_RestoreNodeResponse,
  },
  // Unlocks and decrypts the opendex node key and any underlying wallets.
// shell: xucli unlock 
unlockNode: {
    path: '/opendexrpc.XudInit/UnlockNode',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.UnlockNodeRequest,
    responseType: opendexrpc_pb.UnlockNodeResponse,
    requestSerialize: serialize_opendexrpc_UnlockNodeRequest,
    requestDeserialize: deserialize_opendexrpc_UnlockNodeRequest,
    responseSerialize: serialize_opendexrpc_UnlockNodeResponse,
    responseDeserialize: deserialize_opendexrpc_UnlockNodeResponse,
  },
};

// The primary service for interacting with a running opendex node. 
var XudService = exports['opendexrpc.Xud'] = {
  // Adds a currency to the list of supported currencies. Once added, the currency may be used for
// new trading pairs.
// shell: xucli addcurrency <currency> <swap_client> [decimal_places] [token_address] 
addCurrency: {
    path: '/opendexrpc.Xud/AddCurrency',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.Currency,
    responseType: opendexrpc_pb.AddCurrencyResponse,
    requestSerialize: serialize_opendexrpc_Currency,
    requestDeserialize: deserialize_opendexrpc_Currency,
    responseSerialize: serialize_opendexrpc_AddCurrencyResponse,
    responseDeserialize: deserialize_opendexrpc_AddCurrencyResponse,
  },
  // Adds a trading pair to the list of supported trading pairs. The newly supported pair is
// advertised to peers so they may begin sending orders for it.
// shell: xucli addpair <base_currency> <quote_currency> 
addPair: {
    path: '/opendexrpc.Xud/AddPair',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.AddPairRequest,
    responseType: opendexrpc_pb.AddPairResponse,
    requestSerialize: serialize_opendexrpc_AddPairRequest,
    requestDeserialize: deserialize_opendexrpc_AddPairRequest,
    responseSerialize: serialize_opendexrpc_AddPairResponse,
    responseDeserialize: deserialize_opendexrpc_AddPairResponse,
  },
  // Bans a node and immediately disconnects from it. This can be used to prevent any connections
// to a specific node.
// shell: xucli ban <node_identifier> 
ban: {
    path: '/opendexrpc.Xud/Ban',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.BanRequest,
    responseType: opendexrpc_pb.BanResponse,
    requestSerialize: serialize_opendexrpc_BanRequest,
    requestDeserialize: deserialize_opendexrpc_BanRequest,
    responseSerialize: serialize_opendexrpc_BanResponse,
    responseDeserialize: deserialize_opendexrpc_BanResponse,
  },
  // Changes the opendex master password, including the wallet passwords for any underlying clients.
// shell: xucli changepass
changePassword: {
    path: '/opendexrpc.Xud/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ChangePasswordRequest,
    responseType: opendexrpc_pb.ChangePasswordResponse,
    requestSerialize: serialize_opendexrpc_ChangePasswordRequest,
    requestDeserialize: deserialize_opendexrpc_ChangePasswordRequest,
    responseSerialize: serialize_opendexrpc_ChangePasswordResponse,
    responseDeserialize: deserialize_opendexrpc_ChangePasswordResponse,
  },
  // Closes any existing payment channels with a peer for the specified currency.
// shell: xucli closechannel <currency> [node_identifier ] [--force]
closeChannel: {
    path: '/opendexrpc.Xud/CloseChannel',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.CloseChannelRequest,
    responseType: opendexrpc_pb.CloseChannelResponse,
    requestSerialize: serialize_opendexrpc_CloseChannelRequest,
    requestDeserialize: deserialize_opendexrpc_CloseChannelRequest,
    responseSerialize: serialize_opendexrpc_CloseChannelResponse,
    responseDeserialize: deserialize_opendexrpc_CloseChannelResponse,
  },
  // Attempts to connect to a node. Once connected, the node is added to the list of peers and
// becomes available for swaps and trading. A handshake exchanges information about the peer's
// supported trading and swap clients. Orders will be shared with the peer upon connection and
// upon new order placements.
// shell: xucli connect <node_uri> 
connect: {
    path: '/opendexrpc.Xud/Connect',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ConnectRequest,
    responseType: opendexrpc_pb.ConnectResponse,
    requestSerialize: serialize_opendexrpc_ConnectRequest,
    requestDeserialize: deserialize_opendexrpc_ConnectRequest,
    responseSerialize: serialize_opendexrpc_ConnectResponse,
    responseDeserialize: deserialize_opendexrpc_ConnectResponse,
  },
  // Gets an address to deposit a given currency into the opendex wallets.
// shell: xucli walletdeposit <currency> 
walletDeposit: {
    path: '/opendexrpc.Xud/WalletDeposit',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.DepositRequest,
    responseType: opendexrpc_pb.DepositResponse,
    requestSerialize: serialize_opendexrpc_DepositRequest,
    requestDeserialize: deserialize_opendexrpc_DepositRequest,
    responseSerialize: serialize_opendexrpc_DepositResponse,
    responseDeserialize: deserialize_opendexrpc_DepositResponse,
  },
  // Gets an address to deposit a given currency directly into a channel.
// shell: xucli deposit <currency> 
deposit: {
    path: '/opendexrpc.Xud/Deposit',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.DepositRequest,
    responseType: opendexrpc_pb.DepositResponse,
    requestSerialize: serialize_opendexrpc_DepositRequest,
    requestDeserialize: deserialize_opendexrpc_DepositRequest,
    responseSerialize: serialize_opendexrpc_DepositResponse,
    responseDeserialize: deserialize_opendexrpc_DepositResponse,
  },
  // Discover nodes from a specific peer and apply new connections 
discoverNodes: {
    path: '/opendexrpc.Xud/DiscoverNodes',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.DiscoverNodesRequest,
    responseType: opendexrpc_pb.DiscoverNodesResponse,
    requestSerialize: serialize_opendexrpc_DiscoverNodesRequest,
    requestDeserialize: deserialize_opendexrpc_DiscoverNodesRequest,
    responseSerialize: serialize_opendexrpc_DiscoverNodesResponse,
    responseDeserialize: deserialize_opendexrpc_DiscoverNodesResponse,
  },
  // Gets the total balance available across all payment channels and wallets for one or all currencies.
// shell: xucli getbalance [currency] 
getBalance: {
    path: '/opendexrpc.Xud/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.GetBalanceRequest,
    responseType: opendexrpc_pb.GetBalanceResponse,
    requestSerialize: serialize_opendexrpc_GetBalanceRequest,
    requestDeserialize: deserialize_opendexrpc_GetBalanceRequest,
    responseSerialize: serialize_opendexrpc_GetBalanceResponse,
    responseDeserialize: deserialize_opendexrpc_GetBalanceResponse,
  },
  // Gets general information about this node.
// shell: xucli getinfo 
getInfo: {
    path: '/opendexrpc.Xud/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.GetInfoRequest,
    responseType: opendexrpc_pb.GetInfoResponse,
    requestSerialize: serialize_opendexrpc_GetInfoRequest,
    requestDeserialize: deserialize_opendexrpc_GetInfoRequest,
    responseSerialize: serialize_opendexrpc_GetInfoResponse,
    responseDeserialize: deserialize_opendexrpc_GetInfoResponse,
  },
  // Gets the master seed mnemonic .
// shell: xucli getnemonic 
getMnemonic: {
    path: '/opendexrpc.Xud/GetMnemonic',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.GetMnemonicRequest,
    responseType: opendexrpc_pb.GetMnemonicResponse,
    requestSerialize: serialize_opendexrpc_GetMnemonicRequest,
    requestDeserialize: deserialize_opendexrpc_GetMnemonicRequest,
    responseSerialize: serialize_opendexrpc_GetMnemonicResponse,
    responseDeserialize: deserialize_opendexrpc_GetMnemonicResponse,
  },
  // Gets general information about a node.
// shell: xucli getnodeinfo <node_identifier> 
getNodeInfo: {
    path: '/opendexrpc.Xud/GetNodeInfo',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.GetNodeInfoRequest,
    responseType: opendexrpc_pb.GetNodeInfoResponse,
    requestSerialize: serialize_opendexrpc_GetNodeInfoRequest,
    requestDeserialize: deserialize_opendexrpc_GetNodeInfoRequest,
    responseSerialize: serialize_opendexrpc_GetNodeInfoResponse,
    responseDeserialize: deserialize_opendexrpc_GetNodeInfoResponse,
  },
  // Gets orders from the order book. This call returns the state of the order book at a given point
// in time, although it is not guaranteed to still be vaild by the time a response is received
// and processed by a client. It accepts an optional trading pair id parameter. If specified, only
// orders for that particular trading pair are returned. Otherwise, all orders are returned. Orders
// are separated into buys and sells for each trading pair, but unsorted.
// shell: xucli listorders [pair_id] [include_own_orders] [limit] 
listOrders: {
    path: '/opendexrpc.Xud/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ListOrdersRequest,
    responseType: opendexrpc_pb.ListOrdersResponse,
    requestSerialize: serialize_opendexrpc_ListOrdersRequest,
    requestDeserialize: deserialize_opendexrpc_ListOrdersRequest,
    responseSerialize: serialize_opendexrpc_ListOrdersResponse,
    responseDeserialize: deserialize_opendexrpc_ListOrdersResponse,
  },
  // Gets a list of this node's supported currencies.
// shell: xucli listcurrencies 
listCurrencies: {
    path: '/opendexrpc.Xud/ListCurrencies',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ListCurrenciesRequest,
    responseType: opendexrpc_pb.ListCurrenciesResponse,
    requestSerialize: serialize_opendexrpc_ListCurrenciesRequest,
    requestDeserialize: deserialize_opendexrpc_ListCurrenciesRequest,
    responseSerialize: serialize_opendexrpc_ListCurrenciesResponse,
    responseDeserialize: deserialize_opendexrpc_ListCurrenciesResponse,
  },
  // Gets a list of this nodes suported trading pairs.
// shell: xucli listpairs 
listPairs: {
    path: '/opendexrpc.Xud/ListPairs',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ListPairsRequest,
    responseType: opendexrpc_pb.ListPairsResponse,
    requestSerialize: serialize_opendexrpc_ListPairsRequest,
    requestDeserialize: deserialize_opendexrpc_ListPairsRequest,
    responseSerialize: serialize_opendexrpc_ListPairsResponse,
    responseDeserialize: deserialize_opendexrpc_ListPairsResponse,
  },
  // Gets a list of connected peers.
// shell: xucli listpeers 
listPeers: {
    path: '/opendexrpc.Xud/ListPeers',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ListPeersRequest,
    responseType: opendexrpc_pb.ListPeersResponse,
    requestSerialize: serialize_opendexrpc_ListPeersRequest,
    requestDeserialize: deserialize_opendexrpc_ListPeersRequest,
    responseSerialize: serialize_opendexrpc_ListPeersResponse,
    responseDeserialize: deserialize_opendexrpc_ListPeersResponse,
  },
  // Opens a payment channel to a peer for the specified amount and currency.
// shell: xucli openchannel <currency> <amount> [node_identifier] [push_amount] 
openChannel: {
    path: '/opendexrpc.Xud/OpenChannel',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.OpenChannelRequest,
    responseType: opendexrpc_pb.OpenChannelResponse,
    requestSerialize: serialize_opendexrpc_OpenChannelRequest,
    requestDeserialize: deserialize_opendexrpc_OpenChannelRequest,
    responseSerialize: serialize_opendexrpc_OpenChannelResponse,
    responseDeserialize: deserialize_opendexrpc_OpenChannelResponse,
  },
  // Gets an order book depth chart where orders are grouped into "buckets"
// according to their price rounded to a given level of precision.
// shell: xucli orderbook [pair_id] [precision] 
orderBook: {
    path: '/opendexrpc.Xud/OrderBook',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.OrderBookRequest,
    responseType: opendexrpc_pb.OrderBookResponse,
    requestSerialize: serialize_opendexrpc_OrderBookRequest,
    requestDeserialize: deserialize_opendexrpc_OrderBookRequest,
    responseSerialize: serialize_opendexrpc_OrderBookResponse,
    responseDeserialize: deserialize_opendexrpc_OrderBookResponse,
  },
  // Adds an order to the order book.
// If price is zero or unspecified a market order will get added. 
placeOrder: {
    path: '/opendexrpc.Xud/PlaceOrder',
    requestStream: false,
    responseStream: true,
    requestType: opendexrpc_pb.PlaceOrderRequest,
    responseType: opendexrpc_pb.PlaceOrderEvent,
    requestSerialize: serialize_opendexrpc_PlaceOrderRequest,
    requestDeserialize: deserialize_opendexrpc_PlaceOrderRequest,
    responseSerialize: serialize_opendexrpc_PlaceOrderEvent,
    responseDeserialize: deserialize_opendexrpc_PlaceOrderEvent,
  },
  // The synchronous, non-streaming version of PlaceOrder.
// shell: xucli buy <quantity> <pair_id> <price> [order_id] [stream]
// shell: xucli sell <quantity> <pair_id> <price> [order_id] [stream] 
placeOrderSync: {
    path: '/opendexrpc.Xud/PlaceOrderSync',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.PlaceOrderRequest,
    responseType: opendexrpc_pb.PlaceOrderResponse,
    requestSerialize: serialize_opendexrpc_PlaceOrderRequest,
    requestDeserialize: deserialize_opendexrpc_PlaceOrderRequest,
    responseSerialize: serialize_opendexrpc_PlaceOrderResponse,
    responseDeserialize: deserialize_opendexrpc_PlaceOrderResponse,
  },
  // Executes a swap on a maker peer order. 
executeSwap: {
    path: '/opendexrpc.Xud/ExecuteSwap',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ExecuteSwapRequest,
    responseType: opendexrpc_pb.SwapSuccess,
    requestSerialize: serialize_opendexrpc_ExecuteSwapRequest,
    requestDeserialize: deserialize_opendexrpc_ExecuteSwapRequest,
    responseSerialize: serialize_opendexrpc_SwapSuccess,
    responseDeserialize: deserialize_opendexrpc_SwapSuccess,
  },
  // Removes a currency from the list of supported currencies. Only currencies that are not in use
// for any currently supported trading pairs may be removed. Once removed, the currency can no
// longer be used for any supported trading pairs.
// shell: xucli removecurrency <currency> 
removeCurrency: {
    path: '/opendexrpc.Xud/RemoveCurrency',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.RemoveCurrencyRequest,
    responseType: opendexrpc_pb.RemoveCurrencyResponse,
    requestSerialize: serialize_opendexrpc_RemoveCurrencyRequest,
    requestDeserialize: deserialize_opendexrpc_RemoveCurrencyRequest,
    responseSerialize: serialize_opendexrpc_RemoveCurrencyResponse,
    responseDeserialize: deserialize_opendexrpc_RemoveCurrencyResponse,
  },
  // Removes an order from the order book by its local id. This should be called when an order is
// canceled or filled outside of opendex. Removed orders become immediately unavailable for swaps,
// and peers are notified that the order is no longer valid. Any portion of the order that is
// on hold due to ongoing swaps will not be removed until after the swap attempts complete.
// shell: xucli removeorder <order_id> [quantity] 
removeOrder: {
    path: '/opendexrpc.Xud/RemoveOrder',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.RemoveOrderRequest,
    responseType: opendexrpc_pb.RemoveOrderResponse,
    requestSerialize: serialize_opendexrpc_RemoveOrderRequest,
    requestDeserialize: deserialize_opendexrpc_RemoveOrderRequest,
    responseSerialize: serialize_opendexrpc_RemoveOrderResponse,
    responseDeserialize: deserialize_opendexrpc_RemoveOrderResponse,
  },
  // Removes all orders from the order book. Removed orders become immediately unavailable for swaps,
// and peers are notified that the orders are no longer valid. Any portion of the orders that is
// on hold due to ongoing swaps will not be removed until after the swap attempts complete.
// shell: xucli removeallorders 
removeAllOrders: {
    path: '/opendexrpc.Xud/RemoveAllOrders',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.RemoveAllOrdersRequest,
    responseType: opendexrpc_pb.RemoveAllOrdersResponse,
    requestSerialize: serialize_opendexrpc_RemoveAllOrdersRequest,
    requestDeserialize: deserialize_opendexrpc_RemoveAllOrdersRequest,
    responseSerialize: serialize_opendexrpc_RemoveAllOrdersResponse,
    responseDeserialize: deserialize_opendexrpc_RemoveAllOrdersResponse,
  },
  // Removes a trading pair from the list of currently supported trading pair. This call will
// effectively cancel any standing orders for that trading pair. Peers are informed when a pair
// is no longer supported so that they will know to stop sending orders for it.
// shell: xucli removepair <pair_id> 
removePair: {
    path: '/opendexrpc.Xud/RemovePair',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.RemovePairRequest,
    responseType: opendexrpc_pb.RemovePairResponse,
    requestSerialize: serialize_opendexrpc_RemovePairRequest,
    requestDeserialize: deserialize_opendexrpc_RemovePairRequest,
    responseSerialize: serialize_opendexrpc_RemovePairResponse,
    responseDeserialize: deserialize_opendexrpc_RemovePairResponse,
  },
  // Set the logging level.
// shell: xucli loglevel <level> 
setLogLevel: {
    path: '/opendexrpc.Xud/SetLogLevel',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.SetLogLevelRequest,
    responseType: opendexrpc_pb.SetLogLevelResponse,
    requestSerialize: serialize_opendexrpc_SetLogLevelRequest,
    requestDeserialize: deserialize_opendexrpc_SetLogLevelRequest,
    responseSerialize: serialize_opendexrpc_SetLogLevelResponse,
    responseDeserialize: deserialize_opendexrpc_SetLogLevelResponse,
  },
  // Begin gracefully shutting down opendex.
// shell: xucli shutdown 
shutdown: {
    path: '/opendexrpc.Xud/Shutdown',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.ShutdownRequest,
    responseType: opendexrpc_pb.ShutdownResponse,
    requestSerialize: serialize_opendexrpc_ShutdownRequest,
    requestDeserialize: deserialize_opendexrpc_ShutdownRequest,
    responseSerialize: serialize_opendexrpc_ShutdownResponse,
    responseDeserialize: deserialize_opendexrpc_ShutdownResponse,
  },
  // Subscribes to orders being added to and removed from the order book. This call allows the client
// to maintain an up-to-date view of the order book. For example, an exchange that wants to show
// its users a real time view of the orders available to them would subscribe to this streaming
// call to be alerted as new orders are added and expired orders are removed. 
subscribeOrders: {
    path: '/opendexrpc.Xud/SubscribeOrders',
    requestStream: false,
    responseStream: true,
    requestType: opendexrpc_pb.SubscribeOrdersRequest,
    responseType: opendexrpc_pb.OrderUpdate,
    requestSerialize: serialize_opendexrpc_SubscribeOrdersRequest,
    requestDeserialize: deserialize_opendexrpc_SubscribeOrdersRequest,
    responseSerialize: serialize_opendexrpc_OrderUpdate,
    responseDeserialize: deserialize_opendexrpc_OrderUpdate,
  },
  // Subscribes to failed swaps. By default, only swaps that are initiated by a remote peer are
// transmitted unless a flag is set to include swaps initiated by the local node. This call allows
// the client to get real-time notifications when swap attempts are failing. It can be used for
// status monitoring, debugging, and testing purposes. 
subscribeSwapFailures: {
    path: '/opendexrpc.Xud/SubscribeSwapFailures',
    requestStream: false,
    responseStream: true,
    requestType: opendexrpc_pb.SubscribeSwapsRequest,
    responseType: opendexrpc_pb.SwapFailure,
    requestSerialize: serialize_opendexrpc_SubscribeSwapsRequest,
    requestDeserialize: deserialize_opendexrpc_SubscribeSwapsRequest,
    responseSerialize: serialize_opendexrpc_SwapFailure,
    responseDeserialize: deserialize_opendexrpc_SwapFailure,
  },
  // Subscribes to completed swaps. By default, only swaps that are initiated by a remote peer are
// transmitted unless a flag is set to include swaps initiated by the local node. This call allows
// the client to get real-time notifications when its orders are filled by a peer. It can be used
// for tracking order executions, updating balances, and informing a trader when one of their orders
// is settled through the Exchange Union network. 
subscribeSwaps: {
    path: '/opendexrpc.Xud/SubscribeSwaps',
    requestStream: false,
    responseStream: true,
    requestType: opendexrpc_pb.SubscribeSwapsRequest,
    responseType: opendexrpc_pb.SwapSuccess,
    requestSerialize: serialize_opendexrpc_SubscribeSwapsRequest,
    requestDeserialize: deserialize_opendexrpc_SubscribeSwapsRequest,
    responseSerialize: serialize_opendexrpc_SwapSuccess,
    responseDeserialize: deserialize_opendexrpc_SwapSuccess,
  },
  // Subscribes to accepted swaps. This stream emits a message when the local opendex node 
// accepts a swap request from a peer, but before the swap has actually succeeded. 
subscribeSwapsAccepted: {
    path: '/opendexrpc.Xud/SubscribeSwapsAccepted',
    requestStream: false,
    responseStream: true,
    requestType: opendexrpc_pb.SubscribeSwapsAcceptedRequest,
    responseType: opendexrpc_pb.SwapAccepted,
    requestSerialize: serialize_opendexrpc_SubscribeSwapsAcceptedRequest,
    requestDeserialize: deserialize_opendexrpc_SubscribeSwapsAcceptedRequest,
    responseSerialize: serialize_opendexrpc_SwapAccepted,
    responseDeserialize: deserialize_opendexrpc_SwapAccepted,
  },
  // Gets a list of completed trades.
// shell: xucli tradehistory [limit] 
tradeHistory: {
    path: '/opendexrpc.Xud/TradeHistory',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.TradeHistoryRequest,
    responseType: opendexrpc_pb.TradeHistoryResponse,
    requestSerialize: serialize_opendexrpc_TradeHistoryRequest,
    requestDeserialize: deserialize_opendexrpc_TradeHistoryRequest,
    responseSerialize: serialize_opendexrpc_TradeHistoryResponse,
    responseDeserialize: deserialize_opendexrpc_TradeHistoryResponse,
  },
  // Gets the trading limits for one or all currencies.
// shell: xucli tradinglimits [currency] 
tradingLimits: {
    path: '/opendexrpc.Xud/TradingLimits',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.TradingLimitsRequest,
    responseType: opendexrpc_pb.TradingLimitsResponse,
    requestSerialize: serialize_opendexrpc_TradingLimitsRequest,
    requestDeserialize: deserialize_opendexrpc_TradingLimitsRequest,
    responseSerialize: serialize_opendexrpc_TradingLimitsResponse,
    responseDeserialize: deserialize_opendexrpc_TradingLimitsResponse,
  },
  // Removes a ban from a node manually and, optionally, attempts to connect to it.
// shell: xucli unban <node_identifier> [reconnect] 
unban: {
    path: '/opendexrpc.Xud/Unban',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.UnbanRequest,
    responseType: opendexrpc_pb.UnbanResponse,
    requestSerialize: serialize_opendexrpc_UnbanRequest,
    requestDeserialize: deserialize_opendexrpc_UnbanRequest,
    responseSerialize: serialize_opendexrpc_UnbanResponse,
    responseDeserialize: deserialize_opendexrpc_UnbanResponse,
  },
  // Withdraws a given currency from the opendex wallets to a specified address.
// shell: xucli withdraw [amount] [currency] <destination> [fee] 
walletWithdraw: {
    path: '/opendexrpc.Xud/WalletWithdraw',
    requestStream: false,
    responseStream: false,
    requestType: opendexrpc_pb.WithdrawRequest,
    responseType: opendexrpc_pb.WithdrawResponse,
    requestSerialize: serialize_opendexrpc_WithdrawRequest,
    requestDeserialize: deserialize_opendexrpc_WithdrawRequest,
    responseSerialize: serialize_opendexrpc_WithdrawResponse,
    responseDeserialize: deserialize_opendexrpc_WithdrawResponse,
  },
};


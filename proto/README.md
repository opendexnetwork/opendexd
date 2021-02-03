# OpenDEX Protocol Buffers

`opendexd` uses [Protocol Buffers](https://developers.google.com/protocol-buffers/) to define its [gRPC](https://grpc.io/) API service layer. This definition can be used to generate `opendexd` clients in many popular programming languages.

## Updating the OpenDEX Proto Defintion

Whenever `opendexdrpc.proto` is updated, the protobuf javascript code and type definitions must be regenerated.

- install [protoc-gen-swagger](https://github.com/grpc-ecosystem/grpc-gateway) at v1.8.6.

```bash
git clone https://github.com/grpc-ecosystem/grpc-gateway $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway
cd $GOPATH/src/github.com/grpc-ecosystem/grpc-gateway
git reset --hard v1.8.6
go install ./protoc-gen-swagger
```

- install latest [protoc-gen-doc](https://github.com/pseudomuto/protoc-gen-doc):

```bash
go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
```

- install `genproto` at commit a8101f21cf983e773d0c1133ebc5424792003214.

```bash
go get google.golang.org/genproto/...
cd $GOPATH/src/google.golang.org/genproto
git reset --hard a8101f21cf983e773d0c1133ebc5424792003214
```

- change `golang/protobuf` to v1.3.1

```bash
cd $GOPATH/src/github.com/golang/protobuf
git reset --hard v1.3.1
make
```

- run `npm run proto`.

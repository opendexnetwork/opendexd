# OpenDEX daemon

[![Discord](https://img.shields.io/discord/628640072748761118.svg)](https://discord.gg/RnXFHpn)
[![CI Status](https://github.com/opendexnetwork/opendexd/workflows/CI/badge.svg)](https://github.com/opendexnetwork/opendexd/actions?query=workflow%3ACI)
[![SimTest Status](https://github.com/opendexnetwork/opendexd/workflows/Simulation%20tests/badge.svg)](https://github.com/opendexnetwork/opendexd/actions?query=workflow%3A%22Simulation+tests%22)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)


![OpenDEX logo](logo.png)

The OpenDEX Daemon ([`opendexd`](https://github.com/opendexnetwork/opendexd)) is the reference implementation powering [OpenDEX](https://opendex.network), a decentralized exchange built on top of the [Lightning](https://lightning.network/) and [Connext](https://connext.network/) networks. `opendexd` brings individual traders, market makers and exchanges onto OpenDEX to form a single global trading network and liquidity pool.

Get started 👉 [here](https://opendex.network/docs/start-earning/market-maker-guide) 👈

## OpenDEX Network Specification Compliance
`opendexd` implements the [OpenDEX protocol](https://opendex.network) and fully conforms to its so-called [BOLD](https://opendex.network/read/00-introduction) specifications. BOLD stands for:
Basis of L3 DEX. The naming is intentionally derived from [BOLT](https://github.com/lightningnetwork/lightning-rfc), the Lightning Network specifications and role model of OpenDEX. The specifications are currently being drafted by several implementers based around the world, including the developers of `opendexd`. The BOLDs, as well as `opendexd`s implementation of it is still a work-in-progress. The current status of `opendexd`'s BOLD compliance is:
  - [X] [BOLD #1: Message Format](https://opendex.network/read/01-message-format)
  - [X] [BOLD #2: Peer Protocol](https://opendex.network/read/02-peer-protocol)
  - [X] [BOLD #3: Trade Protocol](https://opendex.network/read/03-trade-protocol)
  - [X] [BOLD #4: Swap Protocol](https://opendex.network/read/04-swap-protocol)

`opendexd` encompasses the following components:

* Integration with [lnd](https://github.com/lightningnetwork/lnd) and [connext](https://github.com/connext/rest-api-client) clients.
* Decentralized order book to locally aggregate orders from the known network.
* Matching engine to match new local orders with existing local and remote orders and initiate atomic swaps with remote peers.
* Peer-to-peer networking with and discovery of other nodes.
* [gRPC API](https://grpc.io/) with web proxy to serve other applications, also accessible via the command-line interface `opendex-cli`.

## Documentation

The daemon has been designed to be as developer friendly as possible in order to facilitate application development on top of `opendexd`.
* [opendex.network/docs](https://opendex.network/docs): the starting point and up-to-date collection of guides, links and examples
* [api.opendex.network](https://api.opendex.network): The automatically generated gRPC API documentation
* [typedoc.opendex.network](https://typedoc.opendex.network): The automatically generated code documentation

## Installation

This section contains brief instructions for installing `opendexd` manually, without treating setup of dependencies like `bitcoind` or `lnd`. It is mainly geared towards developers. For all other users, we recommend our streamlined [opendex-docker](https://opendex.network/docs/start-earning/market-maker-guide) setup.

## Prerequisites
- [rsync >=3.1.3](https://rsync.samba.org/)
- [Node.js >=14.15.4](https://nodejs.org/en/download/)
- [go >=1.13](https://golang.org/)

## Install dependencies
```bash
npm i
```

## Build
```bash
npm run compile
npm run compile:seedutil
```

## Start in development mode
```bash
npm run dev
```

Open a new terminal and issue commands to `opendexd` with the `opendex-cli` command line tool. To see a list of available commands, run:

```
./bin/opendex-cli --help
```

## Tests
```bash
npm run test
npm run test:sim
```

## License

All files in this repository are licensed under the [GNU Affero General Public License v3.0](LICENSE) unless explicitly stated otherwise in the header of a given file.

## Discussion

Comments, questions, and any development-related discussions are welcome in our [Discord chat](https://discord.gg/RnXFHpn)!

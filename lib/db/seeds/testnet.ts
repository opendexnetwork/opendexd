import * as db from '../types';
import { SwapClientType } from '../../constants/enums';

const nodes = [
  {
    nodePubKey: '025a29c5fee7e3c692faff1d65090d835c0d73b13da5606fb486da61f19edb3171',
    addresses: [{ host: 'testnet.boltz.exchange', port: 18885 }],
  },
] as db.NodeAttributes[];

const currencies = [
  { id: 'BTC', swapClient: SwapClientType.Lnd, decimalPlaces: 8 },
  { id: 'LTC', swapClient: SwapClientType.Lnd, decimalPlaces: 8 },
  {
    id: 'ETH',
    swapClient: SwapClientType.Connext,
    decimalPlaces: 18,
    tokenAddress: '0x0000000000000000000000000000000000000000',
  },
] as db.CurrencyAttributes[];

const pairs = [
  { baseCurrency: 'LTC', quoteCurrency: 'BTC' },
  { baseCurrency: 'ETH', quoteCurrency: 'BTC' },
] as db.PairAttributes[];

export { nodes, currencies, pairs };

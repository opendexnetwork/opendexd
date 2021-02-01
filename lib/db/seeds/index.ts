import { nodes as mainnetNodes, currencies as mainnetCurrencies, pairs as mainnetPairs } from './mainnet';
import { nodes as testnetNodes, currencies as testnetCurrencies, pairs as testnetPairs } from './testnet';
import { nodes as simnetNodes, currencies as simnetCurrencies, pairs as simnetPairs } from './simnet';
import * as db from '../types';
import { OpenDEXnetwork } from '../../constants/enums';

const nodes: { [network: string]: db.NodeAttributes[] | undefined } = {
  [OpenDEXnetwork.MainNet]: mainnetNodes,
  [OpenDEXnetwork.TestNet]: testnetNodes,
  [OpenDEXnetwork.SimNet]: simnetNodes,
};

const currencies: { [network: string]: db.CurrencyAttributes[] | undefined } = {
  [OpenDEXnetwork.MainNet]: mainnetCurrencies,
  [OpenDEXnetwork.TestNet]: testnetCurrencies,
  [OpenDEXnetwork.SimNet]: simnetCurrencies,
};

const pairs: { [network: string]: db.PairAttributes[] | undefined } = {
  [OpenDEXnetwork.MainNet]: mainnetPairs,
  [OpenDEXnetwork.TestNet]: testnetPairs,
  [OpenDEXnetwork.SimNet]: simnetPairs,
};

const defaultNodes = (xuNetwork: OpenDEXnetwork): db.NodeAttributes[] | undefined => nodes[xuNetwork];
const defaultCurrencies = (xuNetwork: OpenDEXnetwork): db.CurrencyAttributes[] | undefined => currencies[xuNetwork];
const defaultPairs = (xuNetwork: OpenDEXnetwork): db.PairAttributes[] | undefined => pairs[xuNetwork];

export { defaultNodes, defaultCurrencies, defaultPairs };

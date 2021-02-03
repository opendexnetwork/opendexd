import { OpenDEXnetwork, xuNetworkMagicVals } from '../constants/enums';

class Network {
  public magic: number;

  constructor(public openDEXnetwork: OpenDEXnetwork) {
    this.magic = xuNetworkMagicVals[openDEXnetwork];
  }
}

export default Network;

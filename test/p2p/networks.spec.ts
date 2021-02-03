import chai, { expect } from 'chai';
import Xud from '../../lib/OpenDEX';
import chaiAsPromised from 'chai-as-promised';
import { toUri } from '../../lib/utils/uriUtils';
import { OpenDEXnetwork } from '../../lib/constants/enums';
import { createConfig } from './sanity.spec';

chai.use(chaiAsPromised);

describe('P2P Networks Tests', () => {
  function testConnectionFailure(srcNodeNetwork: OpenDEXnetwork, destNodeNetwork: OpenDEXnetwork) {
    it(`should fail to connect a node from ${srcNodeNetwork} to a node from ${destNodeNetwork}`, async () => {
      const srcNodeConfig = createConfig(1, 0, false, srcNodeNetwork);
      const destNodeConfig = createConfig(2, 0, false, destNodeNetwork);
      const srcNode = new Xud();
      const destNode = new Xud();
      await Promise.all([srcNode.start(srcNodeConfig), destNode.start(destNodeConfig)]);

      const host = 'localhost';
      const port = destNode['pool']['listenPort']!;
      const { nodePubKey } = destNode['pool'];
      const nodeTwoUri = toUri({ host, port, nodePubKey });

      const rejectionMsg = `Peer ${nodePubKey}@${host}:${port} closed due to WireProtocolErr framer: incompatible msg origin network (expected: ${srcNodeNetwork}, found: ${destNodeNetwork})`;
      await expect(srcNode.service.connect({ nodeUri: nodeTwoUri, retryConnecting: false })).to.be.rejectedWith(
        rejectionMsg,
      );

      expect(await srcNode.service.listPeers().length).to.equal(0);
      expect(await destNode.service.listPeers().length).to.equal(0);

      await Promise.all([srcNode['shutdown'](), destNode['shutdown']()]);
    });
  }

  function testConnectionSuccess(srcNodeNetwork: OpenDEXnetwork, destNodeNetwork: OpenDEXnetwork) {
    it(`should successfully connect a node from ${srcNodeNetwork} to a node from ${destNodeNetwork}`, async () => {
      const srcNodeConfig = createConfig(1, 0, false, srcNodeNetwork);
      const destNodeConfig = createConfig(2, 0, false, destNodeNetwork);
      const srcNode = new Xud();
      const destNode = new Xud();
      await Promise.all([srcNode.start(srcNodeConfig), destNode.start(destNodeConfig)]);
      const srcNodePubKey = srcNode['pool'].nodePubKey;
      const destNodePubKey = destNode['pool'].nodePubKey;

      const host = 'localhost';
      const port = destNode['pool']['listenPort']!;
      const nodeTwoUri = toUri({ host, port, nodePubKey: destNodePubKey });

      await expect(srcNode.service.connect({ nodeUri: nodeTwoUri, retryConnecting: false })).to.be.fulfilled;

      const peers = srcNode.service.listPeers();
      expect(peers.length).to.equal(1);
      expect(peers[0].nodePubKey).to.equal(destNodePubKey);

      const verifyDestNodePeers = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const peers = destNode.service.listPeers();
            expect(peers.length).to.equal(1);
            expect(peers[0].nodePubKey).to.equal(srcNodePubKey);
            resolve();
          }, 100);
        });
      await verifyDestNodePeers();

      await Promise.all([srcNode['shutdown'](), destNode['shutdown']()]);
    });
  }

  testConnectionFailure(OpenDEXnetwork.MainNet, OpenDEXnetwork.SimNet);
  testConnectionFailure(OpenDEXnetwork.MainNet, OpenDEXnetwork.TestNet);
  testConnectionFailure(OpenDEXnetwork.MainNet, OpenDEXnetwork.RegTest);
  testConnectionFailure(OpenDEXnetwork.TestNet, OpenDEXnetwork.MainNet);
  testConnectionFailure(OpenDEXnetwork.TestNet, OpenDEXnetwork.SimNet);
  testConnectionFailure(OpenDEXnetwork.TestNet, OpenDEXnetwork.RegTest);
  testConnectionFailure(OpenDEXnetwork.SimNet, OpenDEXnetwork.MainNet);
  testConnectionFailure(OpenDEXnetwork.SimNet, OpenDEXnetwork.TestNet);
  testConnectionFailure(OpenDEXnetwork.SimNet, OpenDEXnetwork.RegTest);
  testConnectionFailure(OpenDEXnetwork.RegTest, OpenDEXnetwork.MainNet);
  testConnectionFailure(OpenDEXnetwork.RegTest, OpenDEXnetwork.TestNet);
  testConnectionFailure(OpenDEXnetwork.RegTest, OpenDEXnetwork.SimNet);

  testConnectionSuccess(OpenDEXnetwork.SimNet, OpenDEXnetwork.SimNet);
  testConnectionSuccess(OpenDEXnetwork.TestNet, OpenDEXnetwork.TestNet);
  testConnectionSuccess(OpenDEXnetwork.SimNet, OpenDEXnetwork.SimNet);
  testConnectionSuccess(OpenDEXnetwork.RegTest, OpenDEXnetwork.RegTest);
});

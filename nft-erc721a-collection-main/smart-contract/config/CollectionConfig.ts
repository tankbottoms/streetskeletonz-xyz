import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'NFTPangoPuPs',
  tokenName: 'NFT PangoPuPs',
  tokenSymbol: '2DPuPs',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupplyPresale: 3508,
  maxSupply: 4508,
  whitelistSale: {
    price: 0.3,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.5,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.5,
    maxMintAmountPerTx: 25,
  },
  contractAddress: '0x2C0a4E59CDaE6e7FF4A0141A5a34F898E9473Cc1',
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
  payeeAddresses:['0xDcABf4Fb1D7594eaCB014d48e3674857f806f4b2','0xfBe3891acdb9A799C023926d489C06492fF1Ea53','0xfBe3891acdb9A799C023926d489C06492fF1Ea53'],
  payeeShares:[50,25,25]
};

export default CollectionConfig;

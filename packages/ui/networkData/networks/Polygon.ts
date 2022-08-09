import { SupportedChains } from '@midas-capital/types';

import { config } from '@ui/config/index';
import { ChainMetadata } from '@ui/types/ChainMetaData';

const mainnet: ChainMetadata = {
  chainId: SupportedChains.polygon,
  chainIdHex: '0x89',
  name: 'Polygon Mainnet',
  shortName: 'Polygon',
  img: 'https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg',
  enabled: config.isPolygonEnabled,
  supported: config.isPolygonEnabled,
  blocksPerMin: 26,
  blockExplorerUrls: { default: { name: 'polygonscan', url: 'https://polygonscan.com' } },
  rpcUrls: { default: 'https://rpc-mainnet.maticvigil.com/' },
  nativeCurrency: {
    symbol: 'MATIC',
    name: 'MATIC',
  },
  wrappedNativeCurrency: {
    symbol: 'WMATIC',
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    name: 'WMATIC',
    decimals: 18,
    color: '#627EEA',
    overlayTextColor: '#fff',
    logoURL: 'https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg',
    coingeckoId: 'matic-network',
  },
};

const chain = { mainnet };

export default chain;

import { linea, mode, neon, zkevm } from '@ionicprotocol/chains';

import { pythConfig as lineaPythConfig } from './linea';
import { pythConfig as neonPythConfig } from './neon';
import { pythConfig as zkevmPythConfig } from './zkevm';
import { pythConfig as modePythConfig } from './mode';

export const chainIdToConfig = {
  [neon.chainId]: neonPythConfig,
  [linea.chainId]: lineaPythConfig,
  [zkevm.chainId]: zkevmPythConfig,
  [mode.chainId]: modePythConfig,
};

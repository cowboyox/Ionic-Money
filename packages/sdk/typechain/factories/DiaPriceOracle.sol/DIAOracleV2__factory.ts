/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DIAOracleV2,
  DIAOracleV2Interface,
} from "../../DiaPriceOracle.sol/DIAOracleV2";

const _abi = [
  {
    type: "function",
    name: "getValue",
    inputs: [
      {
        name: "key",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class DIAOracleV2__factory {
  static readonly abi = _abi;
  static createInterface(): DIAOracleV2Interface {
    return new utils.Interface(_abi) as DIAOracleV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DIAOracleV2 {
    return new Contract(address, _abi, signerOrProvider) as DIAOracleV2;
  }
}

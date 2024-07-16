/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILeveredPositionFactorySecondExtension,
  ILeveredPositionFactorySecondExtensionInterface,
} from "../../ILeveredPositionFactory.sol/ILeveredPositionFactorySecondExtension";

const _abi = [
  {
    type: "function",
    name: "createAndFundPosition",
    inputs: [
      {
        name: "_collateralMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
      {
        name: "_stableMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
      {
        name: "_fundingAsset",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "_fundingAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract LeveredPosition",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createAndFundPositionAtRatio",
    inputs: [
      {
        name: "_collateralMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
      {
        name: "_stableMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
      {
        name: "_fundingAsset",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "_fundingAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_leverageRatio",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract LeveredPosition",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createPosition",
    inputs: [
      {
        name: "_collateralMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
      {
        name: "_stableMarket",
        type: "address",
        internalType: "contract ICErc20",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract LeveredPosition",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class ILeveredPositionFactorySecondExtension__factory {
  static readonly abi = _abi;
  static createInterface(): ILeveredPositionFactorySecondExtensionInterface {
    return new utils.Interface(
      _abi
    ) as ILeveredPositionFactorySecondExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILeveredPositionFactorySecondExtension {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILeveredPositionFactorySecondExtension;
  }
}

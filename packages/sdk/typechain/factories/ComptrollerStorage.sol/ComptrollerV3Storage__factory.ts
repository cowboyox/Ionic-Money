/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV3Storage,
  ComptrollerV3StorageInterface,
} from "../../ComptrollerStorage.sol/ComptrollerV3Storage";

const _abi = [
  {
    type: "function",
    name: "_borrowGuardianPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_mintGuardianPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "accountAssets",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ICErc20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "adminHasRights",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allBorrowers",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allMarkets",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ICErc20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowCapForCollateral",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowCapGuardian",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowCaps",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowGuardianPaused",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrowingAgainstCollateralBlacklist",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "cTokensByUnderlying",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ICErc20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "closeFactorMantissa",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enforceWhitelist",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ionicAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address payable",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ionicAdminHasRights",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidationIncentiveMantissa",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "markets",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isListed",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "collateralFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mintGuardianPaused",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonAccruingRewardsDistributors",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "oracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract BasePriceOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauseGuardian",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingAdmin",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "rewardsDistributors",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "seizeGuardianPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "suppliers",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supplyCaps",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferGuardianPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "whitelist",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "whitelistArray",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x60806040526002805461ffff60a01b191661010160a01b17905534801561002557600080fd5b50610695806100356000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637515bafa1161010f578063c6c5b0dd116100a2578063dce1544911610071578063dce15449146104ef578063e6653f3d14610502578063e875544614610516578063f851a4401461051f57600080fd5b8063c6c5b0dd146104a2578063c91a424f146104b5578063cf6bfd2d146104c8578063d251fefc146104dc57600080fd5b8063940cd6f1116100de578063940cd6f1146104335780639b19251a1461045e578063ac0b0bb714610481578063b09572101461049557600080fd5b80637515bafa146103b55780637dc0d1d0146103c857806387f76303146103db5780638e8f294b146103ef57600080fd5b806331ff47fa1161018757806352d84d1e1161015657806352d84d1e146103495780636bd02b8a1461035c5780636d154ea51461036f578063731f0c2b1461039257600080fd5b806331ff47fa146102e35780633c94786f1461030c5780634a584432146103205780634ada90af1461034057600080fd5b80631c819e43116101c35780631c819e431461026457806321af45691461029257806324a3d622146102bd57806326782247146102d057600080fd5b806302c3bcbb146101ea5780630a755ec21461021d57806316dc15fe14610241575b600080fd5b61020a6101f83660046105f0565b60186020526000908152604090205481565b6040519081526020015b60405180910390f35b60025461023190600160a81b900460ff1681565b6040519015158152602001610214565b61023161024f3660046105f0565b600d6020526000908152604090205460ff1681565b610231610272366004610612565b601d60209081526000928352604080842090915290825290205460ff1681565b6016546102a5906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b6013546102a5906001600160a01b031681565b6002546102a5906001600160a01b031681565b6102a56102f13660046105f0565b600e602052600090815260409020546001600160a01b031681565b60135461023190600160a01b900460ff1681565b61020a61032e3660046105f0565b60176020526000908152604090205481565b61020a60055481565b6102a5610357366004610645565b610532565b6102a561036a366004610645565b61055c565b61023161037d3660046105f0565b60156020526000908152604090205460ff1681565b6102316103a03660046105f0565b60146020526000908152604090205460ff1681565b6102a56103c3366004610645565b61056c565b6003546102a5906001600160a01b031681565b60135461023190600160b01b900460ff1681565b61041c6103fd3660046105f0565b6008602052600090815260409020805460019091015460ff9091169082565b604080519215158352602083019190915201610214565b61020a610441366004610612565b601c60209081526000928352604080842090915290825290205481565b61023161046c3660046105f0565b60106020526000908152604090205460ff1681565b60135461023190600160b81b900460ff1681565b600f546102319060ff1681565b6102a56104b0366004610645565b61057c565b6000546102a5906001600160a01b031681565b60025461023190600160a01b900460ff1681565b6102a56104ea366004610645565b61058c565b6102a56104fd36600461065e565b61059c565b60135461023190600160a81b900460ff1681565b61020a60045481565b6001546102a5906001600160a01b031681565b6009818154811061054257600080fd5b6000918252602090912001546001600160a01b0316905081565b601b818154811061054257600080fd5b600b818154811061054257600080fd5b6019818154811061054257600080fd5b6011818154811061054257600080fd5b600760205281600052604060002081815481106105b857600080fd5b6000918252602090912001546001600160a01b03169150829050565b80356001600160a01b03811681146105eb57600080fd5b919050565b60006020828403121561060257600080fd5b61060b826105d4565b9392505050565b6000806040838503121561062557600080fd5b61062e836105d4565b915061063c602084016105d4565b90509250929050565b60006020828403121561065757600080fd5b5035919050565b6000806040838503121561067157600080fd5b61067a836105d4565b94602093909301359350505056fea164736f6c634300080a000a";

type ComptrollerV3StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV3StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV3Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV3StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ComptrollerV3Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV3Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ComptrollerV3Storage {
    return super.attach(address) as ComptrollerV3Storage;
  }
  override connect(signer: Signer): ComptrollerV3Storage__factory {
    return super.connect(signer) as ComptrollerV3Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV3StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV3StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV3Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV3Storage;
  }
}

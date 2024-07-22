/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YearnYVaultV1Liquidator,
  YearnYVaultV1LiquidatorInterface,
} from "../YearnYVaultV1Liquidator";

const _abi = [
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "redeem",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "inputAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "strategyData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "outputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "outputAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610388806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610083575b600080fd5b604080518082018252601781527f596561726e595661756c7456314c697175696461746f720000000000000000006020820152905161007a91906101ee565b60405180910390f35b610096610091366004610271565b6100b5565b604080516001600160a01b03909316835260208301919091520161007a565b604051632e1a7d4d60e01b815260048101839052600090819085906001600160a01b03821690632e1a7d4d90602401600060405180830381600087803b1580156100fe57600080fd5b505af1158015610112573d6000803e3d6000fd5b50505050806001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610154573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610178919061033e565b6040516370a0823160e01b81523060048201529093506001600160a01b038416906370a0823190602401602060405180830381865afa1580156101bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e39190610362565b915050935093915050565b600060208083528351808285015260005b8181101561021b578581018301518582016040015282016101ff565b8181111561022d576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b038116811461025857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561028657600080fd5b833561029181610243565b925060208401359150604084013567ffffffffffffffff808211156102b557600080fd5b818601915086601f8301126102c957600080fd5b8135818111156102db576102db61025b565b604051601f8201601f19908116603f011681019083821181831017156103035761030361025b565b8160405282815289602084870101111561031c57600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b60006020828403121561035057600080fd5b815161035b81610243565b9392505050565b60006020828403121561037457600080fd5b505191905056fea164736f6c634300080a000a";

type YearnYVaultV1LiquidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnYVaultV1LiquidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnYVaultV1Liquidator__factory extends ContractFactory {
  constructor(...args: YearnYVaultV1LiquidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<YearnYVaultV1Liquidator> {
    return super.deploy(overrides || {}) as Promise<YearnYVaultV1Liquidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): YearnYVaultV1Liquidator {
    return super.attach(address) as YearnYVaultV1Liquidator;
  }
  override connect(signer: Signer): YearnYVaultV1Liquidator__factory {
    return super.connect(signer) as YearnYVaultV1Liquidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnYVaultV1LiquidatorInterface {
    return new utils.Interface(_abi) as YearnYVaultV1LiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnYVaultV1Liquidator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as YearnYVaultV1Liquidator;
  }
}

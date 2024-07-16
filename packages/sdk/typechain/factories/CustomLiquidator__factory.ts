/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CustomLiquidator,
  CustomLiquidatorInterface,
} from "../CustomLiquidator";

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
  "0x608060405234801561001057600080fd5b5061062e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610076575b600080fd5b604080518082018252601081526f21bab9ba37b6a634b8bab4b230ba37b960811b6020820152905161006d91906103f5565b60405180910390f35b6100896100843660046104af565b6100a8565b604080516001600160a01b03909316835260208301919091520161006d565b60008060006060848060200190518101906100c3919061054b565b955090925090506100dd6001600160a01b038316826101fd565b506001600160a01b0384161561015a576040516370a0823160e01b81523060048201526001600160a01b038516906370a0823190602401602060405180830381865afa158015610131573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015591906105ec565b61015c565b475b92506001600160a01b0384166101f25773c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004016000604051808303818588803b1580156101bb57600080fd5b505af11580156101cf573d6000803e3d6000fd5b505050505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2935050506101f5565b50505b935093915050565b6060610241838360006040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c65640000815250610248565b9392505050565b6060824710156102ae5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084015b60405180910390fd5b600080866001600160a01b031685876040516102ca9190610605565b60006040518083038185875af1925050503d8060008114610307576040519150601f19603f3d011682016040523d82523d6000602084013e61030c565b606091505b509150915061031d8783838761032a565b925050505b949350505050565b6060831561039657825161038f576001600160a01b0385163b61038f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a5565b5081610322565b61032283838151156103ab5781518083602001fd5b8060405162461bcd60e51b81526004016102a591906103f5565b60005b838110156103e05781810151838201526020016103c8565b838111156103ef576000848401525b50505050565b60208152600082518060208401526104148160408501602087016103c5565b601f01601f19169190910160400192915050565b6001600160a01b038116811461043d57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561047f5761047f610440565b604052919050565b600067ffffffffffffffff8211156104a1576104a1610440565b50601f01601f191660200190565b6000806000606084860312156104c457600080fd5b83356104cf81610428565b925060208401359150604084013567ffffffffffffffff8111156104f257600080fd5b8401601f8101861361050357600080fd5b803561051661051182610487565b610456565b81815287602083850101111561052b57600080fd5b816020840160208301376000602083830101528093505050509250925092565b60008060006060848603121561056057600080fd5b835161056b81610428565b602085015190935067ffffffffffffffff81111561058857600080fd5b8401601f8101861361059957600080fd5b80516105a761051182610487565b8181528760208385010111156105bc57600080fd5b6105cd8260208301602086016103c5565b80945050505060408401516105e181610428565b809150509250925092565b6000602082840312156105fe57600080fd5b5051919050565b600082516106178184602087016103c5565b919091019291505056fea164736f6c634300080a000a";

type CustomLiquidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomLiquidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CustomLiquidator__factory extends ContractFactory {
  constructor(...args: CustomLiquidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CustomLiquidator> {
    return super.deploy(overrides || {}) as Promise<CustomLiquidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CustomLiquidator {
    return super.attach(address) as CustomLiquidator;
  }
  override connect(signer: Signer): CustomLiquidator__factory {
    return super.connect(signer) as CustomLiquidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomLiquidatorInterface {
    return new utils.Interface(_abi) as CustomLiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomLiquidator {
    return new Contract(address, _abi, signerOrProvider) as CustomLiquidator;
  }
}

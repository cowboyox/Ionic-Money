/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReplacingFlywheelStaticRewards,
  ReplacingFlywheelStaticRewardsInterface,
} from "../ReplacingFlywheelStaticRewards";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_replacedFlywheel",
        type: "address",
        internalType: "contract FlywheelCore",
      },
      {
        name: "_flywheel",
        type: "address",
        internalType: "contract FlywheelCore",
      },
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_authority",
        type: "address",
        internalType: "contract Authority",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authority",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract Authority",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "flywheel",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract FlywheelCore",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAccruedRewards",
    inputs: [
      {
        name: "strategy",
        type: "address",
        internalType: "contract ERC20",
      },
      {
        name: "lastUpdatedTimestamp",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
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
    name: "replacedFlywheel",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract FlywheelCore",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "rewardToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "rewardsInfo",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ERC20",
      },
    ],
    outputs: [
      {
        name: "rewardsPerSecond",
        type: "uint224",
        internalType: "uint224",
      },
      {
        name: "rewardsEndTimestamp",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setAuthority",
    inputs: [
      {
        name: "newAuthority",
        type: "address",
        internalType: "contract Authority",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRewardsInfo",
    inputs: [
      {
        name: "strategy",
        type: "address",
        internalType: "contract ERC20",
      },
      {
        name: "rewards",
        type: "tuple",
        internalType: "struct FlywheelStaticRewards.RewardsInfo",
        components: [
          {
            name: "rewardsPerSecond",
            type: "uint224",
            internalType: "uint224",
          },
          {
            name: "rewardsEndTimestamp",
            type: "uint32",
            internalType: "uint32",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AuthorityUpdated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newAuthority",
        type: "address",
        indexed: true,
        internalType: "contract Authority",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerUpdated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RewardsInfoUpdate",
    inputs: [
      {
        name: "strategy",
        type: "address",
        indexed: true,
        internalType: "contract ERC20",
      },
      {
        name: "rewardsPerSecond",
        type: "uint224",
        indexed: false,
        internalType: "uint224",
      },
      {
        name: "rewardsEndTimestamp",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "FlywheelError",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162000c4738038062000c478339810160408190526200003491620002ba565b600080546001600160a01b03199081166001600160a01b0385811691821784556001805490931690851617909155604051859285928592859285928592909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a35050806001600160a01b031660a0816001600160a01b0316815250506000816001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200012c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000152919062000322565b6001600160a01b03811660808190529091506200017f90836000196200021f602090811b6200058517901c565b50505050506000836001600160a01b031663f7c618c16040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001c5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001eb919062000322565b90506200021485600019836001600160a01b03166200021f60201b62000585179092919060201c565b505050505062000349565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806200029b5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640160405180910390fd5b50505050565b6001600160a01b0381168114620002b757600080fd5b50565b60008060008060808587031215620002d157600080fd5b8451620002de81620002a1565b6020860151909450620002f181620002a1565b60408601519093506200030481620002a1565b60608601519092506200031781620002a1565b939692955090935050565b6000602082840312156200033557600080fd5b81516200034281620002a1565b9392505050565b60805160a0516108d2620003756000396000818160d001526104810152600061018101526108d26000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b262cc6e11610066578063b262cc6e14610135578063b334db7b14610148578063bf7e214f14610169578063f7c618c11461017c578063fc56a813146101a357600080fd5b806313af4035146100a35780637a9e5e4b146100b85780637acf5b92146100cb5780638da5cb5b1461010f578063b0802e3614610122575b600080fd5b6100b66100b13660046106c4565b6101ff565b005b6100b66100c63660046106c4565b6102a0565b6100f27f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546100f2906001600160a01b031681565b6003546100f2906001600160a01b031681565b6100b66101433660046106e8565b61038a565b61015b61015636600461073b565b610474565b604051908152602001610106565b6001546100f2906001600160a01b031681565b6100f27f000000000000000000000000000000000000000000000000000000000000000081565b6101db6101b13660046106c4565b6002602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b604080516001600160e01b03909316835263ffffffff909116602083015201610106565b610215336000356001600160e01b031916610602565b6102555760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6000546001600160a01b0316331480610335575060015460405163b700961360e01b81526001600160a01b039091169063b7009613906102f490339030906001600160e01b03196000351690600401610774565b602060405180830381865afa158015610311573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033591906107a1565b61033e57600080fd5b600180546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6103a0336000356001600160e01b031916610602565b6103db5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640161024c565b6001600160a01b038216600090815260026020526040902081906103ff82826107d8565b50506001600160a01b0382167fcc8ac5e3ee055e8954322366397250c104503ddae709698089ea0c0cfa8da891610439602084018461081a565b6104496040850160208601610837565b604080516001600160e01b03909316835263ffffffff90911660208301520160405180910390a25050565b6000336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104bf5760405163739e221160e01b815260040160405180910390fd5b6001600160a01b03831660009081526002602090815260408083208151808301909252546001600160e01b0381168252600160e01b900463ffffffff1691810182905291901580610519575042826020015163ffffffff16115b156105355761052e63ffffffff85164261086a565b9050610566565b8363ffffffff16826020015163ffffffff1611156105665783826020015161055d9190610881565b63ffffffff1690505b815161057c9082906001600160e01b03166108a6565b95945050505050565b600060405163095ea7b360e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806105fc5760405162461bcd60e51b815260206004820152600e60248201526d1054141493d59157d1905253115160921b604482015260640161024c565b50505050565b6001546000906001600160a01b0316801580159061068c575060405163b700961360e01b81526001600160a01b0382169063b70096139061064b90879030908890600401610774565b602060405180830381865afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c91906107a1565b806106a457506000546001600160a01b038581169116145b949350505050565b6001600160a01b03811681146106c157600080fd5b50565b6000602082840312156106d657600080fd5b81356106e1816106ac565b9392505050565b60008082840360608112156106fc57600080fd5b8335610707816106ac565b92506040601f198201121561071b57600080fd5b506020830190509250929050565b63ffffffff811681146106c157600080fd5b6000806040838503121561074e57600080fd5b8235610759816106ac565b9150602083013561076981610729565b809150509250929050565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156107b357600080fd5b815180151581146106e157600080fd5b6001600160e01b03811681146106c157600080fd5b81356107e3816107c3565b81546001600160e01b03199081166001600160e01b03929092169182178355602084013561081081610729565b60e01b1617905550565b60006020828403121561082c57600080fd5b81356106e1816107c3565b60006020828403121561084957600080fd5b81356106e181610729565b634e487b7160e01b600052601160045260246000fd5b60008282101561087c5761087c610854565b500390565b600063ffffffff8381169083168181101561089e5761089e610854565b039392505050565b60008160001904831182151516156108c0576108c0610854565b50029056fea164736f6c634300080a000a";

type ReplacingFlywheelStaticRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReplacingFlywheelStaticRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReplacingFlywheelStaticRewards__factory extends ContractFactory {
  constructor(...args: ReplacingFlywheelStaticRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _replacedFlywheel: string,
    _flywheel: string,
    _owner: string,
    _authority: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ReplacingFlywheelStaticRewards> {
    return super.deploy(
      _replacedFlywheel,
      _flywheel,
      _owner,
      _authority,
      overrides || {}
    ) as Promise<ReplacingFlywheelStaticRewards>;
  }
  override getDeployTransaction(
    _replacedFlywheel: string,
    _flywheel: string,
    _owner: string,
    _authority: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _replacedFlywheel,
      _flywheel,
      _owner,
      _authority,
      overrides || {}
    );
  }
  override attach(address: string): ReplacingFlywheelStaticRewards {
    return super.attach(address) as ReplacingFlywheelStaticRewards;
  }
  override connect(signer: Signer): ReplacingFlywheelStaticRewards__factory {
    return super.connect(signer) as ReplacingFlywheelStaticRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplacingFlywheelStaticRewardsInterface {
    return new utils.Interface(_abi) as ReplacingFlywheelStaticRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReplacingFlywheelStaticRewards {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReplacingFlywheelStaticRewards;
  }
}

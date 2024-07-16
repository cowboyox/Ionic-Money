/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LiquidatorsRegistrySecondExtension,
  LiquidatorsRegistrySecondExtensionInterface,
} from "../LiquidatorsRegistrySecondExtension";

const _abi = [
  {
    type: "function",
    name: "_getExtensionFunctions",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes4[]",
        internalType: "bytes4[]",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "_removeRedemptionStrategy",
    inputs: [
      {
        name: "strategyToRemove",
        type: "address",
        internalType: "contract IRedemptionStrategy",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_resetRedemptionStrategies",
    inputs: [
      {
        name: "strategies",
        type: "address[]",
        internalType: "contract IRedemptionStrategy[]",
      },
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setDefaultOutputToken",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "outputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setRedemptionStrategies",
    inputs: [
      {
        name: "strategies",
        type: "address[]",
        internalType: "contract IRedemptionStrategy[]",
      },
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setRedemptionStrategy",
    inputs: [
      {
        name: "strategy",
        type: "address",
        internalType: "contract IRedemptionStrategy",
      },
      {
        name: "inputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "outputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setSlippages",
    inputs: [
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "slippages",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setUniswapV3Fees",
    inputs: [
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "fees",
        type: "uint24[]",
        internalType: "uint24[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setUniswapV3Routers",
    inputs: [
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "routers",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ap",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract AddressesProvider",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "customUniV3Router",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
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
    name: "defaultOutputToken",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllPairsStrategies",
    inputs: [],
    outputs: [
      {
        name: "strategies",
        type: "address[]",
        internalType: "contract IRedemptionStrategy[]",
      },
      {
        name: "inputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "outputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
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
    name: "pairsStrategiesMatch",
    inputs: [
      {
        name: "configStrategies",
        type: "address[]",
        internalType: "contract IRedemptionStrategy[]",
      },
      {
        name: "configInputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "configOutputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
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
    name: "pendingOwner",
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
    name: "redemptionStrategiesByName",
    inputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRedemptionStrategy",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "redemptionStrategiesByTokens",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRedemptionStrategy",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
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
    name: "uniswapPairsFeesMatch",
    inputs: [
      {
        name: "configInputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "configOutputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "configFees",
        type: "uint256[]",
        internalType: "uint256[]",
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
    name: "uniswapPairsRoutersMatch",
    inputs: [
      {
        name: "configInputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "configOutputTokens",
        type: "address[]",
        internalType: "contract IERC20Upgradeable[]",
      },
      {
        name: "configRouters",
        type: "address[]",
        internalType: "address[]",
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
    name: "uniswapV3Fees",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint24",
        internalType: "uint24",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
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
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001d3362000023565b6200009d565b600180546001600160a01b03191690556200004a816200004d602090811b62001c9317901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61248980620000ad6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638da5cb5b116100c3578063d7341acf1161007c578063d7341acf1461035d578063dee7fe4814610370578063e187a7dd146103a4578063e30c3978146103b7578063eb29d9f8146103c8578063f2fde38b146103db57600080fd5b80638da5cb5b146102955780638db87c27146102a6578063a1bb91e3146102cf578063a700f9e4146102e2578063aeabb62114610316578063c8ff6fee1461032957600080fd5b8063514b49d911610115578063514b49d9146102375780635495a6d71461024a578063715018a61461025d57806372c9889c1461026557806379ba50971461027857806389f8132e1461028057600080fd5b80630d856eef1461015d5780632434cb7f1461017d5780633322d87714610192578063366eda2e146101b5578063398cd955146101c85780633c4f743c1461020c575b600080fd5b6101656103ee565b60405161017493929190611f82565b60405180910390f35b61019061018b366004612002565b6106da565b005b6101a56101a0366004612087565b610710565b6040519015158152602001610174565b6101906101c3366004612087565b610a0e565b6101f86101d6366004612002565b600d60209081526000928352604080842090915290825290205462ffffff1681565b60405162ffffff9091168152602001610174565b60025461021f906001600160a01b031681565b6040516001600160a01b039091168152602001610174565b610190610245366004612121565b610ae7565b610190610258366004612087565b610da0565b610190610e96565b610190610273366004612087565b610ee6565b610190611001565b61028861107b565b604051610174919061213e565b6000546001600160a01b031661021f565b61021f6102b4366004612121565b6007602052600090815260409020546001600160a01b031681565b6101906102dd366004612087565b611408565b61021f6102f0366004612002565b60066020908152600092835260408084209091529082529020546001600160a01b031681565b6101a5610324366004612087565b61178a565b61021f610337366004612002565b600e6020908152600092835260408084209091529082529020546001600160a01b031681565b61019061036b36600461218c565b611886565b61021f61037e366004612246565b80516020818301810180516005825292820191909301209152546001600160a01b031681565b6101906103b2366004612087565b611a30565b6001546001600160a01b031661021f565b6101a56103d6366004612087565b611b49565b6101906103e9366004612121565b611c22565b606080606060006103ff6009611ce3565b90506000805b8251811015610481576000838281518110610422576104226122c6565b60200260200101519050600061045b60086000846001600160a01b03166001600160a01b03168152602001908152602001600020611ce3565b905080518461046a91906122f2565b9350505080806104799061230a565b915050610405565b508067ffffffffffffffff81111561049b5761049b6121d7565b6040519080825280602002602001820160405280156104c4578160200160208202803683370190505b5094508067ffffffffffffffff8111156104e0576104e06121d7565b604051908082528060200260200182016040528015610509578160200160208202803683370190505b5093508067ffffffffffffffff811115610525576105256121d7565b60405190808252806020026020018201604052801561054e578160200160208202803683370190505b5092506000905060005b82518110156106d2576000838281518110610575576105756122c6565b6020026020010151905060006105ae60086000846001600160a01b03166001600160a01b03168152602001908152602001600020611ce3565b905060005b81518110156106bc5760008282815181106105d0576105d06122c6565b6020908102919091018101516001600160a01b038082166000908152600684526040808220898416835290945292909220548c51919350909116908b908890811061061d5761061d6122c6565b60200260200101906001600160a01b031690816001600160a01b03168152505080898781518110610650576106506122c6565b60200260200101906001600160a01b031690816001600160a01b03168152505083888781518110610683576106836122c6565b6001600160a01b0390921660209283029190910190910152856106a58161230a565b9650505080806106b49061230a565b9150506105b3565b50505080806106ca9061230a565b915050610558565b505050909192565b6106e2611cf7565b6001600160a01b03918216600090815260076020526040902080546001600160a01b03191691909216179055565b60008060008061071e6103ee565b92509250925060005b8981101561088f576000805b8551811015610868578c8c8481811061074e5761074e6122c6565b90506020020160208101906107639190612121565b6001600160a01b031686828151811061077e5761077e6122c6565b60200260200101516001600160a01b03161480156107ec57508a8a848181106107a9576107a96122c6565b90506020020160208101906107be9190612121565b6001600160a01b03168582815181106107d9576107d96122c6565b60200260200101516001600160a01b0316145b80156108485750888884818110610805576108056122c6565b905060200201602081019061081a9190612121565b6001600160a01b0316848281518110610835576108356122c6565b60200260200101516001600160a01b0316145b156108565760019150610868565b806108608161230a565b915050610733565b508061087c57600095505050505050610a04565b50806108878161230a565b915050610727565b5060005b83518110156109fb576000805b8b8110156109d4578c8c828181106108ba576108ba6122c6565b90506020020160208101906108cf9190612121565b6001600160a01b03168684815181106108ea576108ea6122c6565b60200260200101516001600160a01b031614801561095857508a8a82818110610915576109156122c6565b905060200201602081019061092a9190612121565b6001600160a01b0316858481518110610945576109456122c6565b60200260200101516001600160a01b0316145b80156109b45750888882818110610971576109716122c6565b90506020020160208101906109869190612121565b6001600160a01b03168484815181106109a1576109a16122c6565b60200260200101516001600160a01b0316145b156109c257600191506109d4565b806109cc8161230a565b9150506108a0565b50806109e857600095505050505050610a04565b50806109f38161230a565b915050610893565b50600193505050505b9695505050505050565b610a16611cf7565b8483148015610a2457508281145b610a495760405162461bcd60e51b8152600401610a4090612325565b60405180910390fd5b60005b85811015610ade57610acc878783818110610a6957610a696122c6565b9050602002016020810190610a7e9190612121565b868684818110610a9057610a906122c6565b9050602002016020810190610aa59190612121565b858585818110610ab757610ab76122c6565b905060200201602081019061036b9190612121565b80610ad68161230a565b915050610a4c565b50505050505050565b610aef611cf7565b6000610afb6009611ce3565b905060005b8151811015610ce9576000828281518110610b1d57610b1d6122c6565b602002602001015190506000610b5660086000846001600160a01b03166001600160a01b03168152602001908152602001600020611ce3565b905060005b8151811015610ca1576000828281518110610b7857610b786122c6565b6020908102919091018101516001600160a01b038082166000908152600684526040808220898416835290945292909220549092508116908816811415610c8c576001600160a01b03808316600090815260066020908152604080832093891683529290522080546001600160a01b03191690558351610c3f90859085908110610c0457610c046122c6565b602002602001015160086000886001600160a01b03166001600160a01b03168152602001908152602001600020611d5390919063ffffffff16565b506001600160a01b0382811660009081526007602052604090205481169086161415610c8c576001600160a01b038216600090815260076020526040902080546001600160a01b03191690555b50508080610c999061230a565b915050610b5b565b506001600160a01b0382166000908152600860205260409020610cc390611d68565b610cd457610cd2600983611d53565b505b50508080610ce19061230a565b915050610b00565b5060006005836001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa158015610d2c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d54919081019061237a565b604051610d6191906123f1565b90815260405190819003602001902080546001600160a01b03929092166001600160a01b0319909216919091179055610d9b600383611d53565b505050565b610da8611cf7565b8085148015610db657508483145b610dd25760405162461bcd60e51b8152600401610a4090612325565b60005b81811015610ade57828282818110610def57610def6122c6565b90506020020135600b6000898985818110610e0c57610e0c6122c6565b9050602002016020810190610e219190612121565b6001600160a01b03166001600160a01b031681526020019081526020016000206000878785818110610e5557610e556122c6565b9050602002016020810190610e6a9190612121565b6001600160a01b0316815260208101919091526040016000205580610e8e8161230a565b915050610dd5565b610e9e611cf7565b60405162461bcd60e51b815260206004820152601e60248201527f72656e6f756e6365206f776e657273686970206e6f7420616c6c6f77656400006044820152606401610a40565b610eee611cf7565b8085148015610efc57508483145b610f185760405162461bcd60e51b8152600401610a4090612325565b60005b81811015610ade57828282818110610f3557610f356122c6565b9050602002016020810190610f4a9190612121565b600e6000898985818110610f6057610f606122c6565b9050602002016020810190610f759190612121565b6001600160a01b03166001600160a01b031681526020019081526020016000206000878785818110610fa957610fa96122c6565b9050602002016020810190610fbe9190612121565b6001600160a01b039081168252602082019290925260400160002080546001600160a01b0319169290911691909117905580610ff98161230a565b915050610f1b565b60015433906001600160a01b0316811461106f5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610a40565b61107881611d72565b50565b60408051600c8082526101a0820190925260609190600090826020820161018080368337019050509050630d856eef60e01b816110b78461240d565b93508360ff16815181106110cd576110cd6122c6565b6001600160e01b031990921660209283029190910190910152633322d87760e01b816110f88461240d565b93508360ff168151811061110e5761110e6122c6565b6001600160e01b031990921660209283029190910190910152631d653b3f60e31b816111398461240d565b93508360ff168151811061114f5761114f6122c6565b6001600160e01b03199092166020928302919091019091015263aeabb62160e01b8161117a8461240d565b93508360ff1681518110611190576111906122c6565b6001600160e01b031990921660209283029190910190910152635495a6d760e01b816111bb8461240d565b93508360ff16815181106111d1576111d16122c6565b6001600160e01b03199092166020928302919091019091015263e187a7dd60e01b816111fc8461240d565b93508360ff1681518110611212576112126122c6565b6001600160e01b031990921660209283029190910190910152631cb2622760e21b8161123d8461240d565b93508360ff1681518110611253576112536122c6565b6001600160e01b031990921660209283029190910190910152632434cb7f60e01b8161127e8461240d565b93508360ff1681518110611294576112946122c6565b6001600160e01b03199092166020928302919091019091015263d7341acf60e01b816112bf8461240d565b93508360ff16815181106112d5576112d56122c6565b6001600160e01b031990921660209283029190910190910152631b376d1760e11b816113008461240d565b93508360ff1681518110611316576113166122c6565b6001600160e01b03199092166020928302919091019091015263514b49d960e01b816113418461240d565b93508360ff1681518110611357576113576122c6565b6001600160e01b03199092166020928302919091019091015263a1bb91e360e01b816113828461240d565b93508360ff1681518110611398576113986122c6565b6001600160e01b03199092166020928302919091019091015260ff8216156114025760405162461bcd60e51b815260206004820152601c60248201527f7573652074686520636f7272656374206172726179206c656e677468000000006044820152606401610a40565b92915050565b611410611cf7565b848314801561141e57508281145b61143a5760405162461bcd60e51b8152600401610a4090612325565b60006114466009611ce3565b905060005b81518110156115d4576000828281518110611468576114686122c6565b6020026020010151905060006114a160086000846001600160a01b03166001600160a01b03168152602001908152602001600020611ce3565b905060005b81518110156115905760008282815181106114c3576114c36122c6565b6020908102919091018101516001600160a01b03808216600090815260068452604080822092891682529190935290912080546001600160a01b031916905583519091506115589084908490811061151d5761151d6122c6565b602002602001015160086000876001600160a01b03166001600160a01b03168152602001908152602001600020611d5390919063ffffffff16565b506001600160a01b0316600090815260076020526040902080546001600160a01b0319169055806115888161230a565b9150506114a6565b506115be8484815181106115a6576115a66122c6565b60200260200101516009611d5390919063ffffffff16565b50505080806115cc9061230a565b91505061144b565b5060006115e16003611ce3565b905060005b81518110156116fe576000828281518110611603576116036122c6565b602002602001015190506000816001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801561164d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611675919081019061237a565b9050600060058260405161168991906123f1565b908152602001604051809103902060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506116e88484815181106116d0576116d06122c6565b60200260200101516003611d5390919063ffffffff16565b50505080806116f69061230a565b9150506115e6565b5060005b8781101561177f5761176d89898381811061171f5761171f6122c6565b90506020020160208101906117349190612121565b888884818110611746576117466122c6565b905060200201602081019061175b9190612121565b878785818110610ab757610ab76122c6565b806117778161230a565b915050611702565b505050505050505050565b6000805b82811015611878578383828181106117a8576117a86122c6565b90506020020160208101906117bd9190612121565b6001600160a01b0316600e60008a8a858181106117dc576117dc6122c6565b90506020020160208101906117f19190612121565b6001600160a01b03166001600160a01b031681526020019081526020016000206000888885818110611825576118256122c6565b905060200201602081019061183a9190612121565b6001600160a01b0390811682526020820192909252604001600020541614611866576000915050610a04565b806118708161230a565b91505061178e565b506001979650505050505050565b61188e611cf7565b6000836001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156118ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118f6919081019061237a565b9050600060058260405161190a91906123f1565b9081526040805160209281900383018120546001600160a01b0388811660009081526006865284812089831682529095529290932080546001600160a01b0319168984161790559116915085906005906119659085906123f1565b90815260405190819003602001902080546001600160a01b03929092166001600160a01b031990921691909117905561199f600382611d53565b506119ab600386611d8b565b506001600160a01b03848116600090815260076020526040902054166119fa576001600160a01b03848116600090815260076020526040902080546001600160a01b0319169185169190911790555b6001600160a01b0383166000908152600860205260409020611a1c9085611d8b565b50611a28600984611d8b565b505050505050565b611a38611cf7565b8085148015611a4657508483145b611a625760405162461bcd60e51b8152600401610a4090612325565b60005b81811015610ade57828282818110611a7f57611a7f6122c6565b9050602002016020810190611a94919061242a565b600d6000898985818110611aaa57611aaa6122c6565b9050602002016020810190611abf9190612121565b6001600160a01b03166001600160a01b031681526020019081526020016000206000878785818110611af357611af36122c6565b9050602002016020810190611b089190612121565b6001600160a01b031681526020810191909152604001600020805462ffffff191662ffffff9290921691909117905580611b418161230a565b915050611a65565b6000805b8281101561187857838382818110611b6757611b676122c6565b90506020020135600d60008a8a85818110611b8457611b846122c6565b9050602002016020810190611b999190612121565b6001600160a01b03166001600160a01b031681526020019081526020016000206000888885818110611bcd57611bcd6122c6565b9050602002016020810190611be29190612121565b6001600160a01b0316815260208101919091526040016000205462ffffff1614611c10576000915050610a04565b80611c1a8161230a565b915050611b4d565b611c2a611cf7565b600180546001600160a01b0383166001600160a01b03199091168117909155611c5b6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60606000611cf083611da0565b9392505050565b6000546001600160a01b03163314611d515760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a40565b565b6000611cf0836001600160a01b038416611dfc565b6000611402825490565b600180546001600160a01b031916905561107881611c93565b6000611cf0836001600160a01b038416611eef565b606081600001805480602002602001604051908101604052809291908181526020018280548015611df057602002820191906000526020600020905b815481526020019060010190808311611ddc575b50505050509050919050565b60008181526001830160205260408120548015611ee5576000611e2060018361244f565b8554909150600090611e349060019061244f565b9050818114611e99576000866000018281548110611e5457611e546122c6565b9060005260206000200154905080876000018481548110611e7757611e776122c6565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611eaa57611eaa612466565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611402565b6000915050611402565b6000818152600183016020526040812054611f3657508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155611402565b506000611402565b600081518084526020808501945080840160005b83811015611f775781516001600160a01b031687529582019590820190600101611f52565b509495945050505050565b606080825284519082018190526000906020906080840190828801845b82811015611fc45781516001600160a01b031684529284019290840190600101611f9f565b50505083810382850152611fd88187611f3e565b9150508281036040840152610a048185611f3e565b6001600160a01b038116811461107857600080fd5b6000806040838503121561201557600080fd5b823561202081611fed565b9150602083013561203081611fed565b809150509250929050565b60008083601f84011261204d57600080fd5b50813567ffffffffffffffff81111561206557600080fd5b6020830191508360208260051b850101111561208057600080fd5b9250929050565b600080600080600080606087890312156120a057600080fd5b863567ffffffffffffffff808211156120b857600080fd5b6120c48a838b0161203b565b909850965060208901359150808211156120dd57600080fd5b6120e98a838b0161203b565b9096509450604089013591508082111561210257600080fd5b5061210f89828a0161203b565b979a9699509497509295939492505050565b60006020828403121561213357600080fd5b8135611cf081611fed565b6020808252825182820181905260009190848201906040850190845b818110156121805783516001600160e01b0319168352928401929184019160010161215a565b50909695505050505050565b6000806000606084860312156121a157600080fd5b83356121ac81611fed565b925060208401356121bc81611fed565b915060408401356121cc81611fed565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612216576122166121d7565b604052919050565b600067ffffffffffffffff821115612238576122386121d7565b50601f01601f191660200190565b60006020828403121561225857600080fd5b813567ffffffffffffffff81111561226f57600080fd5b8201601f8101841361228057600080fd5b803561229361228e8261221e565b6121ed565b8181528560208385010111156122a857600080fd5b81602084016020830137600091810160200191909152949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612305576123056122dc565b500190565b600060001982141561231e5761231e6122dc565b5060010190565b6020808252600b908201526a10b0b93930bcb9903632b760a91b604082015260600190565b60005b8381101561236557818101518382015260200161234d565b83811115612374576000848401525b50505050565b60006020828403121561238c57600080fd5b815167ffffffffffffffff8111156123a357600080fd5b8201601f810184136123b457600080fd5b80516123c261228e8261221e565b8181528560208385010111156123d757600080fd5b6123e882602083016020860161234a565b95945050505050565b6000825161240381846020870161234a565b9190910192915050565b600060ff821680612420576124206122dc565b6000190192915050565b60006020828403121561243c57600080fd5b813562ffffff81168114611cf057600080fd5b600082821015612461576124616122dc565b500390565b634e487b7160e01b600052603160045260246000fdfea164736f6c634300080a000a";

type LiquidatorsRegistrySecondExtensionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidatorsRegistrySecondExtensionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidatorsRegistrySecondExtension__factory extends ContractFactory {
  constructor(...args: LiquidatorsRegistrySecondExtensionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<LiquidatorsRegistrySecondExtension> {
    return super.deploy(
      overrides || {}
    ) as Promise<LiquidatorsRegistrySecondExtension>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LiquidatorsRegistrySecondExtension {
    return super.attach(address) as LiquidatorsRegistrySecondExtension;
  }
  override connect(
    signer: Signer
  ): LiquidatorsRegistrySecondExtension__factory {
    return super.connect(signer) as LiquidatorsRegistrySecondExtension__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidatorsRegistrySecondExtensionInterface {
    return new utils.Interface(
      _abi
    ) as LiquidatorsRegistrySecondExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidatorsRegistrySecondExtension {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LiquidatorsRegistrySecondExtension;
  }
}

let abi = [
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "getRootAtIndex",
    outputs: [
      {
        name: "timeStamp",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "timeStamp",
        type: "uint256"
      }
    ],
    name: "getRoot",
    outputs: [
      {
        name: "rootHash",
        type: "bytes32"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "timeStamp",
        type: "uint256"
      }
    ],
    name: "checkTimeStamp",
    outputs: [
      {
        name: "isIndeed",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "timeStamp",
        type: "uint256"
      },
      {
        name: "rootHash",
        type: "bytes32"
      }
    ],
    name: "insertRoot",
    outputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getRootCount",
    outputs: [
      {
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "timeStamp",
        type: "uint256"
      },
      {
        indexed: false,
        name: "index",
        type: "uint256"
      },
      {
        indexed: false,
        name: "rootHash",
        type: "bytes32"
      }
    ],
    name: "LogNewRoot",
    type: "event"
  }
];
export default abi;

import { ethers } from "ethers";
import {
  NETWORK_ID,
} from "./config";
const chainId = Number(NETWORK_ID);

import contracts from "./contracts/hardhat_contracts.json";
const contractAddress =
  contracts[chainId][0].contracts.NFT.address;
const contractABI =
  contracts[chainId][0].contracts.NFT.abi;

export const getContractData = () => {
  return [contractAddress, contractABI];
};

export const getEthersNftContract = (provider) => {
  const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    provider
  );
  return contract
}

export const ipfsToHTTP = (ipfsName) => ipfsName.replace("ipfs://", "https://ipfs.io/ipfs/");

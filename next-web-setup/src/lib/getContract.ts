 import { ethers } from "ethers";
 import contract from "../../build/contracts/TodoList.json";

const contractAddress = "0xA5Db8ECa58b212598a338F7D0463cCd395b950b8";
const { abi } = contract;

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const taksContract = new ethers.Contract(contractAddress, abi, signer);

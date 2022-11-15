
import axios, { Axios } from 'axios'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import {
  useContractRead,
  useContract,
  useProvider,
} from "wagmi";

import {
  getContractData,
  getEthersNftContract,
  ipfsToHTTP,
} from '../utils'

const [contractAddress, contractABI] = getContractData();

// export const useTokenUri = (tokenId) => {
//   const [tokenUri, setTokenUri] = useState()
//   const [tokenUriError, setTokenUriError] = useState()
//   if (!tokenUri && !tokenUriError) {
//       const { data, isError, isLoading } = useContractRead({
//       address: contractAddress,
//       abi: contractABI,
//       functionName: 'tokenURI',
//       args: [tokenId],
//     })
//     console.log(data, isError, isLoading)
//     if (!isLoading && !isError) {
//       console.log("data",data)
//       setTokenUri(data);
//     }
//     else if (isError) {
//       console.log("isError")
//       console.log(isError)
//       setTokenUriError(isError)
//     }
//   }
//   return tokenUri
// }

export const useTokenUri = (tokenId) => {
  const [tokenUri, setTokenUri] = useState()
  const provider = useProvider()
  // console.log(tokenUri)
  useEffect(() => {
    console.log("useEffect", tokenId, provider)
    if (provider && tokenId) {
      const nftContract = getEthersNftContract(provider)
      console.log(nftContract)
      nftContract.tokenURI(tokenId).
      then ( uri =>{
        console.log(uri)
        setTokenUri(uri)
      })
    }
  },[provider, tokenId])
  return tokenUri
}

export const useTokenMetaData = (tokenId) => {
  const [tokenMetadata, setTokenMetadata] = useState()
  const tokenUri = useTokenUri(tokenId)
  if (tokenUri && !tokenMetadata) {
    axios.get(ipfsToHTTP(tokenUri)).
      then(request => {
        // console.log(request.data)
        setTokenMetadata(request.data)
      })
  }
  return tokenMetadata
}

export function useTokenId () {
  const router = useRouter()
  const {tokenId} = router.query
  return tokenId
}
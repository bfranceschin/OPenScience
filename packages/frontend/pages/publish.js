//TODOs
// Mintar! (nft storage)
// Colocar mais de um autor?
// Refatorar
// Conseguir colocar uma altura máxima para a tabela e acrescentar barra de rolagem quando essa altura for atingida
// Colocar endereço do autor no card, em vez do nome?

import { useState } from 'react'
import { useRouter } from 'next/router'
import { NFTStorage, File } from 'nft.storage'

import Navbar from '../components/common/Navbar';
import PreviewCard from '../components/publish/PreviewCard';
import ReferenceInput from '../components/publish/ReferenceInput';
import TitleInput from '../components/publish/TitleInput';
import KeywordsInput from '../components/publish/KeywordsInput';
import AbstractInput from '../components/publish/AbstractInput';
import AuthorInput from '../components/publish/AuthorInput';
import PdfUploader from '../components/publish/PdfUploader';
import {NFT_STORAGE_KEY} from '../nftstoragekey';

import {
  useContract,
  useSigner,
} from "wagmi";

import { getContractData } from '../utils'
const [contractAddress, contractABI] = getContractData();

const description = "OPenScience: permissionless research publishing and retroactive graph-funding"

// TODO: move it to a different file
async function storeNFT(image, pdf, title, author, abstract, keywords) {
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    return nftstorage.store({
        image,
        name: title,
        description: description,
        properties: {
          pdf,
          title, 
          abstract,
          keywords,
          author
        }
    })
}

let inputAbstract = "";
function setInputAbstract(abstract) {
  inputAbstract = abstract;
}

let inputPdf = null;
function setPdf (pdf) {
  inputPdf = pdf;
}

let image = null;
function setImage (img) {
  image = img;
}

let references = []
function setReferences (refs) {
  references = refs
}

const initialButtomText = "Mint!"
export default function PublishComponent() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputKeywords, setInputKeywords] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [buttonText, setButtonText] = useState(initialButtomText)
  let router= useRouter()

  const { data: signerData } = useSigner();
  const nftContract = useContract({
    address: contractAddress,
    abi: contractABI,
    signerOrProvider: signerData,
  });
  
  const mint = async () => {
    if (!signerData) {
      alert("Connect wallet to mint nft.")
      return
    }
    if (buttonText !== initialButtomText) {
      return
    }
    // TODO check valid inputs
    setButtonText("Storing nft data ...")
    const storeReturn = await storeNFT(
      image,
      inputPdf,
      inputTitle,
      inputAuthor,
      inputAbstract,
      inputKeywords,
      references
    )
    console.log("storeReturn", storeReturn)
    let error = null
    let txReceipt
    try {
      setButtonText("Signing transaction ...")
      const tx = await nftContract.createToken(storeReturn.url, references)
      setButtonText("Sending transaction ...")
      txReceipt = await tx.wait()
    }
    catch(e) {
      console.log(e)
      error = e
      let msg = "Transaction error.\n".concat(e) 
      alert(msg)
      setButtonText(initialButtomText)
    }
    if (error === null) {
      console.log("success")
      console.log(txReceipt)
      const transferEvent = txReceipt.events.filter(e => e.event === "Transfer")
      const tokenId = transferEvent[0].args.tokenId.toString()
      console.log('tokenId',tokenId)
      router.push(`/nfts/${tokenId}`)
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-base-200 min-h-screen">
        <div className="hero min-h-fit bg-base-200 pt-6 pb-6">
            <div className="w-3/5 hero-content flex-col card lg:flex-row-reverse drop-shadow-md bg-base-100 relative overflow-x-auto overflow-y-auto">
              <div>
                <PreviewCard  
                  author={inputAuthor} 
                  title={inputTitle}
                  keywords={inputKeywords}
                  setImage={setImage} 
                />
              </div>
              <div className="card shrink w-full max-w-2xl bg-base-100">
                <div className="card-body pl-3">
                  <AuthorInput setInputAuthor={setInputAuthor} />
                  <TitleInput setInputTitle={setInputTitle} />
                  <KeywordsInput setInputKeywords={setInputKeywords} />
                  <AbstractInput setInputAbstract={setInputAbstract}/>
                  <ReferenceInput setReferences={setReferences} />
                  <PdfUploader setPdf={setPdf}/>
                  <div className="form-control mt-6">
                    <button onClick={mint} className="btn btn-primary bg-black border-black hover:bg-yellow-500 hover:border-yellow-500 hover:text-black">{buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

//TODOs
// Mintar! (nft storage)
// Colocar mais de um autor?
// Refatorar
// Conseguir colocar uma altura máxima para a tabela e acrescentar barra de rolagem quando essa altura for atingida
// Colocar endereço do autor no card, em vez do nome?

import { useState } from 'react';

import Navbar from '../components/Navbar';
import PreviewCard from '../components/publish/PreviewCard';
import ReferenceInput from '../components/publish/ReferenceInput';
import TitleInput from '../components/publish/TitleInput';
import KeywordsInput from '../components/publish/KeywordsInput';
import AbstractInput from '../components/publish/AbstractInput';
import AuthorInput from '../components/publish/AuthorInput';
import PdfUploader from '../components/publish/PdfUploader';

export default function PublishComponent() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputKeywords, setInputKeywords] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  
  return (
    <div>
      <Navbar/>
      <div className="bg-base-200 min-h-screen">
        <div className="hero min-h-fit bg-base-200 pt-6 pb-6">
          {/* <div className="w-1/2 card drop-shadow-md bg-base-100 place-items-center"> */}
          {/* <div className="w-1/2 card drop-shadow-md bg-base-100 place-items-center"> */}
            {/* <div className="w-1/2 hero-content flex-col card lg:flex-row-reverse drop-shadow-md bg-base-100 relative"> */}
            <div className="w-3/5 hero-content flex-col card lg:flex-row-reverse drop-shadow-md bg-base-100 relative overflow-x-auto overflow-y-auto">
              <div>
                <PreviewCard  author={inputAuthor} title={inputTitle} keywords={inputKeywords}/>
              </div>
              <div className="card shrink w-full max-w-2xl bg-base-100">
                <div className="card-body pl-3">
                  <AuthorInput setInputAuthor={setInputAuthor} />
                  <TitleInput setInputTitle={setInputTitle} />
                  <KeywordsInput setInputKeywords={setInputKeywords} />
                  <AbstractInput />
                  <ReferenceInput />
                  <PdfUploader />
                  <div className="form-control mt-6">
                    <button className="btn btn-primary bg-black border-black hover:bg-yellow-500 hover:border-yellow-500 hover:text-black">Mint!</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-4/5 form-control mt-6 pb-10">
              <button className="btn btn-primary">Mint!</button>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

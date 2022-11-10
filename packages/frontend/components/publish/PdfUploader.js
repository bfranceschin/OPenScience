import React, { useState } from 'react';

const PdfUploader = ({setPdf}) => {
  const [inputFile, setInputFile] = useState("");

  const removeFileButton = (referenceId) => {
    return (
      <button 
        className="btn btn-circle btn-outline btn-xs border-gray-400"
        onClick={event => {
          setInputFile("");
          setPdf(null);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#B0B0B0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    )
  }

  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">Paper file</span>
      </label>
      <div className="grid grid-cols-2">
        <div className="btn text-gray-500 capitalize bg-gray-200 border-gray-200 hover:bg-gray-300 hover:border-gray-300">
          <label htmlFor="upload-file" className="flex flex-col justify-center items-center w-full cursor-pointer">
            <input 
              id="upload-file" 
              className="hidden" 
              type="file" 
              accept="application/pdf" 
              onChange={event => {
                console.log("Arquivo baixado: ", event.target.files[0].name); 
                setInputFile(event.target.files[0].name)
                setPdf(event.target.files[0]);
                // console.log(event.target.files[0])
                event.target.value = null
                }} 
            />
            Choose file
          </label>
        </div>
        <div className="flex flex-col text-sm text-gray-400 justify-center items-left pl-6w-full">
          {inputFile !== "" 
            ? <div className="grid grid-cols-2">
                <div className="pl-5 pt-0.5">{inputFile}</div>
                {removeFileButton()}
              </div>
            : <div className="pl-5 pt-0.5">No file uploaded</div>
          }
        </div>
      </div>
    </div>     
  );
};

export default PdfUploader;
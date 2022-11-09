import React from 'react';

const KeywordsInput = (props) => {
  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">Keywords</span>
      </label>
      <input 
        type="text" 
        placeholder="Keywords to help people find your work :)" 
        className="input input-bordered" 
        onChange={(event) => props.setInputKeywords(event.target.value)}/>
    </div>
  );
};

export default KeywordsInput;
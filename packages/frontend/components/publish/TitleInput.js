import React from 'react';

const TitleInput = (props) => {
  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">Title</span>
      </label>
      <input 
        type="text" 
        placeholder="Title of the paper" 
        className="input input-bordered" 
        onChange={(event) => props.setInputTitle(event.target.value)}
      />
    </div>
  );
};

export default TitleInput;
import React from 'react';

const AuthorInput = (props) => {
  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">Author</span>
      </label>
      <input 
        type="text" 
        placeholder="Author" 
        className="input input-bordered"
        onChange={(event) => props.setInputAuthor(event.target.value)}
       />
    </div>
  );
};

export default AuthorInput;
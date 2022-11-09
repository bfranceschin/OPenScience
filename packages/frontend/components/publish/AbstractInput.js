import React from 'react';

const AbstractInput = () => {
  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">Abstract</span>
      </label>
      <textarea className="textarea textarea-bordered" placeholder="A brief description about your work."></textarea>
    </div>
  );
};

export default AbstractInput;
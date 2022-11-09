import React from 'react';

const ReferencesTable = (props) => {
  const removeRowButton = (referenceId) => {
    return (
      <button 
        className="btn btn-circle btn-outline btn-xs border-gray-400"
        onClick={props.removeReference(referenceId)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#B0B0B0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    )
  }

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="table w-full text-xs hover:bg-gray-50">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.referencesInfo.map((item, idx) => {
              return (
                <tr key={item.id}>
                  <th>{idx}</th>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{removeRowButton(item.id)}</td>
              </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReferencesTable;
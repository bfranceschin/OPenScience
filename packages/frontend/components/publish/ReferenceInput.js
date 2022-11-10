import { useEffect, useState } from "react";

// TODO: como usar a funcionalidade do removeRowButton em um componente separado??
// import ReferencesTable from './ReferencesTable';

const ReferenceInput = ({setReferences}) => {
  const [inputReference, setInputReference] = useState("");
  const [referenceList, setReferenceList] = useState([]);

  const HandleSetInputReference = () => {
    if (inputReference === "") return;
    const newReferenceRow = inputReference
    setReferenceList(arr => [...arr, {id: newReferenceRow, title: "blablabla"}])
    setInputReference('')
    let ref = referenceList.map(e => e.id)
    ref.push(newReferenceRow)
    setReferences(ref)
  }

  const PrintReferenceList = () => {
    return (
      <div>
          {referenceList.map((item) => {
            return (
              <div key={item.id}>
                ****{item.id}
                <br></br>
              </div>
            )
          })}
      </div>
    )
  }

  const removeReference = (referenceId) => {
    setReferenceList(arr => 
      arr.filter(ref => {
        return ref.id !== referenceId
      }) 
    )
    let ref = referenceList.map(e => e.id).filter(id => id !== referenceId)
    console.log(ref)
    setReferences(ref)
  }

  const removeRowButton = (referenceId) => {
    return (
      <button 
        className="btn btn-circle btn-outline btn-xs border-gray-400"
        onClick={event => removeReference(referenceId)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#B0B0B0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    )
  }

  return (
    <div className="form-control pb-2">
      <label className="label">
        <span className="label-text uppercase font-base font-medium text-base">References</span>
      </label>

      {/* <ReferencesTable removeReference={removeReference} referencesInfo={referenceList}/> */}
      {referenceList.length !== 0 
        ? <div className="overflow-x-auto overflow-y-auto mb-1">
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
                  {referenceList.map((item, idx) => {
                      return (
                        <tr key={idx}>
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
        : <div></div>
      }
      <div className="relative">
        <input 
          type="text" 
          placeholder="Type the reference id" 
          className="input input-bordered p-4 w-full text-sm "
          onChange={(event) => setInputReference(event.target.value)}
          value={inputReference}
        />
        <button 
          className="btn btn-xs text-gray-500 absolute right-2.5 bottom-3 capitalize bg-gray-200 border-gray-200 hover:bg-gray-300 hover:border-gray-300"
          onClick={HandleSetInputReference}
        >
            Add
        </button>
      </div>
    </div>
  )
}

export default ReferenceInput;
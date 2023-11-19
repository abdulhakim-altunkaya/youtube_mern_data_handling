import React, {useState} from 'react'


function Reqquery() {

  let [inputValue, setInputValue] = useState("");

  const transferData = () => {
    console.log(inputValue);
  }

  return (
    <div>
      <input type='string' 
      placeholder='enter text'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} />
      <button onClick={transferData}>REQ QUERY</button>
      <p>{inputValue}</p>
    </div>
  )
}

export default Reqquery
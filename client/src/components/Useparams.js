import React, {useState} from 'react'
import axios from "axios";


function Useparams() {

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
      <button onClick={transferData}>USE PARAMS</button>
      <p>{inputValue}</p>
    </div>
  )
}

export default Useparams
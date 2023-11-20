import React, {useState} from 'react'
import axios from "axios";

function Reqbody() {

  let [inputValue, setInputValue] = useState("");
  let [serverData, setServerData] = useState("");

  const transferData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/reqbody", { frontenddata: inputValue }, {
        headers: {
          'Content-Type': 'application/json',
      }})
      setServerData(response.data.mymessage);
    } catch (error) {
      console.log("Frontend: ", error.message);
    }

  }

  return (
    <div>
      <input type='string' 
      placeholder='enter text'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} />
      <button onClick={transferData}>REQ BODY</button>
      <p>{serverData}</p>
    </div>
  )
}

export default Reqbody
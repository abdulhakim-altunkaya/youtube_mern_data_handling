import React, {useState} from 'react'
import axios from "axios";


function Reqquery() { 

  let [inputValue, setInputValue] = useState("");
  let [serverData, setServerData] = useState("");
 
  const transferData = async () => {
    try {
      const url = `http://localhost:5000/api/reqquery?word=${inputValue}`;
      const response = await axios.get(url);
      const response2 = response.data.mymessage;
      setServerData(response2);
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
      <button onClick={transferData}>REQ QUERY</button>
      <p>{serverData}</p>
    </div>
  )
}

export default Reqquery
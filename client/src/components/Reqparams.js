import React, {useState} from 'react'
import axios from "axios";
import { AxiosError } from 'axios';


function Reqparams() {

  let [inputValue, setInputValue] = useState("");
  let [serverData, setServerData] = useState("");

  const transferData = async () => {
    
    try {
      const response = await axios.get(`http://localhost:5000/api/reqparams/${inputValue}`)
      setServerData(response.data.mymessage);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setServerData(`Error: ${error.response.data.myerror} and Status: ${error.response.status}`)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        setServerData('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

    }
  }

  return (
    <div>
      <input type='string' 
      placeholder='enter text'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} />
      <button onClick={transferData}>REQ PARAMS</button>
      <p>{serverData}</p>
    </div>
  )
}

export default Reqparams
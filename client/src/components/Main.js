import React, {useState} from 'react'
import axios from "axios";

function Main() {
    let [serverData, setServerData] = useState("");

    const getData = async () => {
        const response = await axios.get("http://localhost:5000/test");
        setServerData(response.data.mymessage); 
    }

    return (
        <div>
            <button onClick={getData}> READ FROM SERVER </button>
            <p>{serverData}</p>
        </div>
    )
}

export default Main
import { useEffect, useState } from "react";

function App() 
{
  const [backendData, setBackendData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(Response => Response.json()).then(Data => {setBackendData(Data)})
  }, [])

  return (
    <div>
      {(typeof backendData.users == 'undefined') ? (<p>Loading...</p>): (backendData.users.map((user, i) => (<p key = {i}>{user}</p>)))}
    </div>
  );
}

export default App;
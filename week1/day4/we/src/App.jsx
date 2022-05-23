import { useEffect, useState } from "react"


function App() {

  const [user,setUser] = useState("atin");
  const [text,setText] = useState("");

  useEffect(()=>{

    const id = setInterval(()=>{
      console.log(`listing ${user}`)
    },1000);

    return (()=>{
      clearInterval(id);
    })

  },[user])

  const handleCahnge = (text) =>{
    setUser(text);

  }


  return (
    
    <div className="App">
      <input placeholder="enter user" onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={()=>handleCahnge(text)}>update</button>
      <h1>listing to {user}</h1>
    </div>
  
  )
}

export default App

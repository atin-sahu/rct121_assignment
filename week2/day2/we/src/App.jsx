import { useContext } from "react"
import { AppContext } from "./context/AppContextProvider"
import "./App.css"
// import { Counter } from "./components/counter"

function App() {
 const [theme, toggletheme] = useContext(AppContext)

  return (
    <div >
      <h1>Atin sahu</h1>
      <div className="themebox">
        <h1>{theme}</h1>
      </div>
      <div className={theme}>
        <h2>change theme will appera here</h2>
      </div>
      
      <button onClick={()=>(toggletheme())}>toggle</button>
    
    </div>
  )
}

export default App

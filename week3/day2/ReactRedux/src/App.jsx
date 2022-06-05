import { useContext } from "react"
import { DecCount, IncCount } from "./Redux/Action";
import { ReduxContext } from "./Redux/ReduxProvider"


function App() {
 const [getState,dispatch] = useContext(ReduxContext);
  // console.log("getState",getState());
  const state = getState();
  // console.log("atin",state);
  return (
    <div >
      <h1>Count : {state.count}  </h1>
      <button onClick={()=>dispatch(IncCount(1))}>add</button>
      <button onClick={()=>dispatch(DecCount(-1))}>reduce</button>
    </div>
  )
}

export default App

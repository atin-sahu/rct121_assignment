import { Count } from "./components/Count"
import { Navbar } from "./components/Navbar"
import { CounterPage } from "./pages/CounterPage"
import { TodosPage } from "./pages/TodosPage"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/counter" element={<CounterPage></CounterPage>}></Route>
        <Route path="/todo" element={<TodosPage></TodosPage>}></Route>
      </Routes>
    </div>
  )
}

export default App

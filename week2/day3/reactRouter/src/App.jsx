import { Route, Routes } from "react-router-dom"
import { About } from "./components/About"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Users } from "./components/Users"
import { User } from "./components/User"


function App() {
  

  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/users/:id" element={<User></User>}></Route>
      </Routes>
    </div>
  )
}

export default App

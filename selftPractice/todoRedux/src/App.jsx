import { Navbar } from "./components/Navbar"
import { CounterPage } from "./pages/CounterPage"
import { ListTodoPage} from "./pages/todo/ListTodoPage"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AddTodoPage } from "./pages/todo/AddTodoPage"
import { EditPage } from "./pages/todo/EditPage"

function App() {

  return (
    
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/counter" element={<CounterPage></CounterPage>}></Route>
        <Route path="/list-todo" element={<ListTodoPage></ListTodoPage>}></Route>
        <Route path="/add-todo" element={<AddTodoPage></AddTodoPage>}></Route>
        <Route path="/list-todo/edit/:id" element={<EditPage></EditPage>}></Route>
      </Routes>
    </div>
  )
}

export default App


import { Navbar } from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/home/Home"
import { About } from './components/about/About'
import { Men } from './components/men/Men'
import { Women } from './components/women/Women'
import { Kid } from './components/kid/Kid'
import { Contact } from './components/contact/Contact'
import { Faq } from './components/faq/Faq'
import { Login } from './components/login/login'
import { Profile } from './components/profile/Profile'
import { Cart } from './components/cart/Cart'

function App() {

  return (
    
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
        <Route path='/women' element={<Women></Women>}></Route>
        <Route path='/kid' element={<Kid></Kid>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
}

export default App

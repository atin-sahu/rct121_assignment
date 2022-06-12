import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import Oders from '../pages/Oders'
import { Product } from '../pages/Product'
import { Products } from '../pages/Products'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/orders' element={<Oders></Oders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  )
}

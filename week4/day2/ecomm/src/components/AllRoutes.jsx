import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { Products } from '../pages/Products'


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const isAuth = useSelector((store)=>store.authReducer.auth);
  console.log("isAuth home",isAuth);

  return (
    <div>Home</div>
  )
}

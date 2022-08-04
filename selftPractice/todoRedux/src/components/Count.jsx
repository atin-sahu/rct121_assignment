import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../redux/count/Action'

export const Count = () => {

  const count = useSelector((state)=>(state.count));
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign:"center"}}>
        <div>Count : {count}</div>
        <button onClick={()=>dispatch(addNumber(1))}>increase</button>
        <button onClick={()=>dispatch(addNumber(-1))}>decrease</button>
    </div>
    
  )
}

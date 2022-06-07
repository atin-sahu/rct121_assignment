import { AddCounter,SubCounter } from "../redux/counter/Action";
import { useDispatch, useSelector } from "react-redux";


export const Counter = ()=>{
    const count = useSelector((state) => (state.counterReducer.count));
    const dispatch = useDispatch();
    console.log("count",count);
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Count : {count} </h1>
            <button onClick={()=>dispatch(AddCounter(1))}>AddCount</button>
            <button onClick={()=>dispatch(SubCounter(-1))}>SubCount</button>
        </div>
    )
}
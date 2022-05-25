import { useReducer } from "react"


const initState = {
    clicks:0,
    counter:0
}

const counterAction = {
    INC:"INC",
    DEC:"DEC",
    RESET:"RESET"
}

const reducer = (state,action)=>{
    switch(action.type) {
        case counterAction.INC : { return {...state, counter: state.counter +1, clicks: state.clicks+1}}
        case counterAction.DEC : { return {...state, counter: state.counter -1, clicks: state.clicks+1}}
        case counterAction.RESET : { return {...initState}}
        default : return state;
    }
}

export const Counter = ()=>{
  const [state, dispatch] = useReducer(reducer,initState)

    return (
        <div>
            <div>
                <h1>Counter : {state.counter}</h1>
                <h1>clicks : {state.clicks}</h1>
                <button onClick={()=>dispatch({type:counterAction.INC})}>Add</button>
                <button onClick={()=>dispatch({type:counterAction.DEC})}>sub</button>
                <button onClick={()=>dispatch({type:counterAction.RESET})}>RESET</button>
            </div>
        </div>
    )
}
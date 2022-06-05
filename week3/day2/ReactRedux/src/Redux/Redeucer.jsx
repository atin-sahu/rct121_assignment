import { Action } from "./Action"

export const reducer = (state,action)=>{
    console.log("action",action);
    switch (action.type) {
        case Action.inc:return {...state, count:state.count+action.payload}
        case Action.dec:return {...state, count:state.count-action.payload}
           
        default: return {  state }
    }
}
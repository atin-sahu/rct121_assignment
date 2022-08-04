import { add, sub } from "./Action";

const initState = {count:0};

export const CReducer = (state=initState,action) => {
    switch (action.type) {
        case add:{
            const value = action.payload + state.count;
            return {...state, count:value}
        }
        case sub:{
            const value = action.payload + state.count;
            return {...state, count:value}
        }
    
        default:{ 
            return state
        };
    }
}
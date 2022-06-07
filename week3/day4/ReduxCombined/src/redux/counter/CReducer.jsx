import { AddCount, SubCount } from "./Action";

const initState = { count: Number(localStorage.getItem("counter")) || 0 };
console.log(initState.count)
export const CReducer = (state = initState, action) => {
  switch (action.type) {
    case AddCount:{
        const value = action.payload + state.count;
        localStorage.setItem("counter",value);
        return { ...state, count: value };
    }
        
    case SubCount:{
        const value = action.payload + state.count;
        localStorage.setItem("counter",value);
        return { ...state, count: value };
    }    

    default:
      return  state ;
  }
};

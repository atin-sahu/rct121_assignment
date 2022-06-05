import { AddTodoFail, AddTodoReq, AddTodoSucc, GetTodoFail, GetTodoReq, GetTodoSucc } from "./Action";

const initState = {
    loading:false,
    todos:[],
    error:false
}

export const TReducer = (state=initState,action)=>{
    switch (action.type) {
        case GetTodoReq: {return { ...state, loading:true, error:false }};
        case GetTodoSucc: {return { ...state, todos:action.payload, loading:false  }};
        case GetTodoFail: {return { ...state, loading:false, error:true }};
        case AddTodoReq: {return { ...state, loading:true, error:false }};
        case AddTodoSucc: {return { ...state, loading:false  }};
        case AddTodoFail: {return { ...state, loading:false, error:true }};
    
        default: return state ;
    }
}
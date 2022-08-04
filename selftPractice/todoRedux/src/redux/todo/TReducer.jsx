import { ADD_TODO_FAIL, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DEL_TODO_FAIL, DEL_TODO_REQUEST, DEL_TODO_SUCCESS, GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_SUCCESS, UPD_TODO_FAIL, UPD_TODO_REQUEST, UPD_TODO_SUCCESS } from "./Action";

const initState = {
    loading:false,
    error:false,
    todos:[]
}

export const TReducer = (state=initState,action)=>{
    switch (action.type) {
        case GET_TODO_REQUEST:{ return {...state, loading:true,error:false}}
        case GET_TODO_SUCCESS:{ return {...state, loading:false, todos:action.payload}}
        case GET_TODO_FAIL:{ return {...state, loading:false, error:true} }
        
        case DEL_TODO_REQUEST:{ return {...state, loading:true}}
        case DEL_TODO_SUCCESS:{ return {...state, loading:false}}
        case DEL_TODO_FAIL:{ return {...state,loading:false, error:true}}

        case ADD_TODO_REQUEST:{ return {...state, loading:true}}
        case ADD_TODO_SUCCESS:{ return {...state, loading:false}}
        case ADD_TODO_FAIL:{ return {...state,loading:false, error:true}}

        case UPD_TODO_REQUEST:{ return {...state, loading:true}}
        case UPD_TODO_SUCCESS:{ return {...state, loading:false}}
        case UPD_TODO_FAIL:{ return {...state,loading:false, error:true}}

        default: { return state };
    }
}
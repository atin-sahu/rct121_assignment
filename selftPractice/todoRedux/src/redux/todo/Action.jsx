import axios from "axios";

// for get all todos

export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";

const getTodoReq = ()=>({type:GET_TODO_REQUEST})
const getTodoSucc = (data)=>({type:GET_TODO_SUCCESS, payload:data})
const getTodoFail = ()=>({type:GET_TODO_FAIL})

export const getTodos = (dispatch)=>{
    dispatch(getTodoReq())
    return axios.get("http://localhost:8080/todos")
    .then((res) => {
        dispatch(getTodoSucc(res.data))
    }).catch((error)=>{
        dispatch(getTodoFail());
    })
}

// for delete todo

export const DEL_TODO_REQUEST = "DEL_TODO_REQUEST";
export const DEL_TODO_SUCCESS = "DEL_TODO_SUCCESS";
export const DEL_TODO_FAIL = "DEL_TODO_FAIL";

const delTodoReq = ()=>({type:DEL_TODO_REQUEST})
const delTodoSucc = ()=>({type:DEL_TODO_SUCCESS})
const delTodoFail = ()=>({type:DEL_TODO_FAIL})

export const deleteTodos = (dispatch,id)=>{
    console.log("delete id",id);
    dispatch(delTodoReq());
    return axios.delete(`http://localhost:8080/todos/${id}`)
    .then(()=>{
        dispatch(delTodoSucc())
    }).catch((error)=>{
        dispatch(delTodoFail());
    })
}

// for add todo

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";

const addTodoReq = ()=>({type:ADD_TODO_REQUEST})
const addTodoSucc = (data)=>({type:ADD_TODO_SUCCESS,payload:data})
const addTodoFail = ()=>({type:ADD_TODO_FAIL})

export const addTodos = (dispatch,title,status)=>{
    dispatch(addTodoReq())
    return axios.post(`http://localhost:8080/todos`,{title,status})
    .then(()=>{
        dispatch(addTodoSucc())
    }).catch((error)=>{
        dispatch(addTodoFail());
    })
}

// for update todo

export const UPD_TODO_REQUEST = "UPD_TODO_REQUEST";
export const UPD_TODO_SUCCESS = "UPD_TODO_SUCCESS";
export const UPD_TODO_FAIL = "UPD_TODO_FAIL";

const updTodoReq = ()=>({type:UPD_TODO_REQUEST})
const updTodoSucc = (data)=>({type:UPD_TODO_SUCCESS,payload:data})
const updTodoFail = ()=>({type:UPD_TODO_FAIL})

export const updTodos = (dispatch,title,id)=>{
    dispatch(updTodoReq())
    return axios.patch(`http://localhost:8080/todos/${id}`,{title})
    .then(()=>{
        dispatch(updTodoSucc())
    }).catch((error)=>{
        dispatch(addTodoFail());
    })
}
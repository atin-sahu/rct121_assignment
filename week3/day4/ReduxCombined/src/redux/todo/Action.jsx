
import axios from "axios";

export const GetTodoReq= "GetTodoReq";
export const GetTodoSucc = "GetTodoSucc";
export const GetTodoFail = "GetTodoFail";
export const AddTodoReq= "AddTodoReq";
export const AddTodoSucc = "AddTodoSucc";
export const AddTodoFail = "AddTodoFail";

export const gettodoReq = ()=>({
    type:GetTodoReq
})

export const gettodoSucc = (data)=>({
type:GetTodoSucc , payload:data
})

export const gettodoFail = ()=>({
    type:GetTodoFail
})

export const addtodoReq = ()=>({
    type:AddTodoReq
})

export const addtodoSucc = (data)=>({
type:AddTodoSucc , payload:data
})

export const addtodoFail = ()=>({
    type:AddTodoFail
})

export const getTodos = () => (dispatch, getState) => {
    console.log("token is", getState().authReducer.token);
    dispatch( gettodoReq() )
    return axios({
        url:"http://localhost:8080/todos",
        method:"GET",
    }).then((res)=>{
        dispatch( gettodoSucc(res.data) )
    }).catch((err)=>{
        dispatch( gettodoFail() );
    })
}

export const addTodos = ({title}) => (dispatch)=>{
    dispatch( addtodoReq() )
    return axios({
        url:"http://localhost:8080/todos",
        method:"POST",
        data:{
            title,
            status:false,
        }
    }).then((res)=>{   
        dispatch( addtodoSucc(res.data) )
    }).catch((err)=>{
        dispatch( addtodoFail() );
    })
}
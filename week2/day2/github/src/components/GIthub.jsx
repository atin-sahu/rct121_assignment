import { useEffect, useReducer } from "react"
import axios from "axios"

const gitActions ={
    fetch:"fetch",
    success:"success",
    fail:"fail"
}

const initState = {
    loading:true,
    error:false,
    data:null,
}

const reducer = (state, action)=>{
    switch (action.type) {
        case gitActions.fetch: return{...state, loading:true,error:false, data:null }
        case gitActions.success: return{...state, loading:false,error:false, data:action.payload}  
        case gitActions.fail: return{...state, loading:false,error:true}  
    
        default:return state
    }
}

export const Github = ()=>{
    const [{loading, error, data},dispatch] = useReducer(reducer, initState)
    useEffect(()=>{
     
            dispatch({type:gitActions.fetch})
            axios({
                url:"https://api.github.com/search/users",
                method:"get",
                params:{
                    q:"masai",

                }
            }).then(res => {dispatch({type:gitActions.success, payload:res.data})})
            .catch((err)=>{
                dispatch({type:gitActions.fail})
            })
    },[])

    return (
        <div>
            {loading && <div>loading</div>}
            {error && <div>error</div>}
            {
                data ?.items.map( (item) => (<div key={item.id}>{item.login}</div>))
            }
        </div>
    )
}
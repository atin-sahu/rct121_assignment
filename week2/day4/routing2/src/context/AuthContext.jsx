import { createContext, useReducer, useState } from "react";
export const AuthContext = createContext();

const initState = {
    isAuth:false,
    token:null
}

const authReducer = (state,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS": return { ...state, isAuth:true, token:action.payload}
        case "LOGOUT_SUCCESS": return { ...state, isAuth:false, token:null}
        default: return {...state}
    }
}

export const AuthContextProvider = ({children})=>{
    // const [isAuth, setIsAuth] = useState(false)

    // const changeAuth = ()=>{
    //     console.log(isAuth);
    //     setIsAuth(!isAuth)  
    // }

    const [state, dispatch] = useReducer(authReducer,initState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

import { Button, Center, Text } from "@chakra-ui/react"
import axios from "axios";
import { useContext, useState } from "react"
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext"
export const Login = ()=>{
    const [state, dispatch ] = useContext(AuthContext);

    const usrLogin = async ()=>{
        try {
            const res = await axios.post("https://reqres.in/api/login",{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
            .then((res)=>(res.data));
            dispatch({type:"LOGIN_SUCCESS",payload:res.token})
        } catch (error) {
            alert("request fail");
        }
        
    }

    return (
        <div>
            <div>
                {state.isAuth && <Navigate to='/users'></Navigate>}
                <Center><Text fontSize='3xl' >Login Page</Text></Center>
                <Center><Button colorScheme='green' onClick={()=>{usrLogin()}}>Login</Button></Center>
            </div>
        </div>
    )
}
import { Box, Center, Flex, Text, Input, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import  axios  from "axios"
import { Navigate } from "react-router-dom";
export const Login = () => {
    const [state,dispatch] = useContext(AuthContext);

    const [id,setId] = useState("");
    const [pass,setPass] = useState("");

    const chekDetail = async (event)=>{
       event.preventDefault();
       try {
            let res = await axios.post("https://reqres.in/api/login",{email:id,password:pass})
            .then((res)=>(res.data));
            console.log(res)
            dispatch({type:"LOGIN_SUCCESS", payload:res.token})
       } catch (error) {
           console.log(error.message);
       }
    }

 

  return (
    <Box>
        {state.isAuth && <Navigate to='/'></Navigate>}
      <form onSubmit={chekDetail}>
            <Box
                border="1px solid black"
                width="50%"
                display="flex"
                flexDirection="column"
                margin="auto"
                mt={10}
                alignItems="center"
                p={5}
                gap={5}
            >
                <Text fontSize="5xl">Login Form</Text>
                <Input onChange={(e)=>{setId(e.target.value)}} placeholder="enter your id"></Input>
                <Input onChange={(e)=>{setPass(e.target.value)}} placeholder="enter your password"></Input>
                <Button disabled={state.isAuth} type='submit' >Login</Button>
            </Box>
      </form>
    </Box>
  );
};

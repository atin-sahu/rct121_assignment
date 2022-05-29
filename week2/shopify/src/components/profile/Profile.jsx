import { Box,Button,Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"

export const Profile = ()=>{
    const [state,dispatch] = useContext(AuthContext);

    return (
        <Box>
            {!state.isAuth && <Navigate to='/'></Navigate>}
            <Box textAlign='center'>
                <Text fontSize='5xl'>Profile Page</Text>
            </Box>
            <Button bg='red' onClick={()=>{dispatch({type:"LOGOUT_SUCCESS", token:null})}}>Logout</Button>
        </Box>
    )
}
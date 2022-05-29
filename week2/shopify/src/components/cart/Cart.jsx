import { Box,Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Cart = ()=>{
    const [state,dispatch] = useContext(AuthContext);

    return (
        <Box>
            {!state.isAuth && <Navigate to='/login'></Navigate>}
             
            <Box textAlign='center'>
                <Text fontSize='5xl'>Cart Page</Text>
            </Box>
        </Box>
    )
}
import { Box, Button, Center,Text } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Navbar = ()=>{
    const [isAuth,setIsAuth] = useContext(AuthContext);
    return (
        <div>
            <Box>
                <Center><Text fontSize='3xl' mb={10}>Login Page</Text></Center>
                <Box height={50} bg='blue' color='white' borderBottom='1px solid black'>
                   
                </Box>
            </Box>
        </div>
    )
}
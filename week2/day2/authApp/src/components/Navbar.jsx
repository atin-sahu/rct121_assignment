import { Box, Button, Center } from "@chakra-ui/react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Navbar = ()=>{
    const [isAuth,toggleAuth] = useContext(AuthContext);

    return (
        <Box>
            <Box height={50} bg='blue' color='white' borderBottom='1px solid black'>
                <Center>
                    {isAuth ?(
                        <Button colorScheme='red' onClick={()=>toggleAuth()} >Logout</Button>
                    ): (
                        <Button colorScheme='green' onClick={()=>toggleAuth()} >Login</Button>
                    ) }
                </Center>
            </Box>
        </Box>
    )
}
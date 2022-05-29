import { Box,Button,Icon,Text } from "@chakra-ui/react"
import { MdLocalMall,MdPerson  } from 'react-icons/md'
import { useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navbar = ()=>{
    const [state,dispatch] = useContext(AuthContext);
   console.log(state);

    return(
        <Box>
            <Box bg='blue' borderBottom='1px solid white' p='2' display='flex' alignItems='center'>
                <Box>
                    <Link to='/' style={{textDecoration:'none',fontWeight:'bold'}} >Shopify</Link>
                </Box>
                <Box display='flex' color='white' margin='auto' width='50%' justifyContent='space-around'>
                    <Box>
                        <Link to='/men' style={{textDecoration:"none"}}>Men's</Link>
                    </Box>
                    <Box>
                        <Link to='/women' style={{textDecoration:"none"}}>Women's</Link>
                    </Box>
                    <Box>
                        <Link to='/kid' style={{textDecoration:"none"}}>Kid's</Link>
                    </Box>
                    <Box>
                        <Link to='/about' style={{textDecoration:"none"}}>About</Link>
                    </Box>
                    <Box>
                        <Link to='/contact' style={{textDecoration:"none"}}>Contact</Link>
                    </Box>
                    <Box>
                        <Link to='/faq' style={{textDecoration:"none"}}>FAQ ?</Link>
                    </Box>
                </Box>
                <Box display='flex' gap={10} alignItems='center'>
                    <Link to='/cart'>
                        <Icon as={MdLocalMall} fontSize='3xl' />
                    </Link>
                    {state.isAuth ? (
                        <Box >
                            <Link to='/profile'>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Icon as={MdPerson} fontSize='3xl' />
                                    <Box display='flex' alignItems='center' flexDirection='column'>
                                        <Text fontSize='small' color='white'>Welcome</Text>
                                        <Text color='white'>Atin Sahu</Text>
                                    </Box>
                                </Box>  
                            </Link>
                        </Box>
                    ):(<Link to='/login'><Text fontWeight='bold' bg='white' p={2} borderRadius='10px'>Login</Text></Link>)}
                </Box>
            </Box>
        </Box>
    )
}
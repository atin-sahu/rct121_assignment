import { Box, Center, SimpleGrid,Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Footer = ()=>{
    return (
        <Box>
            <SimpleGrid columns={{sm:1,  lg:3}}>
                <Box bg='black' color='white' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3}>Contact Us</Text></Center>
                    <Text>Contact NUmber: 21324</Text>
                    <Text>Contact NUmber: 21324</Text>
                    <Text>Contact NUmber: 21324</Text>
                    <Text>Contact NUmber: 21324</Text>
                </Box>
                <Box bg='black' color='blue' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3} color='white'>Importants Links...</Text></Center>
                    <Link to='/men'>Men's Page</Link>
                    <Link to='/women'>Women's Page</Link>
                    <Link to='/kid'>Kid's Page</Link>
                    <Link to='/about'>About Page</Link>
                    <Link to='/contact'>Contact Page</Link>
                </Box>
                <Box bg='black' color='white' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3}>Services</Text></Center>
                    <Text>Web Development</Text>
                    <Text>Web Development</Text>
                    <Text>Web Development</Text>
                    <Text>Web Development</Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
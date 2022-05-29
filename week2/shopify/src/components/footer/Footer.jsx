import { Box, Center, SimpleGrid,Text,Link, Icon } from "@chakra-ui/react"
import { MdContactPhone, MdEmail, MdFacebook, MdLocationCity } from "react-icons/md"
import { FaInstagram, FaTwitter,FaWhatsapp  } from "react-icons/fa"

export const Footer = ()=>{
    return (
        <Box>
            <SimpleGrid columns={{sm:1,  lg:3}}>
                <Box bg='black' color='white' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3}>Contact Us</Text></Center>
                    <Box display='flex' gap={5} alignItems='center'>
                        < MdContactPhone></MdContactPhone>
                        <Text>+91 63919 77171</Text>
                    </Box>
                    <Box display='flex' gap={5} alignItems='center'>
                        < MdEmail></MdEmail>
                        <Text>atinsahu71@gmail.com</Text>
                    </Box>
                    <Box display='flex' gap={5} alignItems='center'>
                        < MdLocationCity></MdLocationCity>
                        <Text>226401, Lucknow, UP, INDIA</Text>
                    </Box>
                    <SimpleGrid columns={{sm:4}} gap={3} mt={5}>
                        <Link href="https://google.com" target='_blank'><Box><MdFacebook fontSize='50px'></MdFacebook></Box></Link>
                        <Link href="https://google.com" target='_blank'><Box><Icon as={ FaWhatsapp } fontSize='50px'></Icon></Box></Link>
                        <Link href="https://google.com" target='_blank'><Box><Icon as={ FaTwitter } fontSize='50px'></Icon></Box></Link>
                        <Link href="https://google.com" target='_blank'><Box><Icon as={ FaInstagram } fontSize='50px'></Icon></Box></Link>
                    </SimpleGrid>
                </Box>
                <Box bg='black' color='blue' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3} color='white'>Importants Links...</Text></Center>
                    <Link to='/men'>Men's Page</Link>
                    <Link to='/women'>Women's Page</Link>
                    <Link to='/kid'>Kid's Page</Link>
                    <Link to='/about'>About Page</Link>
                    <Link to='/contact'>Contact Page</Link>
                    <Link to='/faq'>FAQ Page</Link>
                </Box>
                <Box bg='black' color='white' padding='10px' display='flex' flexDirection='column' alignItems='center'>
                    <Center><Text mb={3}>Services</Text></Center>
                    <Text>20 % on Every Item</Text>
                    <Text>Home Delivery</Text>
                    <Text>25 % on Shop over 5000</Text>
                    <Text>24 X 7 Availability</Text>
                    <Text>Free Delivery on shop over 2000</Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}
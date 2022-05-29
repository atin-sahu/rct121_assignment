import { Box, Center, Text } from "@chakra-ui/react"
import { Footer } from "../footer/Footer"
import { Banner } from "./Banner"
import { ShopbyCategory } from "./ShopbyCategory"
import { ShopbyTrend } from "./ShopbyTrend"

export const Home = () =>{

    return (
        <Box>
            <Center><Text fontSize='6xl'>Home page</Text></Center>
            <Banner></Banner>
            <ShopbyCategory></ShopbyCategory>
            <ShopbyTrend></ShopbyTrend>
            <Footer></Footer>
        </Box>
    )
}
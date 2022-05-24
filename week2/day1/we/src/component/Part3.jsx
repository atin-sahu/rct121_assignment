import { Box, Center, Grid, GridItem, Text, Flex, SimpleGrid } from "@chakra-ui/react";

export const Part3 = ()=>{

    return (
       <Box border='1px solid black' height='100vh' display='flex'  >
            <Box display='flex' flexDirection='column' gap='5' width='60%' margin='auto' >
            <SimpleGrid
            columns={{
                sm: 1,
                md: 2,
                lg: 2,
              }}

              spacing={5}
            >
                <Box bg='yellow' height='200px'></Box>
                <Box bg='yellow' height='200px'></Box>
            </SimpleGrid>
            <SimpleGrid
            columns={{
                sm: 1,
                md: 1,
                lg: 1,
              }}

              spacing={5}
            >
                <Box bg='pink' height='200px'></Box>
            </SimpleGrid>
            <SimpleGrid
            columns={{
                sm: 1,
                md: 1,
                lg: 3,
              }}

              spacing={5}
            >
                <Box bg='blue' height='200px'></Box>
                <Box bg='blue' height='200px'></Box>
                <Box bg='blue' height='200px'></Box>
            </SimpleGrid>
        </Box>
       </Box>
    )
}
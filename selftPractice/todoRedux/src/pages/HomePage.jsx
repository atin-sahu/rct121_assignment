import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const HomePage = () => {
  return (
    <Box align="center" bgColor="#b5eecc" py="30vh" height="100vh">
        <Box height="100px" bgColor="rgb(179,212,255)" width="50%" display="flex" placeItems="center" placeContent="center">
            <Text fontWeight="semibold" fontSize="3xl">Home Page</Text>
        </Box>
    </Box>
  )
}

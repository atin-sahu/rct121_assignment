import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const HomePage = () => {
  return (
    <Box align="center" py="20vh">
        <Box height="100px" bgColor="whitesmoke" width="50%" display="flex" placeItems="center" placeContent="center">
            <Text fontWeight="semibold" fontSize="3xl">Home Page</Text>
        </Box>
    </Box>
  )
}

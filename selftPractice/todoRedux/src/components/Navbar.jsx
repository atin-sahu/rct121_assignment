import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box bgColor="whitesmoke" px={5} py={2}>
        <Box display="flex" bgColor="white" justifyContent="space-between" p={2}>
            <Box>
                <Text fontWeight="semibold" cursor="pointer">Redux</Text>
            </Box>
            <Box display="flex" gap={5}>
                <Link to="/counter"><Text fontWeight="semibold">counter</Text></Link>
                <Link to="/todo"><Text fontWeight="semibold">todo</Text></Link>
            </Box>
        </Box>
    </Box>
  )
}
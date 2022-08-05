import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box bgColor="rgb(179,212,255)" px={5} py={2}>
        <Box display="flex" bgColor="whitesmoke"  justifyContent="space-between" p={2}>
            <Box>
                <Link to="/"><Text fontWeight="semibold" cursor="pointer">Redux</Text></Link>
            </Box>
            <Box display="flex" gap={5}>
              <Link to="/counter"><Text fontWeight="semibold">Counter</Text></Link>
              <Link to="/list-todo"><Text fontWeight="semibold">List-Todo</Text></Link>
              <Link to="/add-todo"><Text fontWeight="semibold">Add-Todo</Text></Link>
            </Box>
        </Box>
    </Box>
  )
}
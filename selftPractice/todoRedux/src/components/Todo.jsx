import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Count } from './Count'

export const Todo = () => {

  
  return (
    <Box >
      <Count></Count>
      <Box align="center">
        <Text fontWeight="semibold">Todo App</Text>

      </Box>
    </Box>
  )
}
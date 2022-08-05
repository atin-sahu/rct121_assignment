import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../redux/count/Action'

export const Count = () => {

  const count = useSelector((state)=>(state.countReducer.count));
  // console.log("count",count);
  const dispatch = useDispatch();

  return (
    <Box bgColor="#b5eecc" h="100vh" >
      <Text align="center" fontWeight="semibold" fontSize="3xl" pt={10} pb="20vh">COUNTER</Text>
      <Box align="center" bgColor="rgb(179,212,255)" py={10} w="50%" m="auto">
        <Text fontSize="4xl" fontWeight="semibold">Count : {count}</Text>
        <Box display="flex" gap={5} justifyContent='center' py={4}>
          <Button variant="unstyled" bgColor="whitesmoke" w="20%" size="md" onClick={()=>dispatch(addNumber(1))}>increase</Button>
          <Button variant="unstyled" bgColor="whitesmoke" w="20%" size="md" onClick={()=>dispatch(addNumber(-1))}>decrease</Button>
        </Box>
      </Box>
    </Box>
    
  )
}

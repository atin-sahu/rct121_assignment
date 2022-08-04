import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber } from '../redux/count/Action'

export const Count = () => {

  const count = useSelector((state)=>(state.countReducer.count));
  console.log("count",count);
  const dispatch = useDispatch();

  return (
    <Box align="center" py={4}>
        <Text>Count : {count}</Text>
        <Box display="flex" gap={2} justifyContent='center' py={4}>
          <Button variant="outline" size="xs" onClick={()=>dispatch(addNumber(1))}>increase</Button>
          <Button variant="outline" size="xs" onClick={()=>dispatch(addNumber(-1))}>decrease</Button>
        </Box>
    </Box>
    
  )
}

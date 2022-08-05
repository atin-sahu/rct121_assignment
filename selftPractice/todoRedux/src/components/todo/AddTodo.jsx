import { Box, Button, FormControl, FormHelperText, FormLabel, Input, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTodos } from '../../redux/todo/Action'

export const AddTodo = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state)=>(state.todoReducer.loading))
  const [todo,setTodo] = useState("");
  const [status,setStatus] = useState(false);
  
  // just for console thing
  // const newTodo = {
  //   title:todo,
  //   status:false
  // }


  const handleAdd = ()=>{
    // console.log("newTodo",newTodo);
    addTodos(dispatch,todo,status)
    .then(()=>alert("Todo Added Successfully !!!!!!!"))
    .then(()=>{setTodo("")});
  }

  return (
    <Box>
      { loading ? (
        <Box bgColor="rgb(179,212,255)" height="90vh" py="20vh">
          <Box bgColor="#b5eecc" w="50%" m="auto">
            <Text align="center" fontWeight="semibold" fontSize="6xl" mt="20vh">Loading...........</Text>
          </Box>
        </Box>
      ):(
        <Box bgColor="#b5eecc" h="100vh">
        <Text align="center" fontWeight="semibold" fontSize="3xl" py={5}>ADD TODO</Text>
        <Box width="50%" bgColor="rgb(179,212,255)" m="auto" py={20} align="center">
          <FormControl w="sm" >
            <FormLabel>Enter Todo</FormLabel>
            <Input placeholder='enter new todo' onChange={(e)=>setTodo(e.target.value)} bgColor="whitesmoke" type='email' />
          </FormControl>
          <Button disabled={!todo} w="70%" onClick={()=>handleAdd()} my={10} >Add Todo</Button>
        </Box>
      </Box>
      )}
    </Box>
  )
}

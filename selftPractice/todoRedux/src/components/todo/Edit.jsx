import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { updTodos } from '../../redux/todo/Action'


export const Edit = () => {

  const {id} = useParams();
  const [editableData,setEditableData] = useState({});

  useEffect(() => {
    getEditableData();
  }, []);

  const getEditableData = async () => {
    const data = await axios.get(`http://localhost:8080/todos/${id}`)
    .then((data) => setEditableData(data.data));
  };
  console.log("editableData",editableData);

  const dispatch = useDispatch();
  const [editedTodo,setEditedTodo] = useState("");
  const loading = useSelector((state)=>(state.todoReducer.loading))  


  const handleEdit = ()=>{
    console.log("updated todo",editedTodo);
    updTodos(dispatch,editedTodo,id);
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
        <Text align="center" fontWeight="semibold" fontSize="2xl" py={5}>Edit Todo</Text>
        <Box width="50%" bgColor="rgb(179,212,255)" m="auto" py={20} align="center">
          <FormControl w="sm" >
            <FormLabel>Enter Correct Todo</FormLabel>
            <Input onChange={(e)=>setEditedTodo(e.target.value)} bgColor="whitesmoke" type='email' />
          </FormControl>
          <Button onClick={()=>handleEdit()} my={5} >Update</Button>
        </Box>
      </Box>
      )}
    </Box>
  )
}

import { Box, Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos, getTodos } from '../../redux/todo/Action';
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


export const ListTodo = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state)=>(state.todoReducer.todos))
  const loading = useSelector((state)=>(state.todoReducer.loading))
  // console.log("todos",todos);
  // console.log("loading",loading);

  useEffect(()=>{
    getTodos(dispatch);
  },[])

  const handleDelete = (id)=>{
    return deleteTodos(dispatch,id)
    .then(()=>getTodos(dispatch))
  }

  return (
    
    <Box >
      {todos.length == 0 ? (
          <Box bgColor="#b5eecc" h="100vh" >
          <Text align="center" fontWeight="semibold" fontSize="3xl" pt={10} pb="20vh">ADD TODO</Text>
          <Box align="center" bgColor="rgb(179,212,255)" py={10} w="50%" m="auto">
            <Text fontSize="4xl" fontWeight="semibold">Your Todo IS Empty !</Text>
            <Link to="/add-todo"><Text fontWeight="semibold" py={10} color="red"> Click Here To Add A New Todo</Text></Link>
            {/* <Box display="flex" gap={5} justifyContent='center' py={4}>
              <Button variant="unstyled" bgColor="whitesmoke" w="20%" size="md" onClick={()=>dispatch(addNumber(1))}>increase</Button>
              <Button variant="unstyled" bgColor="whitesmoke" w="20%" size="md" onClick={()=>dispatch(addNumber(-1))}>decrease</Button>
            </Box> */}
          </Box>
        </Box>
      ):(
          <Box>
             { loading ? (
        <Box bgColor="rgb(179,212,255)" height="90vh" py="20vh">
          <Box bgColor="#b5eecc" w="50%" m="auto">
            <Text align="center" fontWeight="semibold" fontSize="6xl" mt="20vh">Loading...........</Text>
          </Box>
        </Box>
      ):(
        <Box  bgColor="#b5eecc">
          <Text align="center" fontWeight="semibold" fontSize="3xl" pt={5}>LIST TODO</Text>
          <Box  p={5} height="100vh">
            <TableContainer bgColor="rgb(179,212,255)" width="2xl" m="auto" py={5} >
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>To-Do</Th>
                    <Th>DELETE</Th>
                    <Th>EDIT</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {todos.map((todo)=>{
                    return <Tr key={todo.id}>
                      <Td>{todo.id}</Td>
                      <Td>{todo.title}</Td>
                      <Td ><Button onClick={()=>handleDelete(todo.id)} colorScheme="red" size="xs" rightIcon={<DeleteIcon></DeleteIcon>}> DELETE</Button></Td>
                      <Td >
                        <Link to={`/list-todo/edit/${todo.id}`}>
                          <Box display="flex" gap={1} alignItems="center">
                            <EditIcon color="orange"></EditIcon>
                            <Text color="orange">EDIT</Text>
                          </Box>
                        </Link>
                      </Td>
                  </Tr>
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
          </Box>
      )}
     
    </Box>
  )
}
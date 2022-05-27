import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, Button, Center,Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const Users = ()=>{

    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const [state] = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page,setPage] = useState(Number(searchParams.get("page") || 1));
    const [totalPages, setTotalpages] = useState(0);

    const fetchData = async ()=>{
        try {
            const data = await axios.get(`https://reqres.in/api/users?page=${page}`)
            .then((data)=>(data.data));
            console.log(data);
            setTotalpages(data.total_pages);
            setLoading(false);
            setUsers(data.data);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();    
    },[page])

    useEffect(()=>{
        setSearchParams({page})
    },[page,searchParams])

    return (
        <div>
            {
                state.isAuth ? 
                    (
                        <div>
                            {loading && <p>.....Loading</p>}
                            <Center><Text fontSize='3xl'>Token:{state.token}</Text></Center>
                            <Center>
                                <Box display='flex' width='30%' border='1px solid black' justifyContent='space-around'>
                                    <Button disabled={page==1} colorScheme='blue' onClick={()=>(setPage(page-1))} > Prev</Button>
                                    <Button disabled={page === totalPages} colorScheme='blue' onClick={()=>(setPage(page+1))} >Next</Button>
                                </Box>
                            </Center>
                            {users.map((user)=>(
                                <div key = {user.id} style={{border:"1 px solid black", }}>
                                    <p>first name : {user.first_name}</p>
                                    <p>last name : {user.last_name}</p>
                                    <Link to={`/users/${user.id}`}> see more..</Link>
                                </div>
                            ))}
                        </div>) : (
                        <Navigate to='/login'></Navigate>
                    )
            }
        </div>
    )
}
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = ()=>{

    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        try {
            const data = await axios.get("https://reqres.in/api/users")
            .then((data)=>(data.data.data));
            console.log(data);
            setLoading(false);
            setUsers(data);
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <div>
            {loading && <p>.....Loading</p>}
            <div>
                {users.map((user)=>(
                     <div key = {user.id} style={{border:"1 px solid black", }}>
                        <p>first name : {user.first_name}</p>
                        <p>last name : {user.last_name}</p>
                        <Link to={`/users/${user.id}`}> see more..</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
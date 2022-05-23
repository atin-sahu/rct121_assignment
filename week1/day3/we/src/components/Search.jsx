import { useEffect, useState } from "react"
import axios from "axios"

export const Search = ()=>{
    const [text, setText] = useState("")
    const [usr, setUsr] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        getUsr()
     },[])

    const getUsr = async ()=>{
        const data = await axios.get("https://api.github.com/users")
        .then((data)=>data.data);
        setUsr(data);
        // console.log("landdata",data);
    } 
    
    const handlepage = (value)=>{
        setPage((page) => (page+value));
        console.log("update",page);
        handleSerach();
    }

    // const pagination = (arr,page, pagesize)=>{

    //     return arr.slice((page-1)*pagesize, page*pagesize);

    // }

    const handleSerach = async()=>{
        
        const data = await axios.get(`https://api.github.com/search/users?q=${text}&page=${page}&per_page=${5}`)
        .then((data)=>data.data);
        setUsr(data.items);
        // console.log("search user", data.items);
        // console.log(text);
    }
    return (
        <div>
            <input placeholder="enter query" onChange={(e)=>{setText(e.target.value)}}></input>
            <button onClick={()=>handleSerach()}>serch</button>
            <div >
                {usr.map((e)=>{
                  return <div key={e.id}>
                        <img width='50px' src={e.avatar_url} />
                        <span>{e.login}</span>
                   </div>
                })}
            </div>
            <div>
                <button disabled={page === 1 } onClick={() =>handlepage(-1)}>prev</button>
                <button onClick={() =>handlepage(1)} >next</button>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import axios from "axios"

export const Search = ()=>{
    const [text, setText] = useState("")
    const [usr, setUsr] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        getUsr()
     },[])

    useEffect(()=>{
        handleSerach();
    },[page])

    const getUsr = async ()=>{
        const data = await axios.get("https://api.github.com/users")
        .then((data)=>data.data);
        setUsr(data);
    } 

    const handleSerach = async()=>{
        
        const data = await axios.get(`https://api.github.com/search/users?q=${text}&page=${page}&per_page=${5}`)
        .then((data)=>data.data);
        setUsr(data.items);
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
                <button disabled={page === 1 } onClick={() =>setPage(page-1)}>prev</button>
                <PageComponent currpage={page} lastpage={5} onPageChange={setPage}></PageComponent>
                <button onClick={() =>setPage(page+1)} >next</button>
            </div>
        </div>
    )
}

const PageComponent = ({currpage,lastpage,onPageChange})=>{
    const arr = new Array(lastpage).fill(0);

    return (
        <div>
            { arr.map( (item,page) => (
                <div>
                    <button onClick={()=>onPageChange(page+1)} disabled={(page+1) == currpage} >{page+1}</button>
                </div>
            ) ) }
        </div>
    )
}
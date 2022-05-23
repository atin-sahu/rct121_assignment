import { useState } from "react"
import { Search } from "./Search";

export const Github = ()=>{
    const [loding, setLoding] = useState(false);
    const toggle = ()=>{
        setLoding(!loding);
    }

    return <div>
        
        <h1>
            atin
        </h1>
        {loding ? <div>...loding</div> : null}
        <button onClick={()=>toggle()}>show</button>
        <Search></Search>
    </div>
}
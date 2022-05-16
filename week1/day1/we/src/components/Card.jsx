
import { useState } from 'react'
import './card.css'

export const Card = (props)=>{
    const [status, setStatus] = useState(false);

    const handleState = ()=>{
        setStatus(!status)
    }

    return <div key={props.props.id} className="main">
        <div >    
            <div className="profile">
                <img src={props.props.avtar} />
            </div>
            <div className="name">
                <h3>{props.props.name}</h3>
                <button onClick={handleState}>show number</button>
            </div> 
            <div className="number">
               {status ? <p>{props.props.number}</p> : null}
            </div>
        </div>
    </div>
}
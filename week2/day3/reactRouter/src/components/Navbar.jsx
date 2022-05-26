import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return (
        <div>
            <p><Link to='/home'>Home</Link></p>
            <p><Link to='/about'>About</Link></p>
            <p><Link to='/users'>Users</Link></p>
        </div>
    )
}
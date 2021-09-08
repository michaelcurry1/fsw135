import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserProvider'

export default function Navbar(){
    const {logout, token} = useContext(UserContext)
    return(
        <div className="navbar">
            { token && <Link to="/Profile">Profile</Link>}
            <Link to="/Issues">Issues</Link>
            { token && <button onClick={logout}>Logout</button>}
        </div>
    )
}
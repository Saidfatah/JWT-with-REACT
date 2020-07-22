import React from 'react'
import { Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/createpost">NEW POST</Link>
            <Link to="/authpage">Account</Link>
        </div>
    )
}

export default Navbar

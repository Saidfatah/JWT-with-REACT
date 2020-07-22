import React,{useState} from 'react'
import { Link} from "react-router-dom";
import { Redirect} from "react-router-dom";

function Navbar() {
    const [redirect,setRedirect]=useState(false)
    const jwtCheck = ()=>localStorage.getItem('token') !=null && localStorage.getItem('token') !='null' 
    const logOut = e=> {
        localStorage.setItem('token',null)
        window.location.reload();
    }
    console.log(localStorage.getItem('token'))
    return (
        <div className="navBar">
            {redirect ?<Redirect to='/'/>:''}
            <Link to="/">Home</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/posts">Posts</Link>
            {jwtCheck() ?  <Link to="/createpost">NEW POST</Link>:''}
            {!jwtCheck() ?  <Link to="/authpage">Account</Link>:''}
            { jwtCheck() ?  <Link to="/authpage" onClick={logOut} >LogOut</Link>:''}
            
        </div>
    )
}

export default Navbar

import React,{useState} from 'react'
import { Redirect} from "react-router-dom";

import axios from 'axios'
function AuthenticationPage() {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [redirect,setRedirect]=useState(false)
    const login = e=>{
         if(username !== '' && password !==''){
            axios.post('http://localhost:4000/login',{username,password})
                 .then(res=>{
                     localStorage.setItem('token',res.data.token)
                     localStorage.setItem('rule',res.data.rule)
                     window.location.reload();
                })
                 .catch(err=>console.log(err))
         }
         else
         {
             console.log('type that shit man!!!')
         }
    }

    return (
        <div>
          <h1>  authenticate your self </h1>
            {redirect ?<Redirect to='/posts'/>:''}
           <input  type="text" placeholder="userName" value={username} onChange={e=>setUserName(e.target.value)}/>
           <input  type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
           <button onClick={login} > Login</button>   
        </div>
    )
}

export default AuthenticationPage

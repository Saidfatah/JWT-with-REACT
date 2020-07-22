import React,{useState} from 'react'
import axios from 'axios'
function AuthenticationPage() {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const login = e=>{
         if(username !== '' && password !==''){
            console.log({username,password})
            axios.post('http://localhost:4000/login',{username,password})
         }
         else
         {
             console.log('type that shit man!!!')
         }
    }

    return (
        <div>
          <h1>  authenticate your self </h1>
           <input  type="text" placeholder="userName" value={username} onChange={e=>setUserName(e.target.value)}/>
           <input  type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
           <button onClick={login} > Login</button>   
        </div>
    )
}

export default AuthenticationPage

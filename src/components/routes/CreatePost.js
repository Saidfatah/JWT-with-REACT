import React,{useState} from 'react'
import axios from 'axios'
function CreatePost() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const createPost =e=>{
        const token = localStorage.getItem('token')
        axios.post('http://localhost:4000/posts/create',{title,body},{headers:{'Authorization': 'Bearer '+token}})
             .then(res=>console.log(res))
             .catch(err=>console.log(err))
    }
    return (
        <div>
             <h1> create new post</h1> 
             <input name="title" placeholder="POST TITLE"  value={title} onChange={e=>setTitle(e.target.value)}/>
             <input name="body" placeholder="POST BODY" value={body} onChange={e=>setBody(e.target.value)} />
             <button onClick={createPost}> create post </button>
        </div>
    )
}

export default CreatePost

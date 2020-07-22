import React from 'react'
import axios from 'axios'
function CreatePost() {

    const createPost =e=>{
        axios.post('http://localhost:4000/posts/create')
             .then(res=>console.log(res))
             .catch(err=>console.log(err))
    }
    return (
        <div>
             <h1> create new post</h1> 
            <input name="title" placeholder="POST TITLE" />
            <input name="body" placeholder="POST BODY" />
            <button onClick={createPost}> create post </button>
        </div>
    )
}

export default CreatePost

import React,{useState,useEffect} from 'react'
import PostContainer from './PostContainer'
import axios from 'axios'
import { set } from 'js-cookie'
function PostsContainer() {
    const [posts,SetPosts]=useState([])
    const getPostsFromDb = ()=>{
        axios.get('http://localhost:4000/posts')
             .then(res=>SetPosts(res.data.posts))
    }
     
    useEffect(() => {
         getPostsFromDb()
     }, [])
    
    return (
        posts.map(post=> <PostContainer key={post.id} post ={post} />)
    )
}

export default PostsContainer

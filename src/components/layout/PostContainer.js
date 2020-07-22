import React from 'react'
import { Link} from "react-router-dom";
function PostContainer(props) {
    return (
        <Link to={"/post/"+props.post.id}>
            <div >
                <div>{props.post.title}</div>
                <div> {props.post.body}</div>
            </div>
        </Link>
    )
}

export default PostContainer

import React from 'react'

function PostContainer(props) {
    return (
        <div>
            <div>{props.post.title}</div>
            <div> {props.post.body}</div>
        </div>
    )
}

export default PostContainer

import React from 'react'

function Post() {
    const jwtCheck = ()=>localStorage.getItem('token') !=null && localStorage.getItem('token') !='null' 
    const getUserRule = ()=>localStorage.getItem('rule') 
    return (
        <div>
            {jwtCheck() ? (getUserRule() =='admin' ?'this admins stuff' :'normal user'  ):'not authenticated '}
        </div>
    )
}

export default Post

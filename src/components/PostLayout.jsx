import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
    return (
        <div className='d-flex ac g-20'>
            <Link to="/postpage/1">Post 1</Link>
            <Link to="/postpage/2">Post 2</Link>
            <Link to="/postpage/3">Post 3</Link>
            <Link to="/postpage/newpost">New Post</Link>
            <Outlet />
        </div>
    )
}

export default PostLayout
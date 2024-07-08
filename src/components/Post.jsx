import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import PostList from './PostList';

const Post = ({ posts, handleDelete }) => {
    return (
        <>
            <div className="post-page">
                {
                    posts.map((post) => (
                        <PostList key={post.id} post={post} handleDelete={handleDelete} />
                    ))
                }
            </div >
        </>
    )
}

export default Post
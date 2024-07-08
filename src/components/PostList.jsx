import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({ post, handleDelete }) => {
  return (
    <div className='bdr d-flex jb'>
      <div>
        <p>Name: <span>{post.name}</span></p>
        <p>Skill: <span>{post.skill}</span></p>
        <p>Design: <span>{post.design}</span></p>
      </div>
      <div className="del-btn">
        <button className='btn btn-del' onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    </div>
  )
}

export default PostList
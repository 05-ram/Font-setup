import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Post from './Post'

const Home = ({ search, setSearch, posts, handleDelete }) => {
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className='h-fit'>
        <Post posts={posts} handleDelete={handleDelete} />
      </div>
      <Footer />
    </>
  )
}

export default Home
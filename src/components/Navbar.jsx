import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
    console.log(search)
    return (
        <nav className='d-flex ac nav-bar jb'>

            <form onSubmit={(e) => e.preventDefault()}>
                <label className='navbar-lbl'>Search For Post</label>
                <input placeholder='search for posts' onChange={(e) => setSearch(e.target.value)} value={search} />
            </form>


            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
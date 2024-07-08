import React, { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Newpost from '../components/Newpost'
import Error from '../components/Error'

const RouterData = () => {
    const [search, setSearch] = useState('');
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [design, setDesign] = useState('');
    const [posts, setPosts] = useState([
        {
            id: 1,
            name: 'Karthik',
            skill: 'React js',
            design: 'Front-End Developer'
        },
        {
            id: 2,
            name: 'Ram',
            skill: 'Node js',
            design: 'Back-End Developer'
        },
        {
            id: 3,
            name: 'Sam',
            skill: 'Figma',
            design: 'Ux Designer'
        },
        {
            id: 4,
            name: 'Tom',
            skill: 'Tester',
            design: 'Test Engineer'
        }
    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1] + 1 : 1;
        const newPost = { id, name, skill, design }
        setPosts([...posts, newPost]);
        setName('');
        setSkill('');
        setDesign('');
    }

    const handleDelete = (id) => {
        const post = posts.filter(p => p.id !== id);
        console.log(post)
        setPosts(post);
    }
    const strictRoute = createBrowserRouter([
        {
            path: "/",
            element: <Home search={search} setSearch={setSearch} posts={posts} handleDelete={handleDelete} />,
            errorElement: <Error />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/post",
            element: <Newpost setPosts={setPosts} handleSubmit={handleSubmit} setName={setName} setSkill={setSkill} setDesign={setDesign} />
        }
    ])
    return strictRoute;
    
}

export default RouterData
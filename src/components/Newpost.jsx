import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Newpost = ({ handleSubmit, setPosts, setSkill, setDesign, setName }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
  const onSubmit = (e) => {
    handleSubmit(e);
    handleNavigate();
  }
  return (
    <>
      <Navbar />
      <div className="new-post">
        <form>
          <div className='mb-2'>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id='name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="skill">Skill</label> <br />
            <input type="text" id='skill' onChange={(e) => setSkill(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="design">Design</label> <br />
            <input type="text" id='design' onChange={(e) => setDesign(e.target.value)} />
          </div>
          <button className="btn" onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Newpost
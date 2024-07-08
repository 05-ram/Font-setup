import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex ac jc flex-column about-page h-fit'>
        <h2>Hi, I am karthik</h2>
        <p>I am React-js Developer,Simply known as Pure Front-end developer</p>
      </div>
      <Footer />
    </>
  )
}

export default About
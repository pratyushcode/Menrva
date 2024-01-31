import React from 'react'
import Header from '../Components/Header'
import Hero2 from '../Components/AboutComp/Hero2'
import Footer from '../Components/Footer'
import Values from '../Components/AboutComp/Values'
import Education from "../Components/AboutComp/OurTeam/Education"
import Experience from '../Components/AboutComp/OurTeam/Experience'
import Member from '../Components/AboutComp/OurTeam/Member'

const About = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
        <Header/>
        <Hero2/>
        <Values/>
        <Experience/>
        <Education/>
        <Member/>
        
        <Footer/>
        
    </div>
  )
}

export default About
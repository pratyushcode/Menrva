import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Special from '../Components/Special'
import Expertise from '../Components/Expertise'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div  className="h-screen w-screen  ">
      <Header/>
      <Hero/>
      <Special/>
      <Expertise/>
      <Banner/>
      <Footer/>
    </div>
    
  )
}

export default Home
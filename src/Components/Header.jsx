import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className=" overflow-hidden">
        <Navbar/>
        <p className='max-w-[960px] md:mx-24 mx-5  p-5'>We are a cutting-edge tech company driven by AI and Data Science, creating easy-to-use and highly impactful solutions for top global clients.</p>
        <div className='w-full h-[1px] bg-slate-500 '></div>
        
    </div>
  )
}

export default Header
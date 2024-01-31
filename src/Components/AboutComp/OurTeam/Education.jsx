import React from 'react'
import Card from './card'

const Education = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center bg-white mb-2  ">
      <div className="heading flex flex-col items-center justify-center m-2">
        <div className="text-3xl text-primary m-4 text-center">
          OUR TEAM - EDUCATION
        </div>
        <div className="w-32 h-[2px] bg-primary"></div>
        <p className='text-center text-xl mt-3'>Our team comes with best educational pedigree from top global institutions.</p>
      </div>
      <div className='w-full'>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
       
      </div>
      <div className="container mx-auto mt-4 flex flex-wrap justify-center m gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
       
      </div>
      <div className="container mx-auto mt-4 mb-5 flex flex-wrap justify-center m gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
       
      </div>
      </div>

      

      <div className="w-full bg-gray-500 h-[1px]"></div>

      
    </div>
  )
}

export default Education
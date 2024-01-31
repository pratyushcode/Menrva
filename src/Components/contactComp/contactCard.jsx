import React from 'react'

const contactCard = ({icon,title}) => {
  return (
    <div className='mt-5 mx-5 '>
         <div className="bg-white text-primary flex items-center justify-center h-20 w-20 mx-auto  rounded-lg">
       
        {icon}
      </div>
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <div className=" text-white text-2xl  text-center">{title}</div>
        
      </div>
    </div>
  )
}

export default contactCard
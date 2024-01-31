import React from 'react'

const ExpertiseCard = ({icon,title}) => {
  return (
    <div className=' w-44 mx-16'>
         <div className="bg-primary text-white flex items-center justify-center h-16 w-16 mx-auto mt-4 rounded-full">
       
        {icon}
      </div>
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <div className=" text-primary font-medium text-lg mb-2 text-center">{title}</div>
        
      </div>
    </div>
  )
}

export default ExpertiseCard
import React from 'react'


const Card = ({icon,title,info}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
     
      
      <div className="bg-primary text-white flex items-center justify-center h-12 w-12 mx-auto mt-4 rounded-full">
        
        {icon}
      </div>

      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <div className=" text-primary font-medium text-xl mb-2 ">{title}</div>
        <p className="text-gray-700 text-base text-center">
        {info}
        </p>
      </div>
    </div>
  )
}

export default Card
import React from 'react'

const BannerCard = ({icon,title,info}) => {
  return (
    <div className='mt-5 '>
         <div className="bg-white text-primary flex items-center justify-center h-20 w-20 mx-auto mt-4 rounded-lg">
       
        {icon}
      </div>
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <div className=" text-white font-bold text-3xl  text-center">{title}</div>
        <p className="text-white text-2xl text-center">
        {info}
        </p>
      </div>
    </div>
  )
}

export default BannerCard
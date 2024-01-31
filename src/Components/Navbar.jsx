import React, { useState } from 'react'
import logo from "../assets/logo.webp"
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  const [menu,setmenu]=useState(false)
  const handleChange = () => {
    setmenu(!menu);
  };
  return (
    <div className='navabr flex md:flex-row flex-col items-center justify-center  flex-shrink'>
      <div className='logocontainer h-56 md:w-1/2 w-full flex justify-center items-center '>
        <img src={logo} alt="" className='h-[173px] w-auto max-w-88 object-scale-down ' />
      </div>
      <div className='menucontainer h-56 w-1/2  hidden md:flex flex-row justify-center items-start pt-20 md:gap-14 sm:gap-6'>
        <div className='text-xl text-center '>Home</div>
        <div className=' bg-slate-600 h-8 w-[0.5px]'></div>
        <div className='text-xl text-center '>About</div>
        <div className=' bg-slate-600 h-8 w-[0.5px]'></div>
        <div className='text-xl text-center '>Contact</div>

       
       
      </div>
      <div className=" md:hidden  flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <IoMenu size={25} onClick={handleChange} />
          )}
        </div>
        {/* <div
        className={`${menu ? " -translate-x-75" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-black left-0  font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-b-xl transition-transform duration-300 ease-in`}
      >
        <h1>hello</h1>
      </div> */}
      {menu &&(
        
          <div className=" origin-center absolute  top-64   right-15 mt-2 w-full rounded-md shadow-lg bg-gray-200 ring-1 ring-black ring-opacity-5">
            {/* Dropdown content */}
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-center">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-center">About</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-400 text-center">Contact</a>
            </div>
          </div>
        )}

        
        
    </div>
  )
}

export default Navbar
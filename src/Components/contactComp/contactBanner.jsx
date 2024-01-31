import React from 'react'
import ContactCard from './contactCard'
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const contactBanner = () => {
  return (
    <div className='w-full h-auto bg-primary'>
         <div className="container mx-auto flex flex-wrap justify-center  md:gap-20 gap-2 p-5">
            <ContactCard icon={<IoMdMail  size={45}/>} title={"EMAIL"}/>
            <ContactCard icon={<FaLinkedinIn  size={45}/>} title={"EMAIL"}/>
            <ContactCard icon={<FaInstagram  size={45}/>} title={"EMAIL"}/>
            <ContactCard icon={<FaTwitter  size={45}/>} title={"EMAIL"}/>
         </div>
    </div>
  )
}

export default contactBanner
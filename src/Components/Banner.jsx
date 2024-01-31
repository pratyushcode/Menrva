import React from 'react'
import BannerCard from './BannerCard'
import { FaDollarSign } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";

const Banner = () => {
  return (
    <div className='w-full h-auto bg-primary'>
         <div className="container mx-auto flex flex-wrap justify-center  md:gap-20 gap-5">
            <BannerCard icon={<FaDollarSign size={40} /> } title={"$12+ MN"} info={"Business Impact"}/>
            <BannerCard icon={<PiStudentFill size={40} /> } title={"20+"} info={"Domain Experts"}/>
            <BannerCard icon={<RiGlobalFill size={40} /> } title={"10+"} info={"Global Clients"}/>
            <BannerCard icon={<AiOutlineFileDone size={40} /> } title={"30+"} info={"Projects Completed"}/>
         </div>

    </div>
  )
}

export default Banner
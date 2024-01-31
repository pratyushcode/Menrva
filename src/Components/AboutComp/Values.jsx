import React from "react";
import ValueCard from "./ValueCard";
import { FaUserCheck } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const Values = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center bg-gray-100 ">
      <div className="heading flex flex-col items-center justify-center m-2">
        <div className="text-3xl text-primary m-4 text-center">
          OUR VALUES
        </div>
        <div className="w-32 h-[2px] bg-primary"></div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center m-10 gap-4">
        <div className="lg:flex">
          <ValueCard icon={<FaUserCheck size={25}/>} title={"CUSTOMER FIRST"}/>
          <ValueCard icon={<FaHandshake size={25}/>} title={"INTEGRITY"}/>
          <ValueCard icon={<FaLightbulb size={25}/>} title={"INNOVATION"}/>
        </div>
        
          <div className="lg:flex">
          <ValueCard icon={<FaStar size={25}/>} title={"EXCELLENCE"}/>
          <ValueCard icon={<FaTrophy size={25}/>} title={"RESULTS DRIVEN"}/>
          <ValueCard icon={<MdOutlineGroups size={25}/>} title={"DIVERSITY & INCLUSION"}/>
            
          </div>
       
      </div>

      <div className="w-full bg-gray-500 h-[1px]"></div>

      
    </div>
  );
};

export default Values;

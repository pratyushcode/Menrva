import React from "react";
import Card from "./Card";
import { FaBolt } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaThumbsUp } from "react-icons/fa";
const Special = () => {
  return (
    
    <div className="flex flex-col justify-center item-center bg-gray-100  ">
        <div className="heading flex flex-col items-center justify-center m-10">
        <div className="text-3xl text-purple-800 m-4 text-center">WHAT MAKES US SPECIAL</div>
      <div className=" w-56 h-[2px] bg-purple-800 mb-2"></div>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center m-10">

      <div className="lg:flex gap-8">
        <Card icon={<FaBolt size={35}  />} title={"AI-ML POWERED"} info={"Our offerings are powered by latest innovations in the areas of AI and Machine Learning."} />
        <Card  icon={<TbDeviceDesktopCode  size={35} />} title={"LATEST TECHNOLOGIES"} info={"Our team of experts use the latest tools and technologies to create innovative solutions for our clients."}/>
        <Card  icon={<FaThumbsUp  size={35} />} title={"BUSINESS IMPACT"} info={"We put highest priority on the impact of our solutions and success of our clients is our final goal."}/>
        
      </div>
    </div>
    <div className=" bg-gray-400 h-[1px] w-full mb-2"></div>
    </div>
  );
};

export default Special;

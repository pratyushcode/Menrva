import React from "react";
import Image from "../assets/vision.jpg";
import Mission from "../assets/mission.jpg";

const Hero = () => {
  return (
    <div className=" overflow-hidden">
      <div className=" md:mx-20 mx-2 overflow-hidden ">
        <div className="container mx-auto flex flex-wrap items-center my-10 ">
          <div className="w-full md:w-1/2 max-w-[600px]">
            <img src={Image} alt="Your Alt Text" className="w-full h-auto " />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl text-primary font-medium mb-4">
              OUR VISION
            </h2>
            <div className=" w-28 bg-primary h-[2px] mb-4"></div>
            <p className="text-gray-700 leading-snug">
              Our vision is to empower organizations with artificial
              intelligence, enabling humans to live better and more productive
              life.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl text-primary font-medium mb-4">
              Our MISSION
            </h2>
            <div className=" w-28 bg-primary h-[2px] mb-4"></div>
            <p className="text-gray-700 leading-snug">
              We have two key missions: <br></br>
              1. We solve important problems for global organizations with our
              custom AI-ML products and services, creating significantly
              positive impacts for our clients.<br></br>
              2. We expedite the digital transformation journey of our esteemed
              clients with best-in-class consulting services and
              industry-relevant training programs.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-[600px]">
            <img src={Mission} alt="Your Alt Text" className="w-full h-auto " />
          </div>
        </div>
      </div>
      <div className="w-full  bg-slate-500  h-[1px]  mt-4"></div>
    </div>
  );
};

export default Hero;

import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import { TiTick } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
const Expertise = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center overflow-hidden ">
      <div className="heading flex flex-col items-center justify-center m-2">
        <div className="text-3xl text-primary m-4 text-center">
          OUR EXPERTISE
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center m-10 gap-4">
        <div className="lg:flex">
          <ExpertiseCard
            icon={<TiTick size={35} />}
            title={"RECOMMENDATION SYSTEM"}
          />
          <ExpertiseCard
            icon={<BsGraphUpArrow size={35} />}
            title={"FORECASTING"}
          />
          <ExpertiseCard
            icon={<FaUserCircle size={35} />}
            title={"CUSTOMER LIFECYCLE MANAGEMENT"}
          />
        </div>
        
          <div className="lg:flex">
            <ExpertiseCard
              icon={<FaTruck size={35} />}
              title={"SUPPLY CHAIN ANALYTICS"}
            />
            <ExpertiseCard
              icon={<AiTwotoneMessage  size={35} />}
              title={"RECOMMENDATION SYSTEM"}
            />
            <ExpertiseCard
              icon={< FaRobot size={35} />}
              title={"GENERATIVE AI"}
            />
          </div>
       
      </div>

      
    </div>
  );
};

export default Expertise;

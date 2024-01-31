import React from "react";
import IMgDe from "../../../assets/userDefault.jpg";

const Card = () => {
  return (
    // <div className="h-[120px] w-[150px] mx-15 md:mx-5 mt-6 rounded-sm hover:bg-gray-500 border-2 border-gray-400 transition duration-200 ease-linear object-cover">

    //   <div className="imagcont  relative"><img src={IMgDe} alt="" className="w-full h-full " />
    //   <div className="h-full w-full  hover:bg-gray-500 absolute"></div>
    //   </div>

    // </div>
    <div className="relative h-[120px] w-[150px] mx-15 md:mx-5 mt-6 rounded-sm hover:bg-gray-500  transition duration-200 ease-linear ">
      {/* Base div with some content */}
      <div className="rounded-lg">
        <img src={IMgDe} alt="" className="  h-[120px] w-[150px]" />
      </div>

      {/* Overlay div positioned absolutely */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" bg-black opacity-0 hover:opacity-65 p-4  text-white w-full h-full"></div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaHome, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import india from "../assets/india.png";
import uae from "../assets/uae.png";

const Footer = () => {
  return (
    <div>
        <footer className=" bg-white text-black  m-2 md:m-4 p-8 overflow-hidden">
      <div className="flex flex-wrap justify-between">
        {/* Company Info Column */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0 mt-4">
          <h3 className="text-2xl mb-2 text-primary">MENRVA TECHNOLOGIES</h3>
          <p>contact@menrvatechnologies.com</p>

          <div className="flex mt-2 flex-row  gap-4">
            <div className="h-10 w-10 rounded-md bg-primary text-white flex justify-center items-center">
              <a href="#">
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="h-10 w-10 rounded-md bg-primary text-white flex justify-center items-center">
              <a href="#">
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="h-10 w-10 rounded-md bg-primary text-white flex justify-center items-center">
              <a href="#">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-4  md:mb-0 mt-4">
          <h3 className="text-2xl mb-2 text-primary">QUICK LINKS</h3>
          <ul>
            <li className=" flex items-center mb-2">
              <FaHome className="mr-2 text-primary " />
              <a href="#">Home</a>
            </li>
            <li className=" flex items-center mb-2">
              <FaEnvelope className="mr-2  text-primary " />
              <a href="#">Contact</a>
            </li>
            <li className=" flex items-center">
              <FaInfoCircle className="mr-2  text-primary " />
              <a href="#">About</a>
            </li>
          </ul>
        </div>

     
        <div className="w-full md:w-1/3 mt-3">
          <h3 className="text-2xl mb-2 text-primary">OFFICE ADDRESS</h3>
          <div className="flex items-center h-1/2 w-auto  flex-row    ">
            <img src={india} alt="" className="h-8 w-10 rounded-sm mt-5 mr-2 " />
            <div>
              <p className="text-primary ">India Office:</p> WeWork Pavilion,
              Church Street, Bangalore, Karnataka
            </div>
          </div>
          <div className="flex items-center h-1/2 w-auto  flex-row    ">
            <img src={uae} alt="" className="h-8 w-10 rounded-sm mt-5 mr-2 " />
            <div>
              <p className="text-primary ">UAE Office:</p> IFZA Business Park, Dubai Silicon Oasis, Dubai
            </div>
          </div>
        </div>

      </div>
      
    </footer>
    <div className="bg-gray-200 text-black text-center  mt-12"> Created with passion by @pratyushkumarsinha</div>
    </div>
    
  );
};

export default Footer;

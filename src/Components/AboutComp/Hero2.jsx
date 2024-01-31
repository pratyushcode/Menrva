import React from "react";
import IImage from "../../assets/about.jpg";
import Founder from "../../assets/Founder.jpg";

const Hero2 = () => {
  return (
    <div className=" overflow-hidden ">
      <div className=" md:mx-20 mx-1 overflow-hidden ">
        <div className="container mx-auto flex flex-wrap items-center my-10 ">
          <div className="w-full md:w-1/2 max-w-[600px]">
            <img src={IImage} alt="Your Alt Text" className="w-full h-auto " />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl text-primary font-medium mb-4">
            ABOUT US
            </h2>
            <div className=" w-28 bg-primary h-[2px] mb-4"></div>
            <p className="text-gray-700 leading-snug">
            Menrva Technologies was founded with the mission of democratising AI for global organizations by making it easy-to-use and impactful. Our team comes with the best educational pedigree and rich industry experiences.
            <br></br>
            <br />

Our team of experts with diverse background from across the world are united by the common goal of creating innovative AI solutions and delighting our global clients.
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl text-primary font-medium mb-4">
            OUR FOUNDER
            </h2>
            <div className=" w-28 bg-primary h-[2px] mb-4"></div>
            <p className="text-gray-700 leading-snug">
            Dr. Angshuman Ghosh is the Founder and CEO of Menrva Technologies. He is a Data Science, AI, and Business leader with 15+ years of rich leadership experiences in top Fortune 100 and Unicorn Startup companies such as Disney, Sony, Target, Grab, and Wipro. He has given 100+ lectures at top global institutes and 20+ talks at international conferences. 

 
            <br></br>
            <br />
Dr. Angshu is the winner multiple prestigious awards including ‘Top 10 AI Leaders in India’, ‘40 under 40 Global Innovator’, and ‘LinkedIn Spotlight Award’. He has 500k+ followers across the social media platforms and his posts on Data Science, AI, and Technology have been read by 200Mn+ people worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-[600px]">
            <img src={Founder} alt="Your Alt Text" className="w-full h-auto " />
          </div>
        </div>
      </div>
      <div className="w-full  bg-slate-500  h-[1px]  mt-4"></div>
    </div>
  );
};

export default Hero2;

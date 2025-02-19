"use client";
import CarouselImage from "@/component/Caurosel/caurosel";
import { certificate } from "./constant/const";
import React from "react";
const Resume = () => {
  const handleDownload = () => {
    const imageUrl = "https://www.aryalsushant.com.np/Sushant_CV_Short.pdf";
    const link = document.createElement("a");
    link.href = imageUrl;
    link.setAttribute("download", "Sushant_CV.pdf"); // specify the download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mt-5 md:mt-10">
      <div className="flex justify-between">
        <div>
          <div className="font-[Raleway] text-5xl relative">
            Resume
            <div className="absolute -bottom-3 left-0 w-24 h-[3px] bg-[#1a9edb]"></div>
          </div>
          <div className="mt-6">
            An outline of my education and past experience.
          </div>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-10 text-2xl ">Education</div>
      <hr />
      <div className="mt-2 text-lg">
        Geo-information Science and Earth Observation for Environmental
        Modelling and Management (M.Sc.)
        <div className="md:hidden italic">(September,2024 - ongoing)</div>
        <div className="md:flex md:justify-between md:items-center mt-1 italic">
          <div>
            <div>University of Tartu, Tartu, Estonia</div>
            <div>UCLouvain, Louvain-la-Neuve, Belgium</div>
          </div>
          <div className="hidden md:block italic">September,2024 - ongoing</div>
        </div>
      </div>
      <div className="mt-8 md:mt-8 text-lg">
        Bachelor in Geomatics Engineering
        <div className="md:hidden italic">
          <div>(August, 2018 - June,2023)</div>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center mt-1 italic">
        <div>Kathmandu University, Nepal</div>
        <div className="hidden: md:visible">August, 2018 - June,2023</div>
      </div>
      <div className=" mt-10 text-2xl ">Experience</div>
      <hr />
      <div className="mt-2 text-lg">
        Web-GIS developer Internship
        <div className="italic md:hidden">(March,2023 - April, 2023)</div>
        <div className="flex justify-between items-center mt-1 italic">
          <div>Naxa Pvt. Ltd, Nepal</div>
          <div className="hidden md:block">March,2023 - April, 2023</div>
        </div>
      </div>
      <div className="mt-4 text-lg">
        Web Developer
        <div className="italic md:hidden">(August, 2023 - July,2024)</div>
      </div>
      <div className="flex justify-between items-center mt-1 italic">
        <div>
          <div>Seed Innovation Private Limited</div>
        </div>
        <div className="hidden md:block">January, 2024 - July,2024</div>
      </div>
      <div className=" py-2 mt-5 md:mt-10 text-2xl ">
        Certificates, Workshops & Extra-Curricular Activities
      </div>
      <hr />
      <CarouselImage images={certificate} />
      <hr />
    </div>
  );
};

export default Resume;

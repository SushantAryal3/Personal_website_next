import CarouselImage from "@/component/Caurosel/caurosel";
import { certificate } from "./constant/const";
import React from "react";

const Resume = () => {
  return (
    <div className="mt-5 md:mt-10">
      <div className="font-[Raleway] text-5xl relative">
        Resume
        <div className="absolute -bottom-3 left-0 w-24 h-[3px] bg-[#1a9edb]"></div>
      </div>
      <div className="mt-6">
        An outline of my education and past experience.
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
        Web-GIS developer
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
        <div>Agragami Tech Private Limited, Nepal</div>
        <div className="italic hidden md:block">August, 2023 - July,2024</div>
      </div>
      <div className="mt-4 text-lg">
        Web Developer
        <div className="italic md:hidden">(January, 2024 - July,2024)</div>
      </div>
      <div className="flex justify-between items-center mt-1 italic">
        <div>
          <div>Contract</div>
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

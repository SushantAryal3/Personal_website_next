/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Profile from "../../../public/photo.png";
import Image from "next/image";
import { Skills } from "./const";
const About = () => {
  return (
    <div className="p-10 pt-20 md:px-28 bg-gray-50 min-h-screen">
      <div className=" mx-auto">
        <div className="mb-6">
          <div className="font-[Raleway] text-5xl relative">
            About
            <div className="absolute -bottom-3 left-0 w-20 h-[3px] bg-[#1a9edb]"></div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-14 text-justify">
            I'm Sushant Aryal, currently a Master's student in the University of
            Tartu, Estonia under the degree programme in Geo-Information Science
            and Earth Observation for Environmental Modeldivng and Management
            (GEM). I graduated from Kathmandu University, Nepal, with a
            Bachelor's degree in Geomatics Engineering. Expertise in
            programming, spatial decision support model design, web-based GIS
            development, and location-based services. Currently exploring
            machine learning (deep learning) appdivcations in the geospatial
            domain.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
            <Image
              src={Profile}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover md:w-72 md:h-72"
            />
          </div>

          <div className="w-full md:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">
              Personal Info
            </h1>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <span className="font-semibold">Date of Birth:</span> August 4,
                2000
              </div>
              <div>
                <span className="font-semibold">Phone:</span> +372-56054382
              </div>
              <div>
                <span className="font-semibold">City:</span> Tartu,Estonia
              </div>
              <div>
                <span className="font-semibold">Language:</span> Nepali,
                English, French (learning)
              </div>
              <div>
                <span className="font-semibold">UNG. Degree:</span> Bachelor's
                in Geomatics Engineering, 2022
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                aryalsushant564@gmail.com
              </div>
              <div>
                <span className="font-semibold">Freelance:</span> Available
              </div>
              <div>
                <span className="font-semibold">Hobbies:</span> Riding, Hiking,
                Watching Movies, Cooking, Swimming, exercising
              </div>
            </div>
          </div>
        </div>
        <div className="font-[Raleway] text-5xl relative mt-9">
          Skills and Tool
          <div className="absolute -bottom-3 left-0 w-20 h-[3px] bg-[#1a9edb]"></div>
        </div>
        <div className=" mt-5 bg-gray-50 ">
          <div className="mb-9 text-center">
            What I've picked up along the way and my ongoing learning
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center">
              {Skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="h-16 w-16 object-contain mb-2 grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Profile from "../../../public/photo.png";
import Image from "next/image";
import { Skills } from "./const";
import { achivements } from "./const";
import Sushant from "./svg/sushant.png";
const About = () => {
  return (
    <div className="pt-5 md:pt-10">
      <div className="mx-auto">
        <div className="mb-6">
          <div className="text-5xl relative hidden md:block">
            A little About me
            <div className="absolute -bottom-3 left-0 w-52 h-[3px] bg-[#1a9edb]"></div>
          </div>
          <div className="text-5xl relative block md:hidden">
            About me
            <div className="absolute -bottom-3 left-0 w-32 h-[3px] bg-[#1a9edb]"></div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-10 text-justify">
            I am a GIS professional and student with a passion for applying
            geospatial technology to solve real-world challenges and uncover
            insights from it. Currently pursuing my master's in Geoinformation
            Science and Earth Observation for Environmental Modelling and
            Management at University of Tartu, I bring a unique blend of
            technical expertise and creative problem-solving to the table.{" "}
          </p>
          <p className="text-gray-700 leading-relaxed mt-5 text-justify">
            My journey began as a WebGIS Developer, where I gained skills in
            creating interactive maps and dashboards, managing geospatial
            databases, and working with cutting-edge spatial analysis tools.
            Now, I aim to deepen my expertise in remote sensing, Earth
            observation, and data visualization to tackle challenges like
            urbanization, agricultural management, and land use optimization.
          </p>
          <p className="text-gray-700 leading-relaxed mt-5 text-justify">
            I graduated from Kathmandu University, Nepal, with a Bachelor's
            degree in Geomatics Engineering. Expertise in programming, spatial
            decision support model design, web-based GIS development, and
            location-based services. Currently exploring machine learning (deep
            learning) applications in the geospatial domain.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="max-w-fit md:flex justify-center items-center hidden">
            <Image
              src={Sushant}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover object-top md:w-72 md:h-72"
            />
          </div>

          <div className="w-full md:w-2/3 mx-auto">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">
              Personal Info
            </h1>
            <div className="w-full md:w-1/3 p-6 md:hidden flex justify-center items-center">
              <Image
                src={Sushant}
                alt="Profile"
                className="rounded-full w-40 h-40 object-cover object-top md:w-72 md:h-72"
              />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-5 flex flex-col gap-4">
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
                in Geomatics Engineering, 2023
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
          <div className="absolute -bottom-3 left-0 w-36 h-[3px] bg-[#1a9edb]"></div>
        </div>
        <div className=" mt-5 ">
          <div className="mb-2 my-10 ">
            What I've picked up along the way and my ongoing learning
          </div>
          <div className="mb-10">
            I have gained technical proficiency with industry standard
            applications throughout my academic and professional experience.
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 items-center">
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
        <div className="font-[Raleway] text-5xl relative my-9">
          Achievements
          <div className="absolute -bottom-3 left-0 w-36 h-[3px] bg-[#1a9edb]"></div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          {achivements.map((achieve) => {
            return (
              <>
                <div className="flex gap-10">
                  <Image
                    src={achieve.icon}
                    alt={achieve.name}
                    className="h-20 w-20 md:h-40 md:w-40"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold text-lg">{achieve.name}</div>
                    <div className="hidden md:block">{achieve.description}</div>
                  </div>
                </div>
                <div className="md:hidden">{achieve.description}</div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

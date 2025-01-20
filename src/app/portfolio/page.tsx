import React from "react";
import { projectDetail } from "./work";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="mx-20 mt-20 max-h-[100vh] overflow-y-scrollscroll">
      <div className="font-[Raleway] text-5xl relative">
        Portfolio
        <div className="absolute -bottom-3 left-0 w-24 h-[3px] bg-[#1a9edb]"></div>
      </div>
      <div className="mt-12">
        I have worked on various projects involving spatial analysis, drones,
        machine learning, raster analysis, and more, both academically and
        professionally.
      </div>
      <div className="flex items-center justify-center">
        <div className="flex mt-9 py-2  border max-w-fit rounded-full">
          <div className="px-8">All</div>
          <div className="px-8">Academic</div>
          <div className="px-8">Work</div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projectDetail.map(({ id, src, name, description }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src[Math.floor(Math.random() * src.length)]}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {projectDetail.map(({ id, src, name, shortDescription }) => (
          <Link key={id} href={`/portfolio/${id}`} className="group relative">
            <Image
              alt={name}
              src={src[Math.floor(Math.random() * src.length)]}
              className="w-full h-[18rem] object-cover aspect-square border-2 border-gray-300 rounded-lg cursor-pointer group-hover:shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-end justify-start opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300 rounded-lg">
              <div className="text-left text-white px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold opacity-100">{name}</h3>
                <p className="text-sm mt-2 opacity-100">{shortDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

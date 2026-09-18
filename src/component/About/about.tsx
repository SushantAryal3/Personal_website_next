/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { SkillGroups } from "./const";
import topo from "./svg/topo.svg";

const GRID_SIZE = 80;
const gridPattern = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_SIZE}' height='${GRID_SIZE}'>
    <line x1='0' y1='${GRID_SIZE / 2}' x2='${GRID_SIZE}' y2='${GRID_SIZE / 2}' stroke='rgba(120,100,70,0.15)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2}' y1='0' x2='${GRID_SIZE / 2}' y2='${GRID_SIZE}' stroke='rgba(120,100,70,0.15)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2 - 5}' y1='${GRID_SIZE / 2}' x2='${GRID_SIZE / 2 + 5}' y2='${GRID_SIZE / 2}' stroke='rgba(120,100,70,0.5)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2}' y1='${GRID_SIZE / 2 - 5}' x2='${GRID_SIZE / 2}' y2='${GRID_SIZE / 2 + 5}' stroke='rgba(120,100,70,0.5)' stroke-width='1'/>
  </svg>`
)}`;

const About = () => {
  return (
    <div className="bg-[#f2e9e4] w-full relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${gridPattern}")`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          WebkitMaskImage: "linear-gradient(to bottom, transparent, transparent 120px, black 280px)",
          maskImage: "linear-gradient(to bottom, transparent, transparent 120px, black 280px)",
        }}
      />
      <div className="w-[90vw] max-w-[80vw] mx-auto pt-5 md:pt-10 relative z-10">
        <div className="hidden md:block absolute z-20 left-[22%] -translate-x-1/2 top-0 bottom-0 w-[2px] h-[40vh] bg-black/15 pointer-events-none" />
        <div className="hidden md:block w-full h-[2px] bg-black/15 relative mb-10">
          <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-[2px] bg-black" />
          <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-24 bg-black" />
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[22%_1fr] md:gap-0">
          <div className="relative bg-[#f2e9e4] lg:pl-10 py-2 -my-2 inline-block w-fit md:block md:w-fullhere">
            <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
              <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
              ABOUT ME
            </span>
          </div>
          <div className=" text-lg relative bg-[#f2e9e4] text-gray-700 leading-relaxed space-y-4 md:text-2xl md:pl-6 py-2 -my-2">
            <p>
              I'm a geospatial data scientist with an MSc in Geo-Information Science and Earth Observation, 
              completed jointly between the University of Tartu and UCLouvain, and a background in geomatics engineering from Nepal. 
              My work spans remote sensing, spatial analysis, and machine learning, from satellite time series to vector and raster GIS data, 
              with a focus on turning messy, multi-source spatial data into something models and decisions can actually rely on.            </p>
            <p>
              My research interest lies in understanding environmental systems and environmental change, particularly through approaches where 
              observations and process-based machine learning models inform each other. Apart from this, I enjoy full-stack WebGIS development 
              and building tools that make spatial data usable.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-28">
        <div className="w-[90vw] max-w-[80vw] mx-auto bg-[#f2e9e4] py-12 md:py-16">
          <div className="hidden md:block absolute z-20 left-[27.6%] -translate-x-1/2 top-0 bottom-0 w-[2px] h-[20vh] bg-black/15 pointer-events-none" />
        <div className="hidden md:block w-full h-[2px] bg-black/15 relative mb-10">
          <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-[2px] bg-black" />
          <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-24 bg-black" />
        </div>
          <div className="flex flex-col gap-6 lg:pl-10 md:grid md:grid-cols-[22%_1fr] md:gap-0">
            <div className="relative bg-[#f2e9e4] py-2 -my-2 inline-block w-fit md:block md:w-full">
              <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
                <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
                MY SKILLSET
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              Tools I work with
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SkillGroups.map((group, index) => (
            <div
              key={group.name}
              className="relative bg-[#e9dfd0] border border-black/15 px-6 py-6 flex flex-col gap-8 overflow-hidden"
              style={{
                backgroundImage: `url("${topo.src}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="border border-black/30 text-xs px-2 py-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-1.5 h-1.5 bg-black/40 inline-block" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl leading-snug">{group.name}</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      {item.icon ? (
                        <Image
                          src={item.icon}
                          alt={item.name}
                          className="h-6 w-6 object-contain shrink-0"
                        />
                      ) : item.IconComponent ? (
                        <item.IconComponent className="h-5 w-5 text-black/70 shrink-0" />
                      ) : (
                        <span className="h-1.5 w-1.5 bg-black/30 inline-block shrink-0" />
                      )}
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full mt-10 md:mt-16">
        <Image
          src="/mountain_filler.png"
          alt="Mountains"
          width={2400}
          height={820}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;

"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { education } from "./const";
import {
  certificationsRowOne,
  certificationsRowTwo,
  type Certification,
} from "./certifications";

const wrapValue = (min: number, max: number, v: number) => {
  const range = max - min;
  return (((v - min) % range) + range) % range + min;
};

const DotGrid = () => (
  <span className="grid grid-cols-2 gap-1">
    <span className="w-1.5 h-1.5 bg-black inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
    <span className="w-1.5 h-1.5 bg-black/20 inline-block" />
  </span>
);

const CertCard = ({ cert, index }: { cert: Certification; index: number }) => (
  <div className="w-[60vw] md:w-96 lg:w-[30rem] shrink-0 flex flex-col overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm">
    <div className="relative aspect-[4/3]">
      <Image
        src={cert.src}
        alt={cert.title}
        fill
        sizes="(min-width: 1024px) 30rem, (min-width: 768px) 24rem, 60vw"
        className="object-cover"
      />
    </div>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium text-gray-900 hover:underline whitespace-nowrap overflow-hidden text-ellipsis"
    >
      <span className="shrink-0 text-gray-500">{String(index).padStart(2, "0")}</span>
      <span className="overflow-hidden text-ellipsis">{cert.title}</span>
    </a>
  </div>
);

const MarqueeRow = ({
  items,
  baseVelocity,
}: {
  items: Certification[];
  baseVelocity: number;
}) => {
  const baseX = useMotionValue(0);
  const tripled = [...items, ...items, ...items];
  const x = useTransform(baseX, (v) => `${wrapValue(-100 / 3, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    baseX.set(baseX.get() + baseVelocity * (delta / 1000));
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="flex w-max gap-6" style={{ x }}>
        {tripled.map((cert, i) => (
          <CertCard key={`${cert.title}-${i}`} cert={cert} index={(i % items.length) + 1} />
        ))}
      </motion.div>
    </div>
  );
};

const Education = () => {

  return (
    <div className="relative w-full pt-10 bg-[#f2e9e4]">
      <div className="relative">
        <div className="w-[90vw] max-w-[80vw] mx-auto bg-[#f2e9e4] py-12 md:py-16">
          <div className="hidden md:block absolute z-20 left-[27.6%] -translate-x-1/2 top-0 bottom-0 w-[2px] h-[20vh] bg-black/15 pointer-events-none" />
          <div className="hidden md:block w-full h-[2px] bg-black/15 relative mb-10">
            <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-[2px] bg-black" />
            <div className="absolute left-[10%] md:left-[22%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-20 bg-black" />
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[22%_1fr] md:gap-0">
            <div className="relative bg-[#f2e9e4] py-2 -my-2 inline-block w-fit md:block md:w-full">
              <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
                <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
                EDUCATION
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              Where I&apos;ve studied
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="relative">
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-black/15 pointer-events-none" />

          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`flex flex-col md:grid md:grid-cols-2 md:gap-16 lg:gap-24 py-10 md:py-16 ${
                index !== 0 ? "border-t border-black/15" : ""
              }`}
            >
              <div
                className={`order-2 flex items-center justify-center py-8 md:py-0 ${
                  item.textSide === "left" ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex flex-col items-center gap-4 md:gap-6">
                  <Image
                    src={item.universityLogo}
                    alt={item.institution}
                    className={`w-auto object-contain ${
                      item.institution === "Kathmandu University" ? "h-40 lg:h-52 md:h-52 md:w-auto" : " h-20 lg:h-28 md:h-20 md:w-auto"
                    }`}
                  />
                  {item.gemLogos && (
                    <div className="flex items-center">
                      {item.gemLogos.map((logo, i) => (
                        <Image
                          key={i}
                          src={logo}
                          alt="GEM programme"
                          className="h-16 md:h-16 lg:h-28 w-auto object-contain"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`order-1 ${
                  item.textSide === "left" ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="border border-black/30 text-xs px-2 py-1">
                    {item.number}
                  </span>
                  <DotGrid />
                </div>
                <div className="text-2xl md:text-3xl leading-snug">{item.degree}</div>
                <div className="mt-2 text-base md:text-lg text-gray-700 flex flex-wrap items-center gap-2">
                  <span>{item.institution}</span>
                  <span className="w-1 h-1 bg-black/40 inline-block rounded-full" />
                  <span>{item.location}</span>
                </div>
                <div className="mt-1 text-sm text-gray-600 italic">{item.period}</div>
                {item.yearNote && (
                  <div className="mt-4 text-gray-700 leading-relaxed md:text-lg">
                    {item.yearNote}
                  </div>
                )}
                <div className={`${item.yearNote ? "mt-1" : "mt-4"} leading-relaxed md:text-lg`}>
                  <span className="font-medium text-gray-900">{item.scholarship}</span>
                </div>
                <div className="mt-1 text-gray-700 leading-relaxed md:text-lg">
                  <span className="font-medium">Grade: </span>
                  {item.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-16 md:pb-24 relative z-10">
        <div className="w-[90vw] max-w-[80vw] mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
            <span className="w-1.5 h-1.5 bg-black inline-block" />
            A RECORD OF CONTINUOUS LEARNING
          </span>
          <div className="text-3xl md:text-5xl mt-6">Certifications I&apos;ve earned</div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto md:text-lg">
            Short online courses and specializations completed alongside my formal degrees, across
            application development, data science, and geospatial tools.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <MarqueeRow items={certificationsRowOne} baseVelocity={-0.8} />
          <MarqueeRow items={certificationsRowTwo} baseVelocity={0.8} />
        </div>
      </div>
    </div>
  );
};

export default Education;

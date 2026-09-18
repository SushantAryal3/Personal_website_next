"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import topo from "../About/svg/topography.svg";
import { experiences } from "./const";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const GLOBE_SIZE = 290;

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [travel, setTravel] = useState(0);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const computeTravel = () => {
      const listEl = listRef.current;
      if (!listEl) return;
      setTravel(Math.max(0, listEl.offsetHeight - GLOBE_SIZE));
    };
    computeTravel();
    window.addEventListener("resize", computeTravel);
    return () => window.removeEventListener("resize", computeTravel);
  }, []);

  const step = experiences.length > 1 ? travel / (experiences.length - 1) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    entryRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url("${topo.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f2e9e4",
      }}
    >
      <div className="relative">
        <div className="w-[90vw] max-w-[80vw] mx-auto bg-[#f2e9e4] py-12 md:py-16">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-[22%_1fr] md:gap-0">
            <div className="relative bg-[#f2e9e4] py-2 -my-2 inline-block w-fit md:block md:w-full">
              <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
                <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
                EXPERIENCE
              </span>
            </div>
            <div className="text-3xl md:text-5xl relative bg-[#f2e9e4] md:pl-6 py-2 -my-2">
              Where I&apos;ve worked
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90vw] max-w-[80vw] mx-auto pb-16 md:pb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="md:w-[38%] md:shrink-0 mb-6 md:mb-0">
            <motion.div
              className="md:sticky md:top-[14vh] mx-auto md:mx-0 overflow-hidden rounded-full shrink-0"
              style={{ width: GLOBE_SIZE, height: GLOBE_SIZE }}
              animate={{ y: isDesktop ? activeIndex * step : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
            >
              <Globe activeIndex={activeIndex} />
            </motion.div>
          </div>

          <div ref={listRef} className="flex flex-col md:flex-1">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                data-index={index}
                ref={(el) => {
                  entryRefs.current[index] = el;
                }}
                className={`border-t border-black/15 py-8 md:py-10 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="border border-black/30 text-xs px-2 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-gray-600 italic">{exp.period}</span>
                </div>
                <div className="text-2xl md:text-3xl leading-snug">{exp.role}</div>
                <div className="mt-2 text-base md:text-lg text-gray-700 flex flex-wrap items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 bg-black/40 inline-block rounded-full" />
                  <span>{exp.location}</span>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed md:text-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

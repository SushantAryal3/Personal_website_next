"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import topo from "../About/svg/topography.svg";
import { experiences } from "./const";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [travel, setTravel] = useState(0);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

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
      const globeEl = globeRef.current;
      if (!listEl || !globeEl) return;
      setTravel(Math.max(0, listEl.offsetHeight - globeEl.offsetHeight));
    };
    computeTravel();
    window.addEventListener("resize", computeTravel);
    return () => window.removeEventListener("resize", computeTravel);
  }, [isDesktop]);

  const step = experiences.length > 1 ? travel / (experiences.length - 1) : 0;

  useEffect(() => {
    let rafId: number | null = null;

    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      entryRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          best = idx;
        }
      });
      setActiveIndex(best);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updateActive();
        rafId = null;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative w-full pt-10 bg-[#f2e9e4]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${topo.src}")`,
          backgroundSize: "500%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />
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
              ref={globeRef}
              className="md:sticky md:top-[14vh] mx-auto md:mx-0 overflow-hidden rounded-full shrink-0 w-[350px] h-[350px]  md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] shadow-[0_25px_50px_-10px_rgba(70,55,40,0.4)]"
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
                <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed md:text-lg list-disc pl-5">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

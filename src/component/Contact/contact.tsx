"use client";
import Image from "next/image";
import React from "react";
import space from "@/component/Portfolio/photos/space_x_final_.png";
import LinkedinIcon from "@/component/Icons/Linkedin";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const GRID_SIZE = 80;
const gridPattern = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='${GRID_SIZE}' height='${GRID_SIZE}'>
    <line x1='0' y1='${GRID_SIZE / 2}' x2='${GRID_SIZE}' y2='${GRID_SIZE / 2}' stroke='rgba(120,100,70,0.15)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2}' y1='0' x2='${GRID_SIZE / 2}' y2='${GRID_SIZE}' stroke='rgba(120,100,70,0.15)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2 - 5}' y1='${GRID_SIZE / 2}' x2='${GRID_SIZE / 2 + 5}' y2='${GRID_SIZE / 2}' stroke='rgba(120,100,70,0.5)' stroke-width='1'/>
    <line x1='${GRID_SIZE / 2}' y1='${GRID_SIZE / 2 - 5}' x2='${GRID_SIZE / 2}' y2='${GRID_SIZE / 2 + 5}' stroke='rgba(120,100,70,0.5)' stroke-width='1'/>
  </svg>`
)}`;

const Contact = () => {
  return (
    <div className="relative w-full pt-10 bg-[#f2e9e4] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${gridPattern}")`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 55%)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 55%)",
        }}
      />
      <div className="w-[90vw] max-w-[80vw] mx-auto relative z-10 flex justify-end pb-14 md:pb-20 pt-6">
        <div className="flex flex-col gap-6 items-end text-right w-fit">
          <div className="relative bg-[#f2e9e4] py-2 -my-2 inline-block w-fit">
            <span className="inline-flex items-center gap-2 bg-[#e9dfd0] text-l tracking-widest uppercase px-4 py-2">
              <span className="w-1.5 h-1.5 bg-black inline-block text-3xl" />
              GET IN TOUCH
            </span>
          </div>
          <div className="flex flex-col gap-4 items-end text-gray-700 text-lg md:text-2xl">
            <div className="flex items-center gap-3">
              <span>Leuven, Belgium · Tartu, Estonia</span>
              <FiMapPin className="w-6 h-6 text-black/70 shrink-0" />
            </div>
            <div className="flex items-center gap-3">
              <span>+32 496026557 · +372 56054385</span>
              <FiPhone className="w-6 h-6 text-black/70 shrink-0" />
            </div>
            <a
              href="mailto:aryalsushant564@gmail.com"
              className="flex items-center gap-3 w-fit hover:text-black transition-colors"
            >
              <span>aryalsushant564@gmail.com</span>
              <FiMail className="w-6 h-6 text-black/70 shrink-0" />
            </a>
          </div>
          <div>
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src={space}
          alt="Pokhara"
          width={2400}
          height={820}
          className="w-full h-auto rotate-180"
        />
      </div>
    </div>
  );
};

export default Contact;

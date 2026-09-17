"use client";

import { navLinks } from "@/constant/link";
import React, { useEffect, useState } from "react";

const sectionBackgrounds: Record<string, string> = {
  home: "rgba(255, 255, 255, 0.1)",
  "home-mid": "rgba(15, 20, 30, 0.9)",
  about: "rgba(15, 35, 70, 1)",
  resume: "rgba(15, 35, 70, 1)",
  portfolio: "rgba(15, 35, 70, 1)",
  publication: "rgba(15, 35, 70, 1)",
  contact: "rgba(15, 35, 70, 1)",
};

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    duration: number = 900
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const navHeight = window.innerHeight * 0.07;
      const targetY =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      smoothScrollTo(targetY, duration);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sectionIds = Object.keys(sectionBackgrounds);

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      // trigger point sits just below the fixed nav
      const triggerPoint = window.scrollY + window.innerHeight * 0.08;

      let current = sectionIds[0];
      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= triggerPoint) {
          current = section.id;
        } else {
          break;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <nav
        className="h-[7vh] w-full border-b border-white/30 z-[30] fixed top-0 left-0 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: sectionBackgrounds[activeSection] }}
      >
        <div className="h-full flex items-center justify-between w-[90vw] max-w-7xl m-auto">
          <div className="hidden md:flex items-center h-full border-l border-r border-white/30 px-6">
            <a
              href="#home"
              className="flex items-center"
              onClick={(e) => handleNavClick(e, "#home", 800)}
            >
              <span className="text-xl font-semibold whitespace-nowrap text-white">
                SUSHANT
              </span>
            </a>
          </div>

          <a
            href="#home"
            className="flex md:hidden items-center h-full border-l border-r border-white/30 px-6"
            onClick={(e) => handleNavClick(e, "#home", 800)}
          >
            <span className="text-xl font-semibold whitespace-nowrap text-white">
              SUSHANT
            </span>
          </a>

          <ul className="hidden md:flex items-center text-white h-full gap-8 font-normal text-[12px] border-l border-r border-white/30 px-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href, link.duration)}
                className="cursor-pointer hover:text-white/70 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </ul>

          <button
            type="button"
            className="flex md:hidden items-center justify-center h-full px-6 border-l border-r border-white/30 text-white hover:text-white/70 transition-colors duration-200 focus:outline-none"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-all duration-500 ease-in-out origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-current transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-all duration-500 ease-in-out origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-[7vh] left-0 w-full z-[20] border-b border-white/30 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: sectionBackgrounds[activeSection] }}
      >
        <ul className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-[12px] font-normal">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              onClick={(e) => handleNavClick(e, link.href, link.duration)}
              className="text-white hover:text-blue-300 cursor-pointer transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
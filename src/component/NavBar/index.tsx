"use client";

import { navLinks } from "@/constant/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const sectionBackgrounds: Record<string, string> = {
  home: "rgba(255, 255, 255, 0.1)",
  "home-mid": "#f2e9e4",
  about: "#f2e9e4",
  experience: "#f2e9e4",
  resume: "#f2e9e4",
  portfolio: "#f2e9e4",
  publication: "#f2e9e4",
  contact: "#f2e9e4",
};

const lightSections = new Set([
  "home-mid",
  "about",
  "experience",
  "resume",
  "portfolio",
  "publication",
  "contact",
]);

const sectionIds = Object.keys(sectionBackgrounds);

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isDesktop, setIsDesktop] = useState(false);
  const rafRef = useRef<number | null>(null);

  const isLight = isMenuOpen || lightSections.has(activeSection);

  // Consolidated once per render instead of 5x duplicated ternaries
  const theme = useMemo(
    () => ({
      text: isLight ? "text-[#1a1a1a]" : "text-white",
      hover: isLight ? "hover:text-[#1a1a1a]/60" : "hover:text-white/70",
      border: isLight ? "border-black/15" : "border-white/30",
    }),
    [isLight]
  );

  const smoothScrollTo = useCallback((targetY: number, duration: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, duration = 900) => {
      e.preventDefault();
      const target = document.getElementById(href.replace("#", ""));
      if (target) {
        const navHeight = window.innerHeight * 0.07;
        const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;
        smoothScrollTo(targetY, duration);
      }
      setMenuOpen(false);
    },
    [smoothScrollTo]
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const updateIsDesktop = () => setIsDesktop(mql.matches);
    updateIsDesktop();
    mql.addEventListener("change", updateIsDesktop);
    return () => mql.removeEventListener("change", updateIsDesktop);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerPoint = window.scrollY + window.innerHeight * 0.08;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= triggerPoint) {
          current = id;
        } else {
          break;
        }
      }
      setActiveSection(current);
    };

    // Throttle via rAF so we only recompute once per frame, not once per scroll event
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateActiveSection();
        rafRef.current = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const renderLinks = (extraClass = "") =>
    navLinks.map((link) => (
      <a
        href={link.href}
        key={link.name}
        onClick={(e) => handleNavClick(e, link.href, link.duration)}
        className={`cursor-pointer transition-colors duration-200 ${theme.hover} ${extraClass}`}
      >
        {link.name}
      </a>
    ));

  const Logo = ({ className = "" }: { className?: string }) => (
    <a
      href="#home"
      className={`flex items-center h-full border-l border-r px-6 transition-colors duration-700 ${theme.border} ${className}`}
      onClick={(e) => handleNavClick(e, "#home", 800)}
    >
      <span className={`text-xl font-semibold whitespace-nowrap transition-colors duration-700 ${theme.text}`}>
        SUSHANT
      </span>
    </a>
  );

  return (
    <>
      <nav
        className={`h-[7vh] w-full border-b z-[30] fixed top-0 left-0 transition-colors duration-700 ease-in-out ${theme.border}`}
        style={{
          backgroundColor: isMenuOpen
            ? "#f2e9e4"
            : isDesktop
            ? sectionBackgrounds[activeSection]
            : "transparent",
        }}
      >
        <div className="h-full flex items-center justify-between w-[90vw] max-w-[80vw] m-auto">
          <Logo className="hidden lg:flex" />
          <Logo className="flex lg:hidden" />

          <ul
            className={`hidden lg:flex items-center h-full gap-8 font-normal text-[14px] border-l border-r px-8 transition-colors duration-700 ${theme.border} ${theme.text}`}
          >
            {renderLinks()}
          </ul>

          <button
            type="button"
            className={`flex lg:hidden items-center justify-center h-full px-6 border-l border-r transition-colors duration-700 focus:outline-none ${theme.border} ${theme.text} ${theme.hover}`}
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
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
        className={`lg:hidden fixed top-[7vh] left-0 w-full z-[20] border-b overflow-hidden transition-all duration-500 ease-in-out ${theme.border} ${
          isMenuOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#f2e9e4" }}
      >
        <ul
          className={`flex flex-row flex-nowrap items-center justify-between w-[90vw] max-w-[80vw] m-auto py-4 text-[12px] font-normal overflow-x-auto ${theme.text}`}
        >
          {renderLinks()}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
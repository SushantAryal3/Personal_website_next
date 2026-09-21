"use client";

import NavigationBar from "@/component/NavBar";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "@/component/About/about";
import Experience from "@/component/Experience/experience";
import Resume from "@/component/Resume/resume";
import Portfolio from "@/component/Portfolio/portfolio";
import Contact from "@/component/Contact/contact";
import Publication from "@/component/Publication/publicatoin";
import Education from "@/component/Education/education";
import Award from "@/component/Award/award";

const CELL_SIZE = 55;

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [dims, setDims] = useState({ cols: 1, rows: 1 });

  useEffect(() => {
    function computeDims() {
      const cols = Math.max(1, Math.round(window.innerWidth / CELL_SIZE));
      const rows = Math.max(1, Math.round(window.innerHeight / CELL_SIZE));
      setDims({ cols, rows });
    }
    computeDims();
    window.addEventListener("resize", computeDims);
    return () => window.removeEventListener("resize", computeDims);
  }, []);

  const { cols, rows } = dims;

  const thresholds = useMemo(
    () =>
      Array.from({ length: cols * rows }, (_, i) => {
        const row = Math.floor(i / cols);
        const rowFraction = rows > 1 ? 1 - row / (rows - 1) : 0;
        const jitter = (Math.random() - 0.5) * 0.35;
        return Math.max(0, Math.min(1, rowFraction + jitter));
      }),
    [cols, rows]
  );

  function getScrollParent(node: HTMLElement | null): HTMLElement | Window {
    if (!node || node === document.body) return window;
    const style = window.getComputedStyle(node);
    if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight) {
      return node;
    }
    return getScrollParent(node.parentElement);
  }

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const scrollEl = getScrollParent(hero.parentElement);

    function update() {
      if (!hero) return;

      const heroRect = hero.getBoundingClientRect();
      const containerTop =
        scrollEl === window ? 0 : (scrollEl as HTMLElement).getBoundingClientRect().top;

      const heroTop = heroRect.top - containerTop;
      const progress = Math.max(0, Math.min(1, -heroTop / hero.offsetHeight));

      cellRefs.current.forEach((el, i) => {
        if (!el) return;
        const local = (progress - thresholds[i]) / 0.08;
        const opacity = Math.max(0, Math.min(1, local));
        el.style.opacity = String(opacity);
      });
    }

    scrollEl.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      scrollEl.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [thresholds]);

  cellRefs.current = [];

  return (
    <>
      <NavigationBar />
      <div
        id="home"
        ref={heroRef}
        className="relative w-full h-[100vh] overflow-hidden scroll-mt-[7vh]"
      >
        <video
          className="absolute inset-0 w-full h-[100vh] object-cover z-0"
          src="/2611-865412751.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-0 grid z-10 pointer-events-none"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {thresholds.map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                cellRefs.current[i] = el;
              }}
              className="bg-[#f2e9e4] opacity-0"
            />
          ))}
        </div>
      <div
        id="home-mid"
        className="absolute top-[12vh] left-0 w-full h-px pointer-events-none"
        aria-hidden="true"
      />
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            className="absolute top-[80vh] left-[10%] w-[82vw] sm:top-1/2 sm:w-[82vw] h-px bg-white/25"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
          <motion.div
            className="absolute invisible sm:visible sm:left-1/2 sm:top-[20%] w-px sm:h-[70vh] sm:translate-y-1/2 bg-white/25"
            style={{ transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          />
          <motion.div
            className="absolute top-[80vh] left-1/2 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <div className="w-[10vw] h-px bg-white/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>

        <motion.div
          className="absolute z-0 bottom-[8vh] right-[5%] sm:bottom-[10vh] sm:right-[8%]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="/Sushant_Aryal_CV.pdf"
            download="Sushant_Aryal_CV.pdf"
            className="inline-flex items-center gap-3 bg-black/35 backdrop-blur-[2px] border border-white/40 text-white text-sm sm:text-base tracking-[0.15em] uppercase px-6 py-3.5 sm:px-8 sm:py-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Download CV
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
          </a>
        </motion.div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-[70%] sm:left-[14%] sm:translate-x-0 sm:top-[53%] md:top-[53%] md:left-[10%] lg:left-[8%] lg:top-[54%] xl:left-[15%] xl:top-[55%] xxl:left-[22%] xxl:top-[55%] overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-4xl lg:text-7xl font-medium text-white leading-none"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Earth <br className="hidden sm:inline" />
              Observation
            </motion.h1>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[83%] sm:left-auto sm:translate-x-0 sm:top-[34%] sm:right-[12%] md:top-[35%] md:right-[8%] lg:top-[30%] lg:right-[4%] xl:top-[30%] xl:right-[11%] xxl:right-[18%] xxl:top-[30%] overflow-hidden">
            <motion.h1
              className="text-4xl sm:text-4xl lg:text-7xl font-medium text-white leading-none"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Geospatial &nbsp;
              <br className="hidden sm:inline" />
              Data Science
            </motion.h1>
          </div>
        </div>
      </div>

      <div id="about" className="scroll-mt-[7vh]">
        <About />
      </div>
      <div id="education" className="scroll-mt-[7vh]">
        <Education />
      </div>
      <div id="experience" className="scroll-mt-[7vh]">
        <Experience />
      </div>
      <div id="portfolio" className="scroll-mt-[7vh]">
        <Portfolio />
      </div>
      <div id="publication" className="scroll-mt-[7vh]">
        <Publication />
      </div>
      <div id="award" className="scroll-mt-[7vh]">
        <Award />
      </div>

      <div id="contact" className="scroll-mt-[7vh]">
        <Contact />
      </div>
    </>
  );
}

export default App;
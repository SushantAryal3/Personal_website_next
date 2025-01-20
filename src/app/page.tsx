"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const words = [
    "Welcome to",
    "नमस्कार",
    "tere tulemast",
    "bienvenue à",
    "welkom bij",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="absolute top-[35vh] left-[47vw] text-black z-30">
      <div
        className="text-xl text-center"
        // style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
      >
        {words[currentIndex]}
      </div>
      <div
        className="text-4xl font-serif text-center"
        // style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
      >
        My eportfolio
      </div>
      <div
        className="text-7xl font-serif mt-10"
        // style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
      >
        Sushant Aryal
      </div>{" "}
    </div>
  );
}

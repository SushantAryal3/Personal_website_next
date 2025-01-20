import React, { useEffect, useState } from "react";
export function ChangingWords() {
  const words = ["Namaste", "Welcome", "Tere"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      className="relative h-[200px] w-full flex items-center justify-center overflow-hidden"
      style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
    >
      <div
        className={`absolute transition-transform duration-1000 ${
          animate
            ? "translate-y-0 opacity-100"
            : "translate-y-[100px] opacity-0"
        }`}
      >
        {words[currentIndex]}
      </div>
    </div>
  );
}

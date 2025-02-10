"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import UFOImage from "../../app/about/svg/ufo.gif";
import React from "react";

const UFO = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [isUfoVisible, setIsUfoVisible] = useState(true);
  const [hasMoved, setHasMoved] = useState(false); // Controls when the UFO starts moving
  const [ufoPosition, setUfoPosition] = useState({ top: "20%", right: "40%" });

  useEffect(() => {
    let infoTimer: NodeJS.Timeout;
    let moveTimer: NodeJS.Timeout;

    if (showInfo) {
      infoTimer = setTimeout(() => {
        setShowInfo(false);
        moveTimer = setTimeout(() => {
          setHasMoved(true);
          animateUFO();
        }, 2000);
      }, 10000);
    }

    return () => {
      clearTimeout(infoTimer);
      clearTimeout(moveTimer);
    };
  }, [showInfo]);

  const animateUFO = () => {
    let steps = 0;
    const maxSteps = 5;

    const move = () => {
      if (steps >= maxSteps) {
        setIsUfoVisible(false);
        return;
      }

      const randomTop = Math.random() * 100 + "%";
      const randomRight = Math.random() * 100 + "%";

      setUfoPosition({ top: randomTop, right: randomRight });
      steps++;

      setTimeout(move, 1500);
    };

    move();
  };

  return (
    <div>
      {isUfoVisible && (
        <motion.div
          className="absolute"
          style={{ top: ufoPosition.top, right: ufoPosition.right }}
          animate={
            hasMoved
              ? { x: [0, 50, -50, 100, -100], y: [0, -20, 30, -10, 40] }
              : {}
          }
          transition={hasMoved ? { duration: 2, repeat: Infinity } : {}}
        >
          <motion.div
            onClick={() => setShowInfo(true)}
            className="cursor-pointer"
          >
            <Image
              src={UFOImage}
              alt="ufo"
              className="w-20 h-20 cursor-pointer"
            />

            <button
              className="absolute top-[-10px] right-[-10px] text-xl text-white bg-gray-800 p-1 rounded-full"
              onClick={() => setShowInfo(true)}
            ></button>
          </motion.div>
        </motion.div>
      )}

      {/* Info Card */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className="absolute bg-black text-white p-2 rounded-md shadow-md top-[60px] right-[30px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            You can play with Earth!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UFO;

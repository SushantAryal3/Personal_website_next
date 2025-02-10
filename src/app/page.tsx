"use client";

import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nebula from "@/component/Earth/Nebula";
import Starfield from "@/component/Earth/Starfield";
import EarthMaterial from "@/component/Earth/EarthMaterial";
import AtmosphereMesh from "@/component/Earth/AtmosphereMesh";
import { Typewriter } from "react-simple-typewriter";

const sunDirection = new THREE.Vector3(1, 0, 0);

function Earth() {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref} scale={[0.8, 0.85, 0.85]}>
        <icosahedronGeometry args={[7, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh />
      </mesh>
    </group>
  );
}

function App() {
  const { x, y, z } = sunDirection;
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
    <div className="bg-black z-20 overflow-hidden h-screen w-screen flex">
      {/* Left Content */}
      <div className="relative md:hidden w-[100vw] xl:w-[40vw] xl:flex h-full lg:hidden justify-center items-center text-white">
        <div className="absolute z-10 w-full h-[100vh] flex justify-center items-center">
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="sparkling-star"></div>
          <div className="absolute shooting-star animate-[shooting-star_2s_linear_infinite]"></div>
        </div>
        <div className=" h-[100vh] flex flex-col justify-center items-center">
          <div>
            <div
              className="text-xl text-center"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
            >
              {words[currentIndex]}
            </div>
            <div
              className="text-6xl font-serif text-center"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
            >
              My ePortfolio
            </div>
            <div
              className="text-8xl font-serif mt-10 text-center"
              style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
            >
              Sushant Aryal
            </div>
            <div className="h-[30px] text-2xl mt-4 text-center">
              <Typewriter
                words={[
                  "Master Student",
                  "Geomatics Engineer",
                  "Web-GIS Developer",
                  "Spatial Analyst",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Content (Earth Visualization) */}
      <div className="relative hidden w-[0] md:block md:w-[100vw] md:h-[100vh] xl:w-[60vw] lg:h-[100vh]">
        <Canvas
          camera={{ position: [0, 0.2, 10] }}
          gl={{ toneMapping: THREE.NoToneMapping }}
        >
          <Earth />
          <hemisphereLight args={[0xffffff, 0x000000, 5.0]} />
          <directionalLight position={[x, y, z]} />
          <Nebula />
          <Starfield />
          <OrbitControls enableZoom={false} />
        </Canvas>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-fit max-h-fit flex flex-col justify-center items-center text-white xl:hidden">
          <div
            className="text-xl text-center"
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
          >
            {words[currentIndex]}
          </div>
          <div
            className="text-6xl font-serif text-center"
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
          >
            My ePortfolio
          </div>
          <div
            className="text-8xl font-serif mt-10 text-center"
            style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
          >
            Sushant Aryal
          </div>
          <div className="h-[30px] text-2xl mt-4">
            <Typewriter
              words={[
                "Master Student",
                "Geomatics Engineer",
                "Web-GIS Developer",
                "Spatial Analyst",
              ]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

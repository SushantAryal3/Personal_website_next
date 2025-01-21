"use client";
import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nebula from "@/component/Earth/Nebula";
import Starfield from "@/component/Earth/Starfield";
import EarthMaterial from "@/component/Earth/EarthMaterial";
import AtmosphereMesh from "@/component/Earth/AtmosphereMesh";
import { useState, useEffect } from "react";

const sunDirection = new THREE.Vector3(1, 0, 0);

function Earth() {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });
  const axialTilt = (23.4 * Math.PI) / 180;
  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2.7, 64]} />
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
    <div>
      <div className="absolute top-[35vh] left-[47vw] text-white z-30">
        <div
          className="text-xl text-center"
          style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
        >
          {words[currentIndex]}
        </div>
        <div
          className="text-4xl font-serif text-center"
          style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
        >
          My eportfolio
        </div>
        <div
          className="text-7xl font-serif mt-10"
          style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
        >
          Sushant Aryal
        </div>{" "}
        <div
          className="text-2xl text-center"
          style={{ textShadow: "2px 2px 4px rgba(1, 1, 0, 0.8)" }}
        >
          {/* <Typewriter
            options={{
              strings: [
                "Grad Student",
                "Geomatics Engineer",
                "Web-GIS Developer",
                "Spatial Analyst",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 1,
            }}
          /> */}
        </div>
      </div>
      <div className="h-[100vh] bg-black z-20">
        <Canvas
          camera={{ position: [0, 0.2, 5] }}
          gl={{ toneMapping: THREE.NoToneMapping }}
        >
          <Earth />
          <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
          <directionalLight position={[x, y, z]} />
          <Nebula />
          <Starfield />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="absolute bottom-10 left-[50vw] text-white z-30"></div>
    </div>
  );
}

export default App;

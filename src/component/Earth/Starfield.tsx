"use client";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import circle from "./textures/circle.jpg";

function getPoints({ numStars = 500 } = {}) {
  function randomSpherePoint() {
    const radius = Math.random() * 25 + 25;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    const rate = Math.random() * 1;
    const prob = Math.random();
    const light = Math.random();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function update(t: any) {
      const lightness = prob > 0.8 ? light + Math.sin(t * rate) * 1 : light;
      return lightness;
    }
    return {
      pos: new THREE.Vector3(x, y, z),
      update,
      minDist: radius,
    };
  }
  const verts = [];
  const colors = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positions: any[] = [];
  let col;
  for (let i = 0; i < numStars; i += 1) {
    const p = randomSpherePoint();
    const { pos } = p;
    positions.push(p);
    col = new THREE.Color().setHSL(0.6, 0.2, Math.random());
    verts.push(pos.x, pos.y, pos.z);
    colors.push(col.r, col.g, col.b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    map: new THREE.TextureLoader().load(circle.src),
  });
  const points = new THREE.Points(geo, mat);
  function update() {
    points.rotation.y -= 0.0002;
    let col;
    const colors = [];
    for (let i = 0; i < numStars; i += 1) {
      col = new THREE.Color().setRGB(1, 1, 1);
      colors.push(col.r, col.g, col.b);
    }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.attributes.color.needsUpdate = true;
  }
  points.userData = { update };
  return points;
}

function Starfield() {
  const ref = React.useRef<THREE.Points>(null!);
  const points = getPoints({ numStars: 200 });
  useFrame((state) => {
    const { clock } = state;
    ref.current.userData.update(clock.elapsedTime);
  });
  return <primitive object={points} ref={ref} />;
}
export default Starfield;

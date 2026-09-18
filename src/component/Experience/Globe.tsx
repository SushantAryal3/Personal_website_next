"use client";

import React, { useEffect, useRef } from "react";
import { Map as MaplibreMap, Marker, setWorkerUrl, type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { experiences } from "./const";
import worldGeo from "./worldgeo.json";

if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
}

const OCEAN_COLOR = "#c9b99e";
const LAND_COLOR = "#f2e9e4";
const BORDER_COLOR = "rgba(70,55,40,0.7)";

const baseStyle: StyleSpecification = {
  version: 8,
  sources: {},
  layers: [{ id: "ocean", type: "background", paint: { "background-color": OCEAN_COLOR } }],
};

const markerClass = (active: boolean) =>
  `block rounded-full border transition-all duration-300 ${
    active
      ? "w-3 h-3 bg-[#e0763a] border-[#e0763a]"
      : "w-1.5 h-1.5 bg-[#f2e9e4] border-black/40"
  }`;

const Globe = ({ activeIndex }: { activeIndex: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markersRef = useRef<globalThis.Map<string, { marker: Marker; el: HTMLDivElement }>>(
    new globalThis.Map()
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    let cancelled = false;
    let rafId: number;

    const init = () => {
      if (cancelled) return;
      const { width, height } = container.getBoundingClientRect();
      if (width < 10 || height < 10) {
        rafId = requestAnimationFrame(init);
        return;
      }

      const first = experiences[0];
      const map = new MaplibreMap({
        container,
        style: baseStyle,
        center: [first.lon, first.lat],
        zoom: 2.2,
        interactive: false,
        attributionControl: false,
      });
      mapRef.current = map;

      map.on("error", (e) => {
        // eslint-disable-next-line no-console
        console.error("[Globe] maplibre error", e.error);
      });

      map.on("style.load", () => {
        map.setProjection({ type: "globe" });
        map.setSky({
          "sky-color": "#f2e9e4",
          "horizon-color": OCEAN_COLOR,
          "fog-color": "#f2e9e4",
          "atmosphere-blend": 0.6,
        });
      });

      map.on("load", () => {
        map.resize();

        map.addSource("world", {
          type: "geojson",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data: worldGeo as any,
        });
        map.addLayer({
          id: "land",
          type: "fill",
          source: "world",
          paint: { "fill-color": LAND_COLOR, "fill-opacity": 1 },
        });
        map.addLayer({
          id: "land-border",
          type: "line",
          source: "world",
          paint: { "line-color": BORDER_COLOR, "line-width": 1.2 },
        });

        map.once("idle", () => {
          const rendered = map.queryRenderedFeatures(undefined, { layers: ["land"] });
          // eslint-disable-next-line no-console
          console.log(
            "[Globe] idle - rendered land features in view:",
            rendered.length,
            "source loaded:",
            map.isSourceLoaded("world")
          );
        });

        const seen = new Set<string>();
        experiences.forEach((exp) => {
          const key = `${exp.lat},${exp.lon}`;
          if (seen.has(key)) return;
          seen.add(key);

          const el = document.createElement("div");
          el.className = markerClass(false);
          const marker = new Marker({ element: el }).setLngLat([exp.lon, exp.lat]).addTo(map);
          markersRef.current.set(key, { marker, el });
        });

        const activeExp = experiences[activeIndex];
        const activeKey = `${activeExp.lat},${activeExp.lon}`;
        markersRef.current.forEach(({ el }, key) => {
          el.className = markerClass(key === activeKey);
        });
      });
    };

    init();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const exp = experiences[activeIndex];
    const activeKey = `${exp.lat},${exp.lon}`;

    markersRef.current.forEach(({ el }, key) => {
      el.className = markerClass(key === activeKey);
    });

    if (!map) return;
    map.flyTo({ center: [exp.lon, exp.lat], zoom: 3, duration: 1400, essential: true });
  }, [activeIndex]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default Globe;

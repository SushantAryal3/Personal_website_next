"use client";

import React, { useEffect, useRef } from "react";
import { Map as MaplibreMap, Marker, setWorkerUrl, type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { experiences } from "./const";
import worldGeo from "./worldgeo.json";

if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
}

const OCEAN_COLOR = "#bee2ff";
const LAND_COLOR = "#dde5b4";
const WORKED_COLOR = "#d6eadf";
const BORDER_COLOR = "rgba(70,55,40,0.7)";

const workedCountries = Array.from(new Set(experiences.map((exp) => exp.country)));

const baseStyle: StyleSpecification = {
  version: 8,
  sources: {},
  layers: [{ id: "ocean", type: "background", paint: { "background-color": OCEAN_COLOR } }],
};

const markerClass = (visible: boolean) =>
  `block w-2 h-2 rounded-full bg-[#2563eb] border border-[#2563eb] transition-opacity duration-300 ${
    visible ? "opacity-100" : "opacity-0"
  }`;

const Globe = ({ activeIndex }: { activeIndex: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markerRef = useRef<Marker | null>(null);
  const markerElRef = useRef<HTMLDivElement | null>(null);

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
        interactive: true,
        attributionControl: false,
      });
      mapRef.current = map;

      // Let visitors drag-rotate the globe, but don't hijack page scroll
      // or keyboard focus for map-only gestures.
      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.doubleClickZoom.disable();
      map.keyboard.disable();
      map.touchZoomRotate.disableRotation();

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
          paint: {
            "fill-color": [
              "match",
              ["get", "name"],
              workedCountries,
              WORKED_COLOR,
              LAND_COLOR,
            ],
            "fill-opacity": 1,
          },
        });
        map.addLayer({
          id: "land-border",
          type: "line",
          source: "world",
          paint: { "line-color": BORDER_COLOR, "line-width": 1.2 },
        });

        const el = document.createElement("div");
        el.className = markerClass(true);
        const marker = new Marker({ element: el }).setLngLat([first.lon, first.lat]).addTo(map);
        markerElRef.current = el;
        markerRef.current = marker;
      });
    };

    init();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      mapRef.current?.remove();
      mapRef.current = null;
      markerRef.current = null;
      markerElRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const exp = experiences[activeIndex];

    if (markerElRef.current) {
      markerElRef.current.className = markerClass(false);
    }

    if (!map) return;

    map.once("moveend", () => {
      markerRef.current?.setLngLat([exp.lon, exp.lat]);
      if (markerElRef.current) {
        markerElRef.current.className = markerClass(true);
      }
    });

    map.easeTo({ center: [exp.lon, exp.lat], duration: 1400, essential: true });
  }, [activeIndex]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          boxShadow: "inset 0 0 55px 18px rgba(40,30,20,0.45)",
          background:
            "radial-gradient(circle at 34% 30%, rgba(255,255,255,0.22), rgba(255,255,255,0) 45%)",
        }}
      />
    </div>
  );
};

export default Globe;

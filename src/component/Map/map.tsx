import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const customIcon: L.Icon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  return (
    <div>
      <MapContainer
        center={[58.38248763373054, 26.731632988168144]}
        zoom={15}
        className="h-[30vh] w-[30vw]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[58.38248763373054, 26.731632988168144]}
          icon={customIcon}
        >
          <Popup>University of Tartu</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

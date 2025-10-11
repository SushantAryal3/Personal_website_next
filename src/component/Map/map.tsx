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
        center={[50.66775858531117, 4.614729131764309]}
        zoom={15}
        className="h-[40vh] w-[100vw] md:h-[30vh] md:w-[30vw]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[50.66775858531117, 4.614729131764309]}
          icon={customIcon}
        >
          <Popup>University of Tartu</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

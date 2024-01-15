import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";

function GetPosition() {
  const [position, setPosition] = useState(null);

  const map = useMapEvent("click", (e) => {
    setPosition(() => e.latlng);
    map.setView(e.latlng, 10);
    //map.setZoom(8);
  });

  if (!position) return null;

  return (
    <Marker position={position}>
      <Popup>deneme</Popup>
    </Marker>
  );
}

function MapUI() {
  return (
    <div className="mt-2">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-96"
      >
        <GetPosition />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapUI;

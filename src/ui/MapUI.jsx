import { MapContainer, TileLayer } from "react-leaflet";
import PutMark from "./PutMark";

function MapUI() {
  return (
    <div className="mt-2">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={8}
        scrollWheelZoom={true}
        className="h-96"
      >
        <PutMark />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapUI;

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
          attribution='&copy; <&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapUI;

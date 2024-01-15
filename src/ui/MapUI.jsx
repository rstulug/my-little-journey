import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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

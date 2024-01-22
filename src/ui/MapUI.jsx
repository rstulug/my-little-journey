import { MapContainer, TileLayer } from "react-leaflet";
import PutMark from "./PutMark";
import { useGetUserMemories } from "../features/UserPage/useGetUserMemories";
import MarkItem from "./MarkItem";
import Spinner from "./Spinner";

function MapUI() {
  const { userMemories, isLoading } = useGetUserMemories();

  if (isLoading) return <Spinner />;
  return (
    <div className="mt-2">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={true}
        className="h-96"
      >
        <PutMark />
        {userMemories &&
          userMemories.map((memory) => (
            <MarkItem marker={memory} key={memory.id} />
          ))}
        <TileLayer
          attribution='&copy; <&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapUI;

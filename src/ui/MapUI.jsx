import { MapContainer, TileLayer } from "react-leaflet";
import PutMark from "./PutMark";
import { useGetUserMemories } from "../features/UserPage/useGetUserMemories";
import MarkItem from "./MarkItem";
import Spinner from "./Spinner";
import GeoSearch from "./GeoSearch";
import { OpenStreetMapProvider } from "leaflet-geosearch";

function MapUI() {
  const { userMemories, isLoading } = useGetUserMemories();

  if (isLoading) return <Spinner />;
  return (
    <div className="mt-2">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={true}
        className="md:h-96 h-72 w-[80%] flex justify-center mx-auto "
      >
        <PutMark />
        {userMemories &&
          userMemories.map((memory) => (
            <MarkItem marker={memory} key={memory.id} />
          ))}
        <GeoSearch provider={new OpenStreetMapProvider()} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapUI;

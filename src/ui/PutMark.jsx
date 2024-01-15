import { useState } from "react";
import { Marker, useMapEvent, Popup } from "react-leaflet";
import { useReverseGeocoding } from "../hooks/useReverseGeocoding";

function PutMark() {
  const [position, setPosition] = useState(null);

  const map = useMapEvent("click", (e) => {
    setPosition(() => e.latlng);
    map.setView(e.latlng);
  });

  console.log(position);
  const { data, isLoading } =
    useReverseGeocoding({
      lat: position?.lat,
      lng: position?.lng,
    }) || {};

  //console.log(data);

  if (!position) return null;
  return (
    <Marker position={position}>
      <Popup>deneme</Popup>
    </Marker>
  );
}

export default PutMark;

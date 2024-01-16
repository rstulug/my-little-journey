import { useEffect, useState } from "react";
import { Marker, useMapEvent, Popup } from "react-leaflet";
import { useLocation } from "../context/LocationContext";

function PutMark() {
  const [position, setPosition] = useState(null);
  const { setLocation } = useLocation();

  const map = useMapEvent("click", (e) => {
    setPosition(() => e.latlng);
    map.setView(e.latlng);
  });

  useEffect(
    function () {
      async function getLocation() {
        try {
          if (!position) return null;
          const res = await fetch(
            `https://api.api-ninjas.com/v1/reversegeocoding?lat=${position.lat}&lon=${position.lng}`,
            {
              method: "GET",
              headers: {
                "X-Api-Key": "oZQ0KKNoGIa/P/zHjoJncQ==UCwvPw4fmCFGDAy2",
              },
              contentType: "application/json",
            }
          );
          if (!res.ok) throw new Error("Location cannot be accessible");
          const data = await res.json();
          setLocation({ ...data[0], ...position });
        } catch (error) {
          throw new Error("Location cannot be accessible");
        }
      }
      getLocation();
    },
    [position, setLocation]
  );

  if (!position) return null;
  return (
    <Marker position={position}>
      <Popup>deneme</Popup>
    </Marker>
  );
}

export default PutMark;

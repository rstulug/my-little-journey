import { useEffect, useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";
import { useLocation } from "../context/LocationContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function PutMark() {
  const [position, setPosition] = useState(null);
  const { setLocation, setIsLoading } = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();

  const map = useMapEvent("click", (e) => {
    setPosition(() => e.latlng);
    map.setView(e.latlng);

    navigate(`/user/${user.user_metadata.usernameSlug}/new-memory`);
  });

  useEffect(
    function () {
      async function getLocation() {
        try {
          if (!position) return null;
          setIsLoading(true);
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
          throw new Error(`Location cannot be accessible. Error: ${error}`);
        } finally {
          setIsLoading(false);
        }
      }
      getLocation();
    },
    [position, setLocation, setIsLoading]
  );

  if (!position) return null;
  return <Marker position={position}></Marker>;
}

export default PutMark;

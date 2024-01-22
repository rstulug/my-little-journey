import { Marker, Popup, useMap } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserMemory } from "../features/Memory/useGetUserMemory";
import { useEffect } from "react";

function MarkItem({ marker }) {
  const naviate = useNavigate();
  const map = useMap();
  const { usernameSlug } = useParams();
  const { userMemory } = useGetUserMemory();

  useEffect(
    function () {
      if (userMemory) {
        map.setView([userMemory.lat, userMemory.lng], 6);
        map.closePopup();
      }
    },
    [userMemory, map]
  );
  return (
    <Marker
      position={[marker.lat, marker.lng]}
      eventHandlers={{
        click: (e) => {
          naviate(`/user/${usernameSlug}/memory/${marker.id}`);
          map.setView(e.latlng, 6);
        },
      }}
    >
      <Popup>{marker.title}</Popup>
    </Marker>
  );
}

export default MarkItem;

import { Marker, Popup, useMap } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";

function MarkItem({ marker }) {
  const naviate = useNavigate();
  const map = useMap();
  const { usernameSlug } = useParams();
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

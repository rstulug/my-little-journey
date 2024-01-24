import { GeoSearchControl } from "leaflet-geosearch";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function GeoSearch({ provider }) {
  const map = useMap();
  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: provider,
      showMarker: false,
      keepResult: false,
      style: "bar",
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, provider]);

  return null;
}

export default GeoSearch;

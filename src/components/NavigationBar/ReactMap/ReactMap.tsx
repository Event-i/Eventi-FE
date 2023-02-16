import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY3Jpc2VzcXVlIiwiYSI6ImNsZTZmdXFobjBtZWEzcW1zcnR1dG9wZ2cifQ.zfxeEpdvaN9-6SzJNNerqA";

export default function ReactMap() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100%", height: "80vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}

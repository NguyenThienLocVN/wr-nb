import * as React from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

export default function Map() {
  const center = [15.023683, 108.662813];

  const [kml, setKml] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "/kml/song.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);

  return (
    <MapContainer center={center} zoom={9} style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kml && <ReactLeafletKml kml={kml} />}
    </MapContainer>
  );
}
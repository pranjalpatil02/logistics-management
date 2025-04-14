import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = ({ from, to, distance, estimatedTime }) => {
  // Example coordinates (replace with actual geocoding in production)
  const fromCoords = [22.6916, 72.8634]; // Nadiad coordinates
  const toCoords = [22.5645, 72.9289]; // Anand coordinates

  const positions = [fromCoords, toCoords];
  const center = [(fromCoords[0] + toCoords[0]) / 2, (fromCoords[1] + toCoords[1]) / 2];

  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={11}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={fromCoords}>
          <Popup>{from}</Popup>
        </Marker>
        <Marker position={toCoords}>
          <Popup>{to}</Popup>
        </Marker>
        <Polyline positions={positions} color="blue" />
      </MapContainer>
      <div className="route-info">
        <div className="info-item">
          <span className="info-label">Distance:</span>
          <span className="info-value">{distance}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Est. Time:</span>
          <span className="info-value">{estimatedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
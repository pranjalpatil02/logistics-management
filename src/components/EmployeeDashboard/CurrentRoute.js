import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import './CurrentRoute.css';

const CurrentRoute = ({ start, end, distance, estimatedTime }) => {
  const [directions, setDirections] = React.useState(null);
  const [error, setError] = React.useState(null);

  const directionsCallback = React.useCallback((result, status) => {
    if (status === 'OK') {
      setDirections(result);
      setError(null);
    } 
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 22.6916,
    lng: 72.8634
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
  return (
    <div className="current-route">
      <div className="route-map">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={11}
            options={options}
          >
            {!error && (
              <DirectionsService
                options={{
                  destination: end,
                  origin: start,
                  travelMode: 'DRIVING'
                }}
                callback={directionsCallback}
              />
            )}
            {directions && (
              <DirectionsRenderer
                options={{
                  directions: directions
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
        {error && (
          <div className="map-error">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="route-details">
        <div className="route-points">
          <div className="start-point">
            <span className="point-icon">📍</span>
            <span className="point-text">{start}</span>
          </div>
          <div className="route-arrow">→</div>
          <div className="end-point">
            <span className="point-icon">🏁</span>
            <span className="point-text">{end}</span>
          </div>
        </div>
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
    </div>
  );
};

export default CurrentRoute;
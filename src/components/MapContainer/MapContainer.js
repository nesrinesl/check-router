import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

const GoogleMapComponent = ({ zoomLevel, mapCenter, onZoomChange, onMapClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const handleMapLoad = (map) => {
      mapRef.current = map; // Store the map instance
    };

    if (mapRef.current) {
      // Do something with the map instance, e.g., set a marker
      const marker = new Marker({
        position: mapCenter,
        map: mapRef.current,
      });
    }
  }, [mapCenter]); // Re-render and update marker

  const handleZoomChange = (event) => {
    if (onZoomChange) {
      onZoomChange(event.target.zoom);
    }
  };

  const handleMapClick = (event) => {
    if (onMapClick) {
      onMapClick(event.latLng);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '50vh' }} // Adjust height as needed
        zoom={zoomLevel}
        center={mapCenter}
        onZoomChange={handleZoomChange}
        onClick={handleMapClick}
      >
        {/* Optionally add more markers, overlays, etc. */}
        <MarkerClusterer>
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position} />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

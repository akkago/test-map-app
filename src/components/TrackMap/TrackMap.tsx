import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from "../../img/marker.svg";
import { Polyline } from 'react-leaflet';
import useTrackMap from './TrackMap.hook';
import './TrackMap.css';

export default function TrackMap() {
    const {
        selectedTrack
    } = useTrackMap();

    const markerIcon = L.icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
    });
    const limeOptions = { color: 'lime' };

    return (
        <MapContainer
            className="map-container"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedTrack?.responseData && <>
                <Marker
                    position={selectedTrack?.responseData?.start}
                    icon={markerIcon}
                />

                <Polyline
                    pathOptions={limeOptions}
                    positions={selectedTrack?.responseData?.track}
                />
                <Marker
                    position={selectedTrack?.responseData?.end}
                    icon={markerIcon}
                />
            </>
            }

            {/* <Marker
          position={[51.0, 19.0]}
          icon={markerIcon}
        >
           <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> 
        </Marker> */}
        </MapContainer>
    )
}
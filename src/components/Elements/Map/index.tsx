import {useState, useEffect} from 'react'
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
import { GeolocationPosition } from '../../../types'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

function LocationMarker({location}: {location: GeolocationPosition}) {
  const position: L.LatLng = new L.LatLng(location.lat, location.lng)
  
  return (
    <Marker 
      position={position} 
      icon={DefaultIcon}
      draggable={false}
    >
      <Popup>
        <div>
          <p className="font-bold">User Location</p>
          <p>Lat: {position.lat.toFixed(6)}</p>
          <p>Lng: {position.lng.toFixed(6)}</p>
        </div>
      </Popup>
    </Marker>
  )
}

function Map({location}: {location: GeolocationPosition}) {
  if(!location || !location.lat || !location.lng) return 'No location found'

  return (
    <div className='w-full bg-gray-100 h-[600px] md:h-[550px]'>
      <MapContainer 
        center={[location.lat, location.lng]} 
        zoom={16}
        scrollWheelZoom={true} 
        className='h-full'
        whenReady={(map) => {
          map.target.setMaxBounds([[-90, -180], [90, 180]])
        }}
        maxZoom={18}
        minZoom={3}
        zoomControl={true}
        doubleClickZoom={true}
        attributionControl={true}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={18}
          minZoom={3}
          updateWhenZooming={false}
          updateWhenIdle={true}
        />
        <LocationMarker location={location}/>
      </MapContainer>
    </div>
  )
}

export default Map
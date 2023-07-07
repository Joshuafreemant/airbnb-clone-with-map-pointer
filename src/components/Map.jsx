import React from 'react'
import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import { MapPoint, OverlayContainer } from "./index";


function Map({ center, zoom }) {
    const ref = useRef(null)
    const [map, setMap] = useState(null)
  
    useEffect(() => {
      if (ref.current) {
        let createdMap = new window.google.maps.Map(ref.current, {
          center,
          zoom,
          disableDefaultUI: true,
          clickableIcons: false
        })
        setMap(createdMap)
      }
    }, [center, zoom])
  
    return (
      <div ref={ref} id="map" className='h-screen'>
        {data.map((apartment, index) => (
          <OverlayContainer
            map={map}
            position={{
              lat: apartment.lat,
              lng: apartment.lng
            }}
            key={index}
          >
            <MapPoint
              image={apartment.img_url}
              imageTwo={apartment.img_url_two}
              imageThree={apartment.img_url_three}
              address={apartment.location}
              host={apartment.host}
              date={apartment.date}
              rating={apartment.rating}
              cost_per_night={apartment.cost_per_night}
            />
          </OverlayContainer>
        ))}
      </div>
    )
  }
  
  export default Map
  
import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import { MapPoint, OverlayContainer } from "./index";

type MapProps = {
  center: google.maps.LatLngLiteral
  zoom: number
}

const useStyles = makeStyles({
  map: {
    height: '100vh'
  }
})

function Map({ center, zoom }: MapProps) {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map<Element> | null>(null)
  const classes = useStyles();

  useEffect(() => {
    if (ref.current) { 
      let createdMap = new window.google.maps.Map(
        ref.current,
        {
          center,
          zoom,
          disableDefaultUI: true,
          clickableIcons: false
        }
      );
      setMap(createdMap)
    }
  }, [center, zoom]);

  return <div ref={ref} id="map" className={classes.map}>
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
  </div>;
}

export default Map
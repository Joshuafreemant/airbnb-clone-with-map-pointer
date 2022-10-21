import React,{ useEffect, useRef, useState } from "react"
import {ApartmentCard,ApartmentPoint} from "./index"

type MapPointProps = {
  image: string
    imageTwo:string
    imageThree:string
    address: string
    host: string
    date: string
    rating: number
    cost_per_night: number
  
}

const MapPoint = (props: MapPointProps) => {
  const [opened, setIsOpened] = useState<boolean>(false)
  const handleOnOpen = () => setIsOpened(true)
  const handleOnClose = () => setIsOpened(false)
  const containerRef = useRef<HTMLDivElement>(null)

// Hook for handle outside click - simple implementation from stack overflow
  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpened(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (<div ref={containerRef}>
    {opened ?
      <ApartmentCard
        image={props.image}
        imageTwo={props.imageTwo}
        imageThree={props.imageThree}
        address={props.address}
        host={props.host}
        date={props.date}
        rating={props.rating}
        
        cost_per_night={props.cost_per_night}
        handleClose={handleOnClose}
      /> :
      <ApartmentPoint
      cost_per_night={props.cost_per_night}
        onClick={handleOnOpen}
      />}
  </div>)
}

export default MapPoint
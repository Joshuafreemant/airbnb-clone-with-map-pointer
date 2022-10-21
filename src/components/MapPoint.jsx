import React,{ useEffect, useRef, useState } from "react"
import {ApartmentCard,ApartmentPoint} from "./index"

const MapPoint = props => {
  const [opened, setIsOpened] = useState(false)
  const handleOnOpen = () => setIsOpened(true)
  const handleOnClose = () => setIsOpened(false)
  const containerRef = useRef(null)

  // Hook for handle outside click - simple implementation from stack overflow
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpened(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [containerRef])

  return (
    <div ref={containerRef}>
      {opened ? (
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
        />
      ) : (
        <ApartmentPoint
          cost_per_night={props.cost_per_night}
          onClick={handleOnOpen}
        />
      )}
    </div>
  )
}

export default MapPoint

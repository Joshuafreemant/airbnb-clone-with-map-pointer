import * as React from 'react'
import ReactDOM from 'react-dom';

// base function for creating DOM div node
function createOverlayElement() {
  const el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.display = 'inline-block';
  el.style.width = '9999px';
  return el;
}

// Our OverlayComponent will recieve map, postion and children props - position is coords, map is google.map object and children is a component that will be render in overlay
const OverlayContainer = props => {

    const google = window.google;

  const overlay = React.useRef(null)
  const el = React.useRef(null)

  // modified OverlayView from google.maps [https://developers.google.com/maps/documentation/javascript/reference/3.44/overlay-view?hl=en]
  class OverlayView extends window.google.maps.OverlayView {
    position = null
    content = null

    constructor(props) {
      super()
      props.position && (this.position = props.position)
      props.content && (this.content = props.content)
    }

    onAdd = () => {
      if (this.content) this.getPanes().floatPane.appendChild(this.content)
    }

    onRemove = () => {
      if (this.content?.parentElement) {
        this.content.parentElement.removeChild(this.content)
      }
    }

    draw = () => {
      if (this.position) {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        )
        this.content.style.left = divPosition.x + "px"
        this.content.style.top = divPosition.y + "px"
      }
    }
  }

  React.useEffect(() => {
    return () => {
      if (overlay.current) overlay.current.setMap(null)
    }
  }, [])

  if (props.map) {
    el.current = el.current || createOverlayElement()
    overlay.current =
      overlay.current ||
      new OverlayView({
        position: new google.maps.LatLng(
          props.position.lat,
          props.position.lng
        ),
        content: el.current
      })
    overlay.current.setMap(props.map)
    return ReactDOM.createPortal(props.children, el.current)
  }
  return null
}

export default OverlayContainer

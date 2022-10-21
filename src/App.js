import React, { useState } from 'react'
import { Navbar, Listings, Footer, Map } from "./components/";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { BsMapFill, BsListUl } from 'react-icons/bs';


import data from "./data.json";


// Here we can add views when map will loading or failure
const render = (status) => {
  if (status === Status.LOADING)
    return React.createElement("h3", null,
      status,
      " ..");
  if (status === Status.FAILURE)
    return React.createElement("h3", null,
      status,
      " ...");
  return React.createElement(React.Fragment, null);
};

function App() {

  const [filterData, setFilterData] = useState([])
  const [click, setClick] = useState(false)
  const [showMap, setShowMap] = useState(false)


  const handleMap = () => {
    setShowMap((prev) => !prev)
  }
  return (

    <div className="App relative">
      <Navbar data={data} setFilterData={setFilterData} setClick={setClick} />



      {showMap ?
        <div className="map">
          <Wrapper apiKey={process.env.REACT_APP_GOOGLE_KEY} render={render}>
            <Map center={{ lat: 6.465422, lng: 3.406448 }} zoom={10} />
          </Wrapper>
        </div> :
        <>
        <Listings data={data} filterData={filterData} click={click} />
        <Footer />
        </>

      }


      <button onClick={handleMap} className='bg-[#222222] rounded-3xl px-5 py-3 text-white fixed bottom-20 show-btn left-[610px] flex items-center gap-2 '>
        {!showMap ? <>Show Map <BsMapFill className='text-white' /></> : <> Show List <BsListUl className='text-white text-xl' /></>}
      </button>

    </div>
  );
}

export default App;

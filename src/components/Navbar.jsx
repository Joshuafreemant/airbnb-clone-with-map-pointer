import React, { useContext, useState, useRef } from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { logo } from '../assets/images'
import { beach, islands, OMG, sharedHomes, amazing, beachfront, bed, caves, tropical, mansions, Iconic, Design, farm, cabin, national } from '../assets/images/icons'
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFilter } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';










const Navbar = ({ data, setFilterData, setClick }) => {


    // STATES AND REF FOR HORIZONTAL SCROLL ACTIONS
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);



    // STATE FOR ACTIVE TAB
    const [active, setActive] = useState({
        shared: false,
        omg: false,
        beach: false,
        island: false,
        farm: false,
        beachfront: false,
        iconic: false,
        design: false,
        mansion: false,
        cave: false,
        bed: false,
        cabin: false,
        tropical: false,
        amazing: false,
        national: false,
    });



    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };




    const sharedHomeFilter = () => {
        let sharedHomeData = data?.filter((data) => {
            return data?.category === 'shared_homes'
        })
        setFilterData(sharedHomeData)
        setClick(true)
        setActive({ active, shared: true })
    }

    const omgFilter = () => {
        let omgData = data.filter((data) => {
            return data.category === 'omg'
        })
        setFilterData(omgData)
        setClick(true)
        setActive({ active, omg: true })
    }

    const beachFilter = () => {
        let beachData = data.filter((data) => {
            return data.category === 'beach'
        })
        setFilterData(beachData)
        setClick(true)
        setActive({ active, beach: true })
    }

    const islandFilter = () => {
        let islandData = data.filter((data) => {
            return data.category === 'island'
        })
        setFilterData(islandData)
        setClick(true)
        setActive({ active, island: true })


    }
    const beachFrontFilter = () => {
        let beachfrontData = data.filter((data) => {
            return data.category === 'beach_front'
        })
        setFilterData(beachfrontData)
        setClick(true)
        setActive({ active, beachfront: true })


    }

    const iconicFilter = () => {
        let iconicData = data.filter((data) => {
            return data.category === 'iconic'
        })
        setFilterData(iconicData)
        setClick(true)
        setActive({ active, iconic: true })
    }

    const designFilter = () => {
        let designData = data.filter((data) => {
            return data.category === 'design'
        })
        setFilterData(designData)
        setClick(true)
        setActive({ active, design: true })

    }

    const mansionsFilter = () => {
        let mansionData = data.filter((data) => {
            return data.category === 'mansion'
        })
        setFilterData(mansionData)
        setClick(true)
        setActive({ active, mansion: true })

    }

    const cavesFilter = () => {
        let caveData = data.filter((data) => {
            return data.category === 'caves'
        })
        setFilterData(caveData)
        setClick(true)
        setActive({ active, cave: true })

    }


    const bedFilter = () => {
        let bedData = data.filter((data) => {
            return data.category === 'bad_and_breakfasts'
        })
        setFilterData(bedData)
        setClick(true)
        setActive({ active, bed: true })

    }
    const tropicalFilter = () => {
        let tropicalData = data.filter((data) => {
            return data.category === 'tropical'
        })
        setFilterData(tropicalData)
        setClick(true)
        setActive({ active, tropical: true })

    }

    const amazingPoolFilter = () => {
        let amazingData = data.filter((data) => {
            return data.category === 'amazing_pool'
        })
        setFilterData(amazingData)
        setClick(true)
        setActive({ active, amazing: true })


    }

    const nationalFilter = () => {
        let nationalData = data.filter((data) => {
            return data.category === 'national_park'
        })
        setFilterData(nationalData)
        setClick(true)
        setActive({ active, national: true })


    }

    const cabinFilter = () => {
        let cabinData = data.filter((data) => {
            return data.category === 'cabin'
        })
        setFilterData(cabinData)
        setClick(true)

        setActive({ active, cabin: true })

    }

    const farmFilter = () => {
        let farmData = data.filter((data) => {
            return data.category === 'farm'
        })
        setFilterData(farmData)
        setClick(true)
        setActive({ active, farm: true })


    }





    const activeStyle = 'cursor-pointer border-b-black flex gap-2 items-center flex-col border-b-2  text-xs font-semibold ';

    const inactiveStyle =
        'cursor-pointer  flex items-center flex-col hover:border-b-gray-300 border-b-transparent gap-2 border-b-2  text-xs font-semibold ';




    return (
        <>
            <nav className='md:hidden z-20 bg-white fixed top-0 w-full flex justify-center px-2 items-center  py-3'>

                <div className="drop-shadow-xl  border-2 border-gray-200 rounded-[200px] w-full   px-3 py-2 flex justify-between items-center">
                    <div className="w-11/12 flex items-center gap-2">
                        <button className='w-2/12 text-lg font-medium text-black rounded-full'>
                            <FaSearch />
                        </button >

                        <div className="w-8/12 flex flex-col">
                            <h4 className='w-full font-semibold'>Where to?</h4>
                            <div className="w-full flex text-xs justify-between">
                                <button className='text-xs'>Anywhere -</button>
                                <button className='text-xs'>Any week -</button>
                                <button className='text-xs'>Add guests</button>
                            </div>
                        </div>
                    </div>



                    <div className="w-1/12">
                        <button className=' text-lg font-medium text-black rounded-full'>
                            <BsFilter />
                        </button >
                    </div>


                </div>

            </nav>


            <nav className='hidden z-20 bg-white fixed top-0 w-full md:flex justify-between items-center  px-8 py-4 border-b border-gray-200'>
                <img src={logo} alt="" className='lg:w-[140px] md:w-[70px]' />
                <div className="drop-shadow-sm   border-[2px] border-gray-100 rounded-[200px] px-4 py-[7px] flex justify-between items-center">
                    <button className='border-r border-gray-300 pr-4 text-black text-[15px]'>Anywhere</button>
                    <button className='border-r border-gray-300 px-4 text-black text-[15px]'>Any week</button>
                    <div className="flex pl-3 gap-2">
                        <button className='text-gray-600  text-[15px]'>Add guests </button>
                        <button className='bg-red-500 p-2 text-sm text-white rounded-full'>
                            <FaSearch />
                        </button >
                    </div>

                </div>

                <div className="flex items-center justify-between gap-4 ">
                    <button className='font-semibold'>Become a Host</button>
                    <button>
                        <TbWorld className='text-xl' />
                    </button>
                    <div className="border border-gray-300 rounded-[50px]  gap-4  px-3 py-[7px] flex justify-between items-center">
                        <GiHamburgerMenu className='w-[20px] h-[20px] text-gray-500' />
                        <div className="relative">
                            <FaUserCircle className='w-[30px] h-[30px] text-gray-500' />
                            <div className="absolute w-3 h-3 bg-red-400 -top-[1px] border border-white -right-1 rounded-full"></div>

                        </div>
                    </div>
                </div>
            </nav>

            <nav className='z-50 bg-white fixed md:top-[81px] top-0 flex  px-8 py-4 w-full'>

                <div className='flex items-center gap-6 Navbar'>

                    {scrollX !== 0 && (
                        <button
                            className="hidden drop-shadow-2xl  mt-2 md:flex justify-center items-center  p-1 border border-gray-600 rounded-full h-[30px] w-[30px]"
                            onClick={() => slide(-700)}
                        >

                            <MdKeyboardArrowLeft className='text-2xl' />
                        </button>
                    )}


                    <div ref={scrl} onScroll={scrollCheck} className="ul px-5 flex gap-[20px] ">



                        <div  className={active.shared === true ? activeStyle : inactiveStyle} onClick={sharedHomeFilter}>
                            <img src={sharedHomes} alt="" className={`w-[25px] ${!active.shared ? 'opacity-60' : 'opacity-100'}`} />
                            <p  className={`text-xs font-normal ${!active.shared ? 'opacity-60' : 'opacity-100'}`}>Shared Homes</p>
                        </div>

                        <div  className={active.omg === true ? activeStyle : inactiveStyle} onClick={omgFilter}>
                            <img src={OMG} alt="" className={`w-[25px] ${!active.omg ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.omg ? 'opacity-60' : 'opacity-100'}`}>OMG!</p>
                        </div>

                         <div  className={active.beach === true ? activeStyle : inactiveStyle} onClick={beachFilter}>
                            <img src={beach} alt="" className={`w-[25px] ${!active.beach ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.beach ? 'opacity-60' : 'opacity-100'}`}>Beach</p>
                        </div>


                        <div  className={active.island === true ? activeStyle : inactiveStyle} onClick={islandFilter}>
                            <img src={islands} alt="" className={`w-[25px] ${!active.island ? 'opacity-60' : 'opacity-100'}`} />

                            <p className={`text-xs font-normal ${!active.island ? 'opacity-60' : 'opacity-100'}`}>Islands</p>

                        </div>

                        <div  className={active.beachfront === true ? activeStyle : inactiveStyle} onClick={beachFrontFilter}>
                            <img src={beachfront} alt="" className={`w-[25px] ${!active.beachfront ? 'opacity-60' : 'opacity-100'}`} />

                            <p className={`text-xs font-normal ${!active.beachfront ? 'opacity-60' : 'opacity-100'}`}>Beachfront</p>

                        </div>

                        <div  className={active.iconic === true ? activeStyle : inactiveStyle} onClick={iconicFilter}>
                            <img src={Iconic} alt="" className={`w-[25px] ${!active.iconic ? 'opacity-60' : 'opacity-100'}`} />
                            <p  className={`text-xs font-normal ${!active.iconic ? 'opacity-60' : 'opacity-100'}`}>Iconic cities</p>

                        </div>

                        <div  className={active.design === true ? activeStyle : inactiveStyle} onClick={designFilter}>
                            <img src={Design} alt="" className={`w-[25px] ${!active.design ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.design ? 'opacity-60' : 'opacity-100'}`}>Design</p>

                        </div>

                        <div  className={active.mansion === true ? activeStyle : inactiveStyle} onClick={mansionsFilter}>
                            <img src={mansions} alt="" className={`w-[25px] ${!active.mansion ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.mansion ? 'opacity-60' : 'opacity-100'}`}>Mansions</p>

                        </div>
                        <div  className={active.cave === true ? activeStyle : inactiveStyle} onClick={cavesFilter}>
                            <img src={caves} alt="" className={`w-[25px] ${!active.cave ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.cave ? 'opacity-60' : 'opacity-100'}`}>Caves</p>

                        </div>

                        <div  className={active.bed === true ? activeStyle : inactiveStyle} onClick={bedFilter}>
                            <img src={bed} alt="" className={`w-[25px] ${!active.bed ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.bed ? 'opacity-60' : 'opacity-100'}`}>Bed & breakfasts</p>


                        </div>

                        <div  className={active.tropical === true ? activeStyle : inactiveStyle} onClick={tropicalFilter}>
                            <img src={tropical} alt="" className={`w-[25px] ${!active.tropical ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.tropical ? 'opacity-60' : 'opacity-100'}`}>Tropical</p>

                        </div>

                        <div  className={active.amazing === true ? activeStyle : inactiveStyle} onClick={amazingPoolFilter}>
                            <img src={amazing} alt="" className={`w-[25px] ${!active.amazing ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.amazing ? 'opacity-60' : 'opacity-100'}`}>Amazing Pool</p>

                        </div>

                        <div  className={active.national === true ? activeStyle : inactiveStyle} onClick={nationalFilter}>
                            <img src={national} alt="" className={`w-[25px] ${!active.national ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.national ? 'opacity-60' : 'opacity-100'}`}>National Parks</p>

                        </div>

                        <div  className={active.cabin === true ? activeStyle : inactiveStyle} onClick={cabinFilter}>
                            <img src={cabin} alt="" className={`w-[25px] ${!active.cabin ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.cabin ? 'opacity-60' : 'opacity-100'}`}>Cabins</p>

                        </div>

                        <div  className={active.farm === true ? activeStyle : inactiveStyle} onClick={farmFilter}>
                            <img src={farm} alt="" className={`w-[25px] ${!active.farm ? 'opacity-60' : 'opacity-100'}`} />
                            <p className={`text-xs font-normal ${!active.farm ? 'opacity-60' : 'opacity-100'}`}>Farms</p>

                        </div> 
                    </div>
                    {!scrolEnd && (
                        <button
                            className="hidden drop-shadow-2xl  mt-2 md:flex justify-center items-center  p-1 border border-gray-600 rounded-full h-[30px] w-[30px]"
                            onClick={() => slide(+700)}
                        >

                            <MdKeyboardArrowRight className='text-2xl' />
                        </button>

                    )}


                    <div className="hidden md:flex border border-gray-300 rounded-xl items-center gap-2 p-3 ">
                        <BsFilter className='text-[15px]' />

                        <p className='text-sm font-semibold'>Filters</p>
                    </div>


                </div>

            </nav>
        </>
    )
}




export default Navbar
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
        let sharedHomeData = data.filter((data) => {
            return data.category === 'shared_homes'
        })
        setFilterData(sharedHomeData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: true,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))

    }

    const omgFilter = () => {
        let omgData = data.filter((data) => {
            return data.category === 'omg'
        })
        setFilterData(omgData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: true,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,

        }))



    }

    const beachFilter = () => {
        let beachData = data.filter((data) => {
            return data.category === 'beach'
        })
        setFilterData(beachData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: true,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,

        }))



    }

    const islandFilter = () => {
        let islandData = data.filter((data) => {
            return data.category === 'island'
        })
        setFilterData(islandData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: true,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))

    }
    const beachFrontFilter = () => {
        let beachfrontData = data.filter((data) => {
            return data.category === 'beach_front'
        })
        setFilterData(beachfrontData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: true,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))

    }

    const iconicFilter = () => {
        let iconicData = data.filter((data) => {
            return data.category === 'iconic'
        })
        setFilterData(iconicData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: true,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))

    }

    const designFilter = () => {
        let designData = data.filter((data) => {
            return data.category === 'design'
        })
        setFilterData(designData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: true,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))
    }

    const mansionsFilter = () => {
        let mansionData = data.filter((data) => {
            return data.category === 'mansion'
        })
        setFilterData(mansionData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: true,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,

        }))
    }

    const cavesFilter = () => {
        let caveData = data.filter((data) => {
            return data.category === 'caves'
        })
        setFilterData(caveData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: true,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))
    }


    const bedFilter = () => {
        let bedData = data.filter((data) => {
            return data.category === 'bad_and_breakfasts'
        })
        setFilterData(bedData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: true,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,
        }))
    }
    const tropicalFilter = () => {
        let tropicalData = data.filter((data) => {
            return data.category === 'tropical'
        })
        setFilterData(tropicalData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: true,
            amazing: false,
            national: false,
            cabin: false,
            farm: false,

        }))
    }

    const amazingPoolFilter = () => {
        let amazingData = data.filter((data) => {
            return data.category === 'amazing_pool'
        })
        setFilterData(amazingData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: true,
            national: false,
            cabin: false,
            farm: false,

        }))
    }

    const nationalFilter = () => {
        let nationalData = data.filter((data) => {
            return data.category === 'national_park'
        })
        setFilterData(nationalData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: true,
            cabin: false,
            farm: false,

        }))
    }

    const cabinFilter = () => {
        let cabinData = data.filter((data) => {
            return data.category === 'cabin'
        })
        setFilterData(cabinData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: true,
            farm: false,

        }))
    }

    const farmFilter = () => {
        let farmData = data.filter((data) => {
            return data.category === 'farm'
        })
        setFilterData(farmData)
        setClick(true)
        setActive((prev) => ({
            ...prev,
            beach: false,
            omg: false,
            shared: false,
            beachfront: false,
            island: false,
            iconic: false,
            design: false,
            mansion: false,
            cave: false,
            bed: false,
            tropical: false,
            amazing: false,
            national: false,
            cabin: false,
            farm: true,

        }))
    }





    const activeStyle = 'border-b-black border-b-4 text-xs font-semibold';

    const inactiveStyle =
        'before:border-b-transparent text-xs font-semibold';




    return (
        <>
            <nav className='md:hidden z-20 bg-white fixed top-0 w-full flex justify-center items-center  py-3'>

                <div className="drop-shadow-xl  border-2 border-gray-200 rounded-[200px] gap-12  px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <button className=' p-2 text-lg font-medium text-black rounded-full'>
                            <FaSearch />
                        </button >

                        <div className="flex flex-col">
                            <h4 className='font-semibold'>Where to?</h4>
                            <div className="flex justify-between gap-4">
                                <button className='text-xs'>Anywhere -</button>
                                <button className='text-xs'>Any week -</button>
                                <button className='text-xs'>Add guests</button>
                            </div>
                        </div>
                    </div>



                    <div className="">
                        <button className=' p-2 text-lg font-medium text-black rounded-full'>
                            <FaSearch />
                        </button >
                    </div>


                </div>

            </nav>
            <nav className='hidden z-20 bg-white fixed top-0 w-full md:flex justify-between items-center  px-8 py-5'>
                <img src={logo} alt="" className='w-[150px]' />
                <div className="drop-shadow-md w-[360px] ml-32 border-2 border-gray-200 rounded-[200px] px-4 py-[8px] flex justify-between items-center">
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
                     <TbWorld className='text-xl'/>   
                    </button>
                    <div className="border border-gray-300 rounded-[50px] w-[95px] gap-4  px-4 py-2 flex justify-between items-center">
                        <GiHamburgerMenu className='w-[20px] h-[20px] text-gray-500' />
                        <div className="relative">
                            <FaUserCircle className='w-[30px] h-[30px] text-gray-500' />
                            <div className="absolute w-3 h-3 bg-red-400 -top-[1px] border border-white -right-1 rounded-full"></div>

                        </div>
                    </div>
                </div>
            </nav>

            <nav className='z-20 bg-white fixed md:top-[90px] top-[75px] flex md:border-t border-gray-300 px-8 py-4 w-full'>

                <div className='flex items-center gap-6 Navbar'>

                    {scrollX !== 0 && (
                        <button
                            className="drop-shadow-2xl  mt-2 flex justify-center items-center  p-1 border border-gray-600 rounded-full h-[30px] w-[30px]"
                            onClick={() => slide(-700)}
                        >

                            <MdKeyboardArrowLeft className='text-2xl' />
                        </button>
                    )}


                    <div ref={scrl} onScroll={scrollCheck} className="ul px-5 flex gap-[20px]">



                        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={sharedHomeFilter}>
                            <img src={sharedHomes} alt="" className='w-[25px]' />
                            <p className={active.shared === true ? activeStyle : inactiveStyle}>Shared Homes</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={omgFilter}>
                            <img src={OMG} alt="" className='w-[25px]' />
                            <p className={active.omg === true ? activeStyle : inactiveStyle}>OMG!</p>
                        </div>

                        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={beachFilter}>
                            <img src={beach} alt="" className='w-[25px]' />
                            <p className={active.beach === true ? activeStyle : inactiveStyle}>Beach</p>
                        </div>


                        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={islandFilter}>
                            <img src={islands} alt="" className='w-[25px]' />

                            <p className={active.island === true ? activeStyle : inactiveStyle}>Islands</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={beachFrontFilter}>
                            <img src={beachfront} alt="" className='w-[25px]' />

                            <p className={active.beachfront === true ? activeStyle : inactiveStyle}>Beachfront</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={iconicFilter}>
                            <img src={Iconic} alt="" className='w-[25px]' />
                            <p className={active.iconic === true ? activeStyle : inactiveStyle}>Iconic cities</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={designFilter}>
                            <img src={Design} alt="" className='w-[25px]' />
                            <p className={active.design === true ? activeStyle : inactiveStyle}>Design</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={mansionsFilter}>
                            <img src={mansions} alt="" className='w-[25px]' />
                            <p className={active.mansion === true ? activeStyle : inactiveStyle}>Mansions</p>

                        </div>
                        <div className="flex flex-col items-center gap-2" onClick={cavesFilter}>
                            <img src={caves} alt="" className='w-[25px]' />
                            <p className={active.cave === true ? activeStyle : inactiveStyle}>Caves</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={bedFilter}>
                            <img src={bed} alt="" className='w-[25px]' />
                            <p className={active.bed === true ? activeStyle : inactiveStyle}>Bed & breakfasts</p>


                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={tropicalFilter}>
                            <img src={tropical} alt="" className='w-[25px]' />
                            <p className={active.tropical === true ? activeStyle : inactiveStyle}>Tropical</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={amazingPoolFilter}>
                            <img src={amazing} alt="" className='w-[25px]' />
                            <p className={active.amazing === true ? activeStyle : inactiveStyle}>Amazing Pool</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={nationalFilter}>
                            <img src={national} alt="" className='w-[25px]' />
                            <p className={active.national === true ? activeStyle : inactiveStyle}>National Parks</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={cabinFilter}>
                            <img src={cabin} alt="" className='w-[25px]' />
                            <p className={active.cabin === true ? activeStyle : inactiveStyle}>Cabins</p>

                        </div>

                        <div className="flex flex-col items-center gap-2" onClick={farmFilter}>
                            <img src={farm} alt="" className='w-[25px]' />
                            <p className={active.farm === true ? activeStyle : inactiveStyle}>Farms</p>

                        </div>
                    </div>
                    {!scrolEnd && (
                        <button
                            className="drop-shadow-2xl  mt-2 flex justify-center items-center  p-1 border border-gray-600 rounded-full h-[30px] w-[30px]"
                            onClick={() => slide(+700)}
                        >

                            <MdKeyboardArrowRight className='text-2xl' />
                        </button>

                    )}


                    <div className="flex border border-gray-300 rounded-xl items-center gap-2 p-3 ">
                        <BsFilter className='text-[15px]' />

                        <p className='text-sm font-semibold'>Filters</p>
                    </div>


                </div>

            </nav>
        </>
    )
}




export default Navbar
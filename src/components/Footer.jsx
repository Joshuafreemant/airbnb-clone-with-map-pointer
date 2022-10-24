import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowLeft } from 'react-icons/md';
import { FaSearch,FaRegHeart } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';


const Footer = () => {
  const [click, setClick] = useState(false)

  const showFooter = () => {
    setClick(true)
  }
  return (
    <>
      <nav className='z-50 bg-white fixed bottom-0 border-t border-gray-300 px-12 py-5 w-full'>
        <div className="hidden md:flex justify-between">
          <ul className='flex items-center gap-4'>
            <li>© 2022 Airbnb, Inc.</li>
            <li className='flex items-center gap-1'> <span className='text-[9px]'>&bull;</span>Privacy</li>
            <li className='flex items-center gap-1'> <span className='text-[9px]'>&bull;</span>Terms</li>
            <li className='flex items-center gap-1'> <span className='text-[9px]'>&bull;</span>Sitemap</li>
            <li className='flex items-center gap-1'> <span className='text-[9px]'>&bull;</span>Destinations</li>
          </ul>


          <ul className='flex items-center gap-4'>

            <li className='flex items-center gap-1'> English (US)</li>
            <li className='flex items-center gap-1'> $ USD</li>
            <li className='flex items-center gap-1'> Support & resources</li>
            <li className='flex items-center gap-1 text-xl'>
              <button onClick={showFooter}>
                <MdKeyboardArrowUp />

              </button>
            </li>
          </ul>
        </div>

        <div className="flex md:hidden px-8 w-full justify-around">
          <div className="flex flex-col items-center justify-center">
            <button className='text-red-400 p-2 text-2xl rounded-full'>
              <FaSearch />
            </button >
            <p className='text-sm'>Explore</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button className=' p-2 text-2xl text-gray-400 rounded-full'>
            <FaRegHeart />

            </button >
            <p className='text-sm'>Wishlists</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button className='p-2 text-2xl text-gray-400 rounded-full'>
              <BiUserCircle />
            </button >
            <p className='text-sm'>Login</p>
          </div>


        </div>
      </nav>


    </>
  )
}

export default Footer
import React, { useState, useEffect } from 'react'
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




const ListingCard = ({ data }) => {

    const [liked, setLiked] = useState(false);
    const [allLike, setAllLike] = useState([]);

    let likes = []

    // HANDLE THE LIKE FUNCTIONALITY USING LOCALSTORAGE
    const handleLike = (e) => {
        e.preventDefault()
        if (localStorage.getItem("likedProperty")) {
            likes = JSON.parse(localStorage.getItem("likedProperty"))
        }
        likes.push(data.id)
        setLiked((prev) => !prev)
        localStorage.setItem("likedProperty", JSON.stringify(likes))
    }

    // HANDLE THE UNLIKE FUNCTIONALITY USING LOCALSTORAGE

    const handleUnlike = (e) => {
        e.preventDefault()
        setLiked((prev) => !prev)
        let liked = localStorage.getItem('likedProperty');
        let likedList = JSON.parse(liked)
        let index = likedList.findIndex((item) => item === data.id)
        likedList.splice(index, 1);
        localStorage.setItem('likedProperty', JSON.stringify(likedList));

    }

    useEffect(() => {
        if (localStorage.getItem("likedProperty")) {
            likes = JSON.parse(localStorage.getItem("likedProperty"))
            setAllLike(likes)
        }

    }, [liked]);

    return (
        <div className='flex flex-col gap-1'>
            <div className="relative">
                {(allLike.includes(data.id)) ?
                    <button className='absolute right-6 top-4 text-white z-40  text-xl' onClick={handleUnlike}>
                        <FaHeart />
                    </button>
                    : <button className='absolute right-6 top-4 text-white z-40 text-xl ' onClick={handleLike}>
                        <FaRegHeart />
                    </button>


                }

                <Carousel showThumbs={false} showStatus={false}>
                    <div className='relative'>
                        <img src={data.img_url} alt="" className='object-cover rounded-2xl w-[300px] h-[280px]' />
                    </div>
                    <div>
                        <img src={data.img_url_two} alt="" className='object-cover rounded-xl w-[300px] h-[280px]' />
                    </div>
                    <div>
                        <img src={data.img_url_three} alt="" className='object-cover rounded-xl w-[300px] h-[280px]' />
                    </div>
                </Carousel>
            </div>

            <div className="flex items-center justify-between">
                <p className='font-semibold text-[15px] mt-2'>{data.location}</p>
                <p className=' mt-2 flex items-center text-[15px] text-sm'><FaStar /> &nbsp; {data.rating}</p>

            </div>
            <p className='font-normal text-[15px]'>Hosted By &nbsp; {data.host}</p>
            <p className='font-normal text-[15px]'> {data.date}</p>
            <p className=' mb-8 text-[15px]'><span className='font-semibold'>${data.cost_per_night}</span> night</p>
        </div>
    )
}

export default ListingCard
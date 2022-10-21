import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import { Grid, IconButton } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloseIcon from '@material-ui/icons/Close';
import { ListingCard } from "./index";

import React, { useState, useEffect } from 'react'
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
    root: {
        maxWidth: 320,
        position: 'relative',
        borderRadius: '15px',
        zIndex: 1001,
        background: 'white',

    },
    media: {
        height: 250,
    },
    close: {
        position: 'absolute',
        left: 15,
        top: 15,
        zIndex: 1001,
        background: 'white',
        width: '25px',
        height: '25px'
    }
});

type ApartmentCardProps = {
    image: string
    imageTwo:string
    imageThree:string
    address: string
    host: string
    date: string
    rating: number
    cost_per_night: number
    handleClose: () => void
}

export default function ApartmentCard(props: ApartmentCardProps) {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <div className='' >
                <Carousel showThumbs={false} showStatus={false}>
                    <div className='relative'>
                        <img src={props.image} alt="" className='object-cover rounded-t-2xl w-[310px] h-[200px]' />
                    </div>
                    <div>
                        <img src={props.imageTwo} alt="" className='object-cover rounded-t-2xl w-[310px] h-[200px]' />
                    </div>
                    <div>
                        <img src={props.imageThree} alt="" className='object-cover rounded-t-2xl w-[310px] h-[200px]' />
                    </div>
                </Carousel>
            </div>
            <div className="p-2 flex flex-col gap-[10px]">
                <div className="flex items-center justify-between">
                    <p className='font-semibold text-[15px] mt-2'>{props.address}</p>
                    <p className=' mt-2 flex items-center text-[15px] text-sm'><FaStar /> &nbsp; {props.rating}</p>

                </div>
                <p className='font-normal text-[15px]'>Hosted By &nbsp; {props.host}</p>
                <p className='font-normal text-[15px]'> {props.date}</p>
                <p className=' mb-8 text-[15px]'><span className='font-semibold'>${props.cost_per_night}</span> night</p>
            </div>

        </div>
    );
}
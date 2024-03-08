import React from 'react'
import { useState } from 'react'
import { images } from './utilitiesHome';
import './rentalcarousel.css'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function RentalCarousel() {
    const [imgIndex, setImageIndex] = useState(0)

    function handleClick(interval){
        if (interval > 0) {
            if (imgIndex === images.length - 1) setImageIndex(0)
            else setImageIndex(imgIndex+interval)
        }
        if (interval < 0) {
            if (imgIndex === 0) setImageIndex(images.length - 1)
            else setImageIndex(imgIndex+interval)
        }
    }

    return (
        <div id='home-carousel-wrapper' className='w-lg-50 w-100 position-relative'>
            <img src={images[imgIndex].path} alt='house' className='w-100 d-block'/>
            <button onClick={()=>{handleClick(-1)}} className='carousel-btn position-absolute' style={{left: '0'}}><ArrowBigLeft/></button>
            <button onClick={()=>{handleClick(1)}} className='carousel-btn position-absolute' style={{right: '0'}}><ArrowBigRight/></button>
        </div>
    )
}

export default RentalCarousel

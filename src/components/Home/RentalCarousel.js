import React from 'react'
import { useState, useEffect } from 'react'
import './rentalcarousel.css'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

function RentalCarousel({images}) {
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

    const imgElementArr = images.map(img => {
        return <img 
                    key={img}
                    src={img} 
                    alt='house' 
                    className='carousel-img w-100 d-block rounded'
                    style={{translate: `${-100 * imgIndex}%`}}
                />
    })

    useEffect(() => {
        const interval = setInterval(() => {
            handleClick(1);
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <div id='home-carousel-wrapper' className='w-lg-50 w-100 position-relative rounded'>
            <div className='w-100 h-100 d-flex overflow-hidden rounded'>
                {imgElementArr}
            </div>
            
            <button onClick={()=>{handleClick(-1)}} className='carousel-btn position-absolute rounded-start' style={{left: '0'}}><ArrowBigLeft/></button>
            <button onClick={()=>{handleClick(1)}} className='carousel-btn position-absolute rounded-end' style={{right: '0'}}><ArrowBigRight/></button>
        </div>
    )
}

export default RentalCarousel

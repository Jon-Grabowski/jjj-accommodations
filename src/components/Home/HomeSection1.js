import React from 'react'
import './homesection1.css'

function HomeSection1() {
    //TODO: Absolute positioning gets weird on smaller screen size. Text not sitting in center of image.
    return (
        <div className='mt-5 position-relative rounded d-flex'>
            <img 
                        src='../images/stock-images/stock_img1.jpg' 
                        alt='bedroom'
                        className='w-100 rounded home-image'
            />
            <div className='position-absolute home-text-wrapper bg-dark bg-opacity-50'>
                        <p className='home-text display-2'><strong>Exceeding Expectations.</strong></p>
                        <p className='home-text display-2'><strong>Extraordinary Service.</strong></p>
            </div>
        </div>
    )
}

export default HomeSection1

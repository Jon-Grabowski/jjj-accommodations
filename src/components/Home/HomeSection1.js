import React from 'react'
import './homesection1.css'

function HomeSection1() {
    //TODO: Absolute positioning gets weird on smaller screen size. Text not sitting in center of image.
    return (
        <div id='h-section1-wrapper' className='d-flex justify-content-center align-items-center'>
            <div className='home-text-wrapper my-5'>
                        <img src='../images/JJJ-LOGO.png' alt='logo' className='home-image'/>
                        <h5 className='home-text my-0'><i>Exceeding Expectations, Extraordinary Service.</i></h5>
                        {/* <p className='home-text display-6'><i>Extraordinary Service.</i></p> */}
            </div>

                {/* <div className='d-flex justify-content-center align-items-center'>
                    <div className='home-text-wrapper my-5'>
                                <p className='home-text display-2'><i>Exceeding Expectations.</i></p>
                                <p className='home-text display-2'><i>Extraordinary Service.</i></p>
                    </div>
                </div> */}
        </div>
    )
}

export default HomeSection1

import React from 'react'
import Animation from '../Utilities/Animation'
import './homesection1.css'

function HomeSection1() {
    return (
        <div id='h-section1-wrapper' className='d-flex justify-content-center align-items-center'>
            <Animation variant='slideLeft' duration={1.3}>
            <div className='my-5'>
                <img src='../images/JJJ-LOGO.png' alt='logo' className='home-image'/>
                <h5 className='home-text my-0'><i>Exceeding Expectations, Extraordinary Service.</i></h5>
            </div>
            </Animation>
        </div>
    )
}

export default HomeSection1

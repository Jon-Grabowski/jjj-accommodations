import React from 'react'
import './about.css'
import { aboutText1, aboutText2 } from './utilityAbout'

function About() {
    
    return (
        <div className='container-xl'>
            <p className='display-4 text-start mt-2 m-lg-4 m-0'>About Us</p>
            <div id='about-wrapper' className='mt-3 d-flex flex-wrap align-items-center justify-content-center'>
                <div className='about-image-1'>
                    <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='image w-100 rounded'/>
                </div>
                <div className='about-text fs-5 position-relative'>
                    <p className='p-3'>{aboutText1}</p>
                </div>
            </div>
            <div id='about-wrapper' className='mt-3 d-flex flex-wrap align-items-center justify-content-center'>
                <div className='about-text fs-5'>
                    <p className='p-3'>{aboutText2}</p>
                </div>
                <div className='about-image-1'>
                    <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='w-100 rounded'/>
                </div>
            </div>
        </div>
    )
}

export default About

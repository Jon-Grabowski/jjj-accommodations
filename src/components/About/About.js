import React from 'react'
import './about.css'
import TopSectionAbout from './TopSectionAbout'
import { aboutText1, aboutText2 } from './utilityAbout'

function About() {
    
    return (
        <div className=''>
            <TopSectionAbout />
            <div className='about-wrapper'>
                <p className='display-4 container-xl fst-italic mb-5 pb-5'>"A family-run team passionate about taking care of your property needs with a personal touch!"</p>
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-1 gap-lg-5 bg-white bg-opacity-25'>
                    <div className='about-image-1 mb-1 mb-lg-0'>
                        <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='image w-100 rounded'/>
                    </div>
                    <div className='about-text fs-4'>
                        <p className='p-3'>{aboutText1}</p>
                    </div>
                </div>
                <div className='mt-5 d-flex flex-wrap align-items-center justify-content-center gap-1 gap-md-5'>
                    <div className='about-text fs-4'>
                        <p className='p-3'>{aboutText2}</p>
                    </div>
                    <div className='about-image-1'>
                        <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='w-100 rounded'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About

import React from 'react'
import './about.css'
import TopSectionAbout from './TopSectionAbout'
import Animation from '../Utilities/Animation'
import { aboutText1, aboutText2 } from './utilityAbout'

function About() {
    
    return (
        <div className=''>
            <TopSectionAbout />
            <div className='about-wrapper overflow-hidden'>
                <Animation variant='slideRight' duration={1.5}>
                    <p className='display-4 container-xl fst-italic mb-5 pb-5' style={{maxWidth: '60rem'}}>"<span className='fw-bold'>A family-run team</span> passionate about taking care of your property needs with a personal touch!"</p>
                </Animation>
                <div className='d-flex flex-wrap align-items-center justify-content-center gap-1 gap-lg-5 bg-white bg-opacity-25'>
                    <Animation variant='fadeIn' duration={2}>
                        <div className='about-image-1 mb-1 mb-lg-0'>
                            <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='image w-100 rounded'/>
                        </div>
                    </Animation>
                    <Animation variant='slideLeft' duration={1.5}>
                        <div className='about-text fs-4'>
                            <p className='p-3'>{aboutText1}</p>
                        </div>
                    </Animation>
                </div>
                <div className='mt-5 d-flex flex-wrap align-items-center justify-content-center gap-1 gap-md-5'>
                    <Animation variant='slideRight' duration={2}>
                        <div className='about-text fs-4'>
                            <p className='p-3'>{aboutText2}</p>
                        </div>
                    </Animation>
                    <Animation variant='fadeIn' duration={1.5}>
                        <div className='about-image-1'>
                            <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='w-100 rounded'/>
                        </div>
                    </Animation>
                </div>
            </div>
        </div>
    )
}

export default About

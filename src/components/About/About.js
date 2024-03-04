import React from 'react'
import './about.css'
import { aboutText1, aboutText2 } from './utilityAbout'

function About() {
    
    return (
            <div id='about-wrapper' className='mt-3 d-flex flex-wrap align-items-center justify-content-center'>
                <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' className='about-image-1'/>
                <div className='about-text fs-5'>
                    <p>{aboutText1}</p>
                </div>
            </div>
    )
}

export default About

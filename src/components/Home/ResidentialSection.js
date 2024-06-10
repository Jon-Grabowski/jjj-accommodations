import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../Utilities/Animation'
import { ArrowRight } from 'lucide-react';
import { serviceCardData } from './utilitiesHome';

function ResidentialSection() {
    const {btnText, headline, body, image, link} = serviceCardData[0]
    return (
        <div className='bg-white bg-opacity-25'>
            <div className='mb-4 py-4 px-2 bg-black bg-opacity-25 overflow-hidden'>
                <Animation variant="slideLeft" duration={1.5}>
                    <h1 className='display-2 fw-bold fst-italic'>{headline}</h1>
                </Animation>
            </div>
            <div className='container-lg'>
                <div className='row pb-4'>
                    <div className='col-md-6'>
                        <img src={image} alt='cleaning' className='rounded w-100'  />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <span className='fs-4 mb-5'>{body}</span>
                        <Link to={link}><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-5'>Learn More <ArrowRight/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentialSection

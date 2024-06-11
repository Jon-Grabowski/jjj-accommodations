import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../Utilities/Animation'
import { ArrowRight } from 'lucide-react';

function ResidentialSection() {

    return (
        <div className='bg-white bg-opacity-25 pb-4'>
            <div className='mb-4 py-4 px-2 bg-black bg-opacity-50 overflow-hidden'>
                <Animation variant="slideLeft" duration={1.5}>
                    <h1 className='display-2 fw-bold fst-italic'>Residential Property Services</h1>
                </Animation>
            </div>
            <div className='container-lg'>
                <Animation variant="fadeIn" duration={1.5}>
                    <div className='container-lg d-flex flex-column mb-3 text-end p-4'>
                        <span className='display-4 fw-bold mb-2 ps-3'>Expert Residential Services to Keep Your Home in Top Shape!</span>
                    </div>
                </Animation>
                <div className='row pb-4'>
                    <div className='col-lg-6'>
                        <img src='../images/services/services-card-image-1.jpg' alt='cleaning' className='rounded w-100'  />
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center ps-4'>
                        <h2 className='text-start mb-4'>Keep your home pristine and well-maintained with our comprehensive residential services including:</h2>
                        <ul className='text-start fs-3 mb-5'>
                            <li>Cleaning Packages</li>
                            <li>Handyman Services</li>
                            <li>Contractor Connections</li>
                            <li>Seasonal Services</li>
                        </ul>
                        <Link to='/residential'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-4'>Learn More <ArrowRight size={35}/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentialSection

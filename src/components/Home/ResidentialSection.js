import React from 'react'
import { Link } from 'react-router-dom';
import Animation from '../Utilities/Animation'
import { ArrowRight } from 'lucide-react';

function ResidentialSection() {

    return (
        <div className='pb-4 overflow-hidden'>
            <Animation variant='fadeIn' duration={1.5}>
                <div className='pt-2 bg-black bg-opacity-50 border-top border-white'>
                    <Animation variant="slideRight" duration={1.5}>
                        <div className="container-lg">
                            <h1 className='display-4 fw-bolder text-center mb-0 section-titles py-5'>Residential Property Services</h1>
                        </div>
                    </Animation>
                </div>
                <div className="bg-black bg-opacity-50 pb-4 border-bottom border-white">
                    <Animation variant="slideLeft" duration={1.5}>
                        <div className='d-flex justify-content-center '>
                            <div className="px-2" style={{"maxWidth":"40rem"}}>
                                <span className='display-6 mb-2 ps-3' style={{'maxWidth': "75%"}}>Expert Residential Services to Keep Your Home in Top Shape!</span>
                            </div>
                        </div>
                    </Animation>
                </div>
                <div className='container-xxl d-flex row m-auto align-items-center mt-4 pt-2 pb-5'>
                        <div className='col-xl-6 m-4 mx-auto'>
                            <img src='../images/services/services-card-image-1.jpg' alt='cleaning' className='rounded w-100'  />
                        </div>
                        <div className='col-xl-6 d-flex'>
                                <div id='rentals-text' className='mx-auto mb-3 mb-lg-0 d-flex flex-column justify-content-between align-items-center'>
                                    <div className='mb-3'>
                                        <h2 className='text-start fs-3 mb-4' style={{"maxWidth":"43rem"}}>Keep your home pristine and well-maintained with our comprehensive residential services:</h2>
                                        <ul className='text-start fs-4 mb-4'>
                                            <li>Cleaning Packages</li>
                                            <li>Handyman Services</li>
                                            <li>Contractor Connections</li>
                                            <li>Seasonal Services</li>
                                        </ul>
                                    </div>
                                    <Link to='/residential'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-4'>Learn More <ArrowRight size={35}/></button></Link>
                                </div>  
                            </div>
                        {/* <div className='m-auto col-lg-6 d-flex flex-column justify-content-center ps-4'>
                            <h2 className='text-start mb-4'>Keep your home pristine and well-maintained with our comprehensive residential services including:</h2>
                            <ul className='text-start fs-3 mb-5'>
                                <li>Cleaning Packages</li>
                                <li>Handyman Services</li>
                                <li>Contractor Connections</li>
                                <li>Seasonal Services</li>
                            </ul>
                            <Link to='/residential'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-4'>Learn More <ArrowRight size={35}/></button></Link>
                        </div> */}
                </div>
            </Animation>
        </div>
    )
}

export default ResidentialSection

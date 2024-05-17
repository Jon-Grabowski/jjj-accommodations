import React from 'react'
import CleaningTypeCard from './CleaningTypeCard'
import Animation from '../Utilities/Animation'
import { cleaningTypeData } from './utilitiesServices'
import './cleaningsection.css'
import { Link } from 'react-router-dom'

function CleaningSection() {

    const cleanings = cleaningTypeData.map(cleaning=> {
        return <CleaningTypeCard key={cleaning.heading} cleaning={cleaning} />
    })
    return (
        <div className='overflow-hidden'>
            <Animation variant='fadeIn' duration={1.5}>
                <div id='cleaning-services-banner'>
                    <div className='banner-background'>
                        <span id='cleaning-services-header' className='display-1 fw-bold text-black'>Cleaning Services</span>
                    </div>
                </div>
            </Animation>
                <div className='container-lg my-5 py-5'>
                    <Animation variant='slideLeft' duration={1.5}>
                        <h4 className='display-6 w-75 m-auto fst-italic'>"<span className='fw-bold display-5'>Experience Cleanliness Elevated:</span> Explore Our Range of Cleaning Services for Every Need and Occasion!"</h4>
                    </Animation>
                    <Animation variant='slideUp' duration={1.5}>
                        <div className='my-5 py-5 d-flex flex-wrap justify-content-evenly align-items-center'>
                            <div style={{maxWidth: '40rem'}}>
                                {cleanings}
                            </div>
                            <div id='cleaning-checklist' className='d-flex flex-column justify-content-center gap-4 mt-4 mt-xl-0' style={{minHeight:'30rem', maxWidth:'40rem'}}>
                                <div className='py-5 bg-black bg-opacity-75'>
                                    <h2 className='display-5 px-sm-3'>Cleaning Checklist</h2>
                                    <small className='fst-italic'>See a full list of services included in each cleaning package</small>
                                    <div className='mt-3'>
                                        <span className=''>
                                            <Link to='../pdfs/JJJ-Accomodations-Cleaning-Checklist.pdf' target='_blank' className='btn btn-outline-light me-2 fs-4'>View</Link>
                                        </span>
                                        <span>
                                            <a href='../pdfs/JJJ-Accomodations-Cleaning-Checklist.pdf' download={'JJJ Accomodations Cleaning Checklist'} className='btn btn-outline-light fs-4'>Download</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Animation>    
                </div>
        </div>
    )
}

export default CleaningSection

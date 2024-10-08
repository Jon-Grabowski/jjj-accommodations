import React from 'react'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import ManagementServiceCard from './ManagementServiceCard';
import Animation from '../Utilities/Animation';
import { rentalManagementData } from './utilitiesRental';
import './rentalmanagement.css'

function RentalManagement() {
    const {body, serviceArray} = rentalManagementData
    const cardSectionRef = useRef(null)
    const parentInView = useInView(cardSectionRef, {once:true})

    const services = serviceArray.map((service, index) => {
        return  <ManagementServiceCard key={service.title} service={service} index={index} parentInView={parentInView}/>
    });

    return (
        <div>
            <Animation variant='fadeIn' duration={1.5}>
                <div id='rental-management-banner' className=''>
                    <div className='bg-black bg-opacity-25 pt-4 pb-5'>
                        <Animation variant='slideLeft' duration={1.5}>
                            <span id='rental-management-header' className='display-1 fw-bold fst-italic'>Rental Property Management</span>
                        </Animation>
                        <div className='container-lg'>
                                <div className='d-flex flex-column mt-5 ms-xl-5 ps-xl-5' style={{maxWidth:'40rem'}}>
                                    <Animation variant='slideRight' duration={1.5}>
                                        <span id='management-header-body' className='fw-bold fs-4 fst-italic'>{body}</span>
                                    </Animation>
                                    <Link to='/contact' style={{width:'15rem'}} className='m-auto px-4 py-2 mt-5 btn-bg-blue border fw-bold text-light rounded-pill fs-4 text-decoration-none'>Contact Us</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </Animation>
            <div id="rental-services-wrapper" className='py-4'>
                <div className='container-lg '>
                    <div>
                        <h1>SPACE FOR BRIEF DESCRIBTION AND RENTAL CLEANING CHECKLIST</h1>
                    </div>
                    <Animation variant='fadeIn' duration={2}>
                        <h1 className='display-5 fw-bold py-5'>Explore Our Property Management Services</h1>
                    </Animation>
                        <div ref={cardSectionRef} className='position-relative d-flex flex-wrap justify-content-evenly gap-4 py-3 pb-3 overflow-hidden'>
                                {services}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RentalManagement

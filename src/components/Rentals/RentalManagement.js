import React from 'react'
import { Link } from 'react-router-dom';
import ManagementServiceCard from './ManagementServiceCard';
import './rentalmanagement.css'

function RentalManagement({data}) {
    const {body, serviceArray} = data

    const services = serviceArray.map(service => {
        return  <ManagementServiceCard key={service.title} service={service}/>
    });

    return (
        <div>
            <div id='rental-management-banner' className=''>
                <div className='bg-black bg-opacity-25 pt-4 pb-5'>
                    <div>
                        <span id='rental-management-header' className='display-1 fw-bold fst-italic'>Rental Property Management</span>
                    </div>
                    <div className='container-lg'>
                            <div className='d-flex flex-column mt-5 ms-xl-5 ps-xl-5' style={{maxWidth:'40rem'}}>
                                <span id='management-header-body' className='fw-bold fs-4 fst-italic'>{body}</span>
                                <Link to='/contact' style={{width:'15rem'}} className='m-auto px-4 py-2 mt-5 btn-bg-blue border fw-bold text-light rounded-pill fs-4 text-decoration-none'>Contact Us</Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 container-lg pb-4'>
                    <h1 className='fw-bold py-3 text-start'>Explore Our Property Management Services:</h1>
                    <div className='position-relative d-flex flex-wrap justify-content-evenly gap-2 py-3'>
                        {services}
                    </div>
            </div>
        </div>
    )
}

export default RentalManagement

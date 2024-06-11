import React from 'react'
import { Link } from 'react-router-dom'

function AdditionalServices() {
    return (
        <div id='addition-services-section' className='d-flex flex-xl-row-reverse row align-items-center'>
            <div className='col-xl-6'>
                <div className='float-xl-start'>
                    <div className='mx-auto' style={{maxWidth:'40rem'}}>
                        <img src='../images/stock-images/team-stock.jpg' alt='team' className='rounded w-100'/>
                    </div>
                </div>
            </div>
            <div className='col-xl-6'>
                <div className=' d-flex flex-column justify-content-center align-items-center pt-4 px-lg-4 float-xl-end'>
                    <h1 className='display-1 pb-3'>Additional Services</h1>
                    <h3 className='fst-italic pb-4 fs-2' style={{maxWidth: '40rem'}}>'We cater to all of our clients needs. Contact us today to discuss how we can make your life more relaxed and enjoyable!'</h3>
                    <Link to='/contact'><button className='btn-bg-blue px-4 py-2 border border-3 fw-bold text-light rounded-pill fs-3'>Contact Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AdditionalServices

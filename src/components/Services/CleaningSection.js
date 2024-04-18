import React from 'react'
import './cleaningsection.css'
import { Link } from 'react-router-dom'

function CleaningSection() {
    return (
        <div>
            <div id='cleaning-services-banner'>
                <span id='cleaning-services-header' className='display-3 fw-bold text-dark'>Cleaning Services</span>
            </div>
            <div className='container-lg my-5 d-flex flex-wrap justify-content-evenly align-items-center'>
                <div style={{maxWidth: '40rem'}}>
                    <div className='text-start'>
                        <h4 className='border-bottom d-inline pb-1 pe-2'>Routine Cleaning</h4>
                        <p className='mt-2'>
                            Our Routine Cleaning service is your ticket to a sparkling clean home without the hassle. Our meticulous team handles everything from mopping and vacuuming to dusting and sanitizing all surfaces in every corner of your property, including kitchens, bathrooms, bedrooms, living rooms, and laundry rooms. With attention to detail as our priority, we ensure every inch is left spotless and inviting. Priced affordably at $35 per hour, our Routine Cleaning service offers unbeatable value for a home that gleams with freshness and cleanliness!
                        </p>
                    </div>
                    <div className='text-start'>
                        <h4 className='border-bottom d-inline pb-1 pe-2'>Deep Cleaning</h4>
                        <p className='mt-2'>
                            Includes everything from Routine Cleaning plus sanitizing high-touch areas, cleaning wooden blind slats, and tackling overhead fan dust. Experience the difference in just one session, leaving your space sparkling and sanitized from top to bottom!
                        </p>
                    </div>
                    <div className='text-start'>
                        <h4 className='border-bottom d-inline pb-1 pe-2'>Move-In/Move-Out</h4>
                        <p className='mt-2'>
                            Includes everything in our Routine and Deep Cleaning packages, plus additional tasks like cleaning cabinets/pantry shelves, door and door frames, and sanitizing showerheads. Whether you're moving in or moving out, leave the cleaning to us and step into a fresh, sanitized space that's ready to welcome you home or impress potential buyers or tenants!
                        </p>
                    </div>
                </div>
                {/* <img src='../images/services/cleaning-stock-3.jpg' alt='cleaning sink' className='rounded overflow-hidden' style={{maxWidth: '25rem'}}/> */}
                <div id='cleaning-checklist' className='d-flex flex-column justify-content-center gap-4' style={{minHeight:'30rem', maxWidth:'40rem'}}>
                    <div className='py-5 bg-black bg-opacity-75'>
                        <h2 className='display-5 px-sm-3'>Cleaning Checklist</h2>
                        <div>
                            <span className=''>
                                <Link to='../pdfs/JJJ-Accomodations-Cleaning-Checklist.pdf' target='_blank' className='btn btn-outline-light me-2'>View</Link>
                            </span>
                            <span>
                                <a href='../pdfs/JJJ-Accomodations-Cleaning-Checklist.pdf' download={'JJJ Accomodations Cleaning Checklist'} className='btn btn-outline-light'>Download</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleaningSection

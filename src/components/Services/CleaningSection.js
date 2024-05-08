import React from 'react'
import './cleaningsection.css'
import { Link } from 'react-router-dom'

function CleaningSection() {
    return (
        <div>
            <div id='cleaning-services-banner'>
                <div className='banner-background'>
                    <span id='cleaning-services-header' className='display-1 fw-bold text-black'>Cleaning Services</span>
                </div>
            </div>
            <div className='container-lg my-5 py-5'>
                <h4 className='display-6 w-75 m-auto fst-italic'>"<span className='fw-bold display-5'>Experience Cleanliness Elevated:</span> Explore Our Range of Cleaning Services for Every Need and Occasion!"</h4>           
                <div className='my-5 py-5 d-flex flex-wrap justify-content-evenly align-items-center'>
                    <div style={{maxWidth: '40rem'}}>
                        <div className='text-start'>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="40" viewBox="0 -960 960 960" width="40" className='ms-2'>
                                    <path d="M120-40v-280q0-83 58.5-141.5T320-520h40v-320q0-33 23.5-56.5T440-920h80q33 0 56.5 23.5T600-840v320h40q83 0 141.5 58.5T840-320v280H120Zm80-80h80v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120h80v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120h80v-120q0-17 11.5-28.5T640-280q17 0 28.5 11.5T680-240v120h80v-200q0-50-35-85t-85-35H320q-50 0-85 35t-35 85v200Zm320-400v-320h-80v320h80Zm0 0h-80 80Z"/>
                                </svg>
                                <h4 className='border-bottom d-inline pb-1 pe-2 ms-3 mt-1'>Routine Cleaning</h4>
                            </div>
                            <p className='mt-2'>
                                Our Routine Cleaning service is your ticket to a sparkling clean home without the hassle. Our meticulous team handles everything from mopping and vacuuming to dusting and sanitizing all surfaces in every corner of your property, including kitchens, bathrooms, bedrooms, living rooms, and laundry rooms. With attention to detail as our priority, we ensure every inch is left spotless and inviting. Priced affordably at $35 per hour, our Routine Cleaning service offers unbeatable value for a home that gleams with freshness and cleanliness!
                            </p>
                        </div>
                        <div className='text-start'>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="40" viewBox="0 -960 960 960" width="40" className='ms-2'>
                                    <path d="M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm160 80q14-18 22.5-37.5T356-160h84v-280q0-33-23.5-56.5T360-520H160v120q-21 0-41.5 4T80-384v-216h120v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h93v80H640v-80h100L481-776q-12-29-38.5-46.5T384-840q-44 0-74 30t-30 74v136h80q66 0 113 47t47 113v360H320Zm-20-260Z"/>
                                </svg>
                                <h4 className='border-bottom d-inline pb-1 pe-2 ms-3 mt-1'>Deep Cleaning</h4>
                            </div>
                            <p className='mt-2'>
                                Includes everything from Routine Cleaning plus sanitizing high-touch areas, cleaning wooden blind slats, and tackling overhead fan dust. Experience the difference in just one session, leaving your space sparkling and sanitized from top to bottom!
                            </p>
                        </div>
                        <div className='text-start mb-5'>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="40" viewBox="0 -960 960 960" width="44" className='ms-2'>
                                    <path d="M280-80v-40q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120v40h-80v-40H360v40h-80Zm160-640h80v-80h-80v80Zm40 240q53 0 103.5-13.5T680-534v-106H280v106q46 27 96.5 40.5T480-480Zm-40 120v-42q-42-5-82-15t-78-27v244h400v-244q-38 17-78 27t-82 15v42h-80Zm40 0Zm0-120Zm0 36Z"/>
                                </svg>
                                <h4 className='border-bottom d-inline pb-1 pe-2 ms-3 mt-1'>Move-In/Move-Out</h4>
                            </div>
                            <p className='mt-2'>
                                Includes everything in our Routine and Deep Cleaning packages, plus additional tasks like cleaning cabinets/pantry shelves, door and door frames, and sanitizing showerheads. Whether you're moving in or moving out, leave the cleaning to us and step into a fresh, sanitized space that's ready to welcome you home or impress potential buyers or tenants!
                            </p>
                        </div>
                    </div>
                    <div id='cleaning-checklist' className='d-flex flex-column justify-content-center gap-4' style={{minHeight:'30rem', maxWidth:'40rem'}}>
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
            </div>
        </div>
    )
}

export default CleaningSection

import React from 'react'
import './rentaltopsection.css'

function RentalTopSection({managementRef, listingRef}) {
    return (
        <div id='rental-top-section-wrapper'>
            <div className='bg-black bg-opacity-50'>
                <div className='m-auto py-2'>
                    <p className='display-3 fw-bold fst-italic pt-3 border-bottom m-sm-auto mb-2 mx-3' style={{maxWidth:'33rem'}}>Rental Services</p>
                    <div className=' m-auto d-flex flex-wrap justify-content-center gap-3 gap-sm-4 fs-3' style={{maxWidth:'40rem'}}>
                        <span className='service-links' onClick={()=>{managementRef.current.scrollIntoView()}}>◊ Management</span>
                        <span className='service-links' onClick={()=>{listingRef.current.scrollIntoView()}}>◊ Listings</span>
                    </div>
                    <p className='fs-6 fst-italic pt-3' >"Trust us to care for your property with professionalism and a friendly touch!"</p>
                </div>
            </div>
        </div>
    )
}

export default RentalTopSection

import React from 'react'
import './topsectionabout.css'

function TopSectionAbout() {
    return (
        <div id='about-top-section-wrapper'>
            <div className='bg-black bg-opacity-50 rounded py-2'>
                <div className=' m-auto'>
                    <div className='py-4'>
                        <h1 className='d-inline display-3 border-bottom fw-bold fst-italic px-4'>About Us</h1>
                        <p className='text-wrap fs-5 m-auto py-2' style={{maxWidth:'30rem'}}></p>
                        <p className='fs-6 fst-italic pt-3' ></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSectionAbout

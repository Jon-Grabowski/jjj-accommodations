import React from 'react'
import Animation from '../Utilities/Animation'
import { Link } from 'react-router-dom'

function ReservationsBanner() {
    return (
        <Animation variant='fadeIn' duration={1.5}>
            <div id='home-res-banner' className='d-flex flex-column justify-content-center gap-4'>
                <h1 id='home-res-banner-text' className='display-2'>Plan a stay with us today.</h1>
                <Link 
                    to='https://www.airbnb.com/users/show/192864989'
                    target="_blank"
                    type="button" 
                    className='d-flex align-items-center btn text-white fs-4 mx-auto shadow' 
                    style={{backgroundColor:'#FF5A5F'}}
                    >Reservations<img style={{width:'30px'}} className='ms-2 pb-1' src='../images/social icons/airbnb-2-logo-white-no-text.png'
                    alt='AirBnB Logo'/>
                </Link>
            </div>
        </Animation>
    )
}

export default ReservationsBanner

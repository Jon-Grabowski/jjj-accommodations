import React from 'react'
import { Link } from 'react-router-dom';
import HomeSection1 from './HomeSection1'
import ServiceCardSection from './ServiceCardSection'
import RentalSection from './RentalSection';
import Animation from '../Utilities/Animation';
import './home.css';

function Home() {
    return (
        <div id='home-page-wrapper m-auto'>
            <Animation variant='fadeIn' duration={2}>
                <HomeSection1 />
            </Animation>
            <RentalSection />
            <ServiceCardSection />
            <Animation variant='fadeIn' duration={1.5}>
                <div id='home-res-banner' className='my-5 d-flex flex-column justify-content-center gap-2'>
                    <h1 id='home-res-banner-text' className='display-2'>Plan a stay with us today.</h1>
                    <Link 
                        to='https://www.airbnb.com/users/show/192864989'
                        target="_blank"
                        type="button" 
                        className='d-flex align-items-center btn btn-dark fs-4 mx-auto  fw-bold' 
                        style={{backgroundColor:'#FF5A5F'}}
                        >Reservations<img style={{width:'30px'}} className='ms-2 pb-1' src='../images/social icons/airbnb-2-logo-white-no-text.png'
                        alt='AirBnB Logo'/>
                    </Link>
                </div>
            </Animation>
        </div>
    )
}

export default Home

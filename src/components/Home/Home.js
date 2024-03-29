import React from 'react'
import { Link } from 'react-router-dom';
import HomeSection1 from './HomeSection1'
import ServiceCardSection from './ServiceCardSection'
import RentalSection from './RentalSection';
import './home.css';

function Home() {
    return (
        <div id='home-page-wrapper'>
            <HomeSection1 />
            <RentalSection />
            <ServiceCardSection />
            <div id='home-res-banner' className='my-5 d-flex flex-column justify-content-center'>
                <h1 id='home-res-banner-text' className='display-2 mb-3'>Plan a stay with us today.</h1>
                <Link 
                    to='https://www.airbnb.com/users/show/192864989'
                    target="_blank"
                    type="button"
                >
                    <button className='btn btn-dark border border-2 fs-5 p-3 mt-3'>Reservations</button>
                </Link>
            </div>
        </div>
    )
}

export default Home

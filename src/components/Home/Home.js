import React from 'react'
import HomeSection1 from './HomeSection1'
import RentalSection from './RentalSection';
import ResidentialSection from './ResidentialSection';
import AdditionalServices from './AdditionalServices';
import ReservationsBanner from './ReservationsBanner';
import './home.css';

function Home() {
    return (
        <div id='home-page-wrapper m-auto'>
            <HomeSection1 />
            <RentalSection />
            <ResidentialSection />
            <ReservationsBanner />
            <AdditionalServices />
        </div>
    )
}

export default Home

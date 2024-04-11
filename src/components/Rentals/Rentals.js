import React from 'react';
import { useState } from 'react';
import RentalTopSection from './RentalTopSection';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';
import RentalCard from './RentalCard';
import './rentals.css'


function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])
    const {details, location, type} = featureRental

    const cardStyle = {
        maxWidth: '15rem',
    }

    function handleClick(index){
        setFeatureRental(rentalProperties[index])
        window.scrollTo(0, 0);
    }

    const rentalCards = rentalProperties.map((rental, index) => {
        if (rental === featureRental) {
            const selectedStyle = {...cardStyle, borderColor: 'white'}
            return <RentalCard key={index} rental={rental} index={index} style={selectedStyle} handleClick={handleClick}/>
        }
        else return <RentalCard key={index} rental={rental} index={index} style={cardStyle} handleClick={handleClick}/> 
        
    })

    const detailsList = details.map((detail, index) => {
        if (index === details.length-1) return <span key={index} className='ms-1 fst-italic'>{detail}</span>
        else return <span key={index} className='ms-1 fst-italic'>{`${detail} •`}</span>
    })

    return (
        <div>
            <RentalTopSection />
            <div className='mt-3 container-lg'>
                <div className='feature-title rounded my-5' style={{backgroundImage: `url(${featureRental.images[0]})`}}>
                    <p className='display-5 fw-bold bg-black bg-opacity-50 pt-3 mb-0 rounded-top border-top' style={{fontStyle: 'oblique'}}>{featureRental.name}</p>
                    <div className="mb-4 text-white  bg-black bg-opacity-50 pb-4 rounded-bottom border-bottom">
                        <p className='fst-italic fs-5 mb-0'>{location} - {type}</p>
                        <div className='d-flex justify-content-center' style={{fontSize: '16px'}}>
                            {detailsList}
                        </div>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <FeaturedRental rental={featureRental} />
                </div>

                <div>
                    <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                    <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                        {rentalCards}
                    </div>
                </div>

                <div className='d-flex justify-content-center gap-3'>
                    
                </div>

            </div>
        </div>
    )
}

export default Rentals

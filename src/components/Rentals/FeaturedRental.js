import React from 'react'
import RentalCarousel from '../Home/RentalCarousel'
import FeatureRentalInfo from './FeatureRentalInfo'
import Animation from '../Utilities/Animation'


function FeaturedRental({rental, featuredRef}) {
    const {name, location, type, details, images} = rental

    const detailsList = details.map((detail, index) => {
        if (index === details.length-1) return <span key={index} className='ms-1 fst-italic'>{detail}</span>
        else return <span key={index} className='ms-1 fst-italic'>{`${detail} •`}</span>
    })

    return (
        <div className='feature-rental-wrapper container-lg' ref={featuredRef}>
            <Animation variant='slideRight' duration={1.5}>
                <div className='feature-title rounded my-5' style={{backgroundImage: `url(${images[0]})`}}>
                        <p className='feature-title-header display-5 fw-bold bg-black bg-opacity-50 pt-3 mb-0 rounded-top border-top' style={{fontStyle: 'oblique'}}>{name}</p>
                        <div className="feature-title-body mb-4 text-white  bg-black bg-opacity-50 pb-4 rounded-bottom border-bottom">
                            <p className='fst-italic fs-5 mb-0'>{location} - {type}</p>
                            <div className='d-flex justify-content-center' style={{fontSize: '16px'}}>
                                {detailsList}
                            </div>
                        </div>
                    </div>
            </Animation>
        
            <div className='row align-items-center m-auto'>
                <div className='col-lg-6'>  
                    <div className="m-auto pb-0 pb-md-5" style={{maxWidth:'40rem'}}>
                        <RentalCarousel images={images}/>
                    </div>
                </div>
                <FeatureRentalInfo rental={rental} />
            </div>
        </div>
    )
}

export default FeaturedRental

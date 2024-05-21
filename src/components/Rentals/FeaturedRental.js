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
        <div className='feature-rental-wrapper' ref={featuredRef}>
            <Animation variant='slideRight' duration={1.5}>
                <div className='feature-title rounded mb-5' style={{backgroundImage: `url(${images[0]})`}}>
                    <div className='py-5 bg-black bg-opacity-25'>
                        <p className='feature-title-header display-3 fw-bold pt-3 mb-0' style={{fontStyle: 'oblique'}}>{name}</p>
                        <div className="feature-title-body mb-4 text-white pb-4">
                            <p className='fst-italic fs-3 mb-0'>{location} - {type}</p>
                            <div className='d-flex fs-4  justify-content-center' style={{fontSize: '16px'}}>
                                {detailsList}
                            </div>
                        </div>
                    </div>
                </div>
            </Animation>
        
            <div className='container-lg row align-items-center m-auto'>
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

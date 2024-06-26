import React from 'react'
import SeasonalCard from './SeasonalCard'
import Animation from '../Utilities/Animation'
import { seasonalData } from './utilitiesServices'

function SeasonalSection() {
    const cards = seasonalData.map(season => {
        return <SeasonalCard key={season.title} season={season} />
    })

    return (
        <div className='overflow-hidden'>
            <Animation variant='fadeIn' duration={1.5}>
                <div id='seasonal-services-banner'>
                    <div className='banner-background'>
                        <span id='seasonal-services-header' className='display-1 fw-bold text-black'>Seasonal Services</span>
                    </div>
                </div>
            </Animation>
            <div className='container-lg my-5 py-5'>
                <Animation variant='slideLeft' duration={1}>
                    <h4 className='display-6 w-75 m-auto fst-italic'>"<span className='fw-bold display-5'>Seasonal Maintenance Made Simple:</span> Choose Our Expertise or Connect with Reliable Services for All Your Seasonal Needs!"</h4>
                </Animation>
            </div>
            <Animation variant='slideUp' duration={1}>
                <div className='d-flex flex-wrap justify-content-evenly gap-3'>
                    {cards}
                </div>
            </Animation>
        </div>
    )
}

export default SeasonalSection

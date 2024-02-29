import React from 'react'
import './servicecardsection.css'
import ServiceCard from './ServiceCard'
import { serviceCardData } from './utilitiesHome';

function ServiceCardSection() {

    const cards = serviceCardData.map((service)=>{
        return <ServiceCard key={service.name} service={service}/>
    })

    return (
        <div id='section-cards-wrapper' className=' mt-5 d-flex justify-content-center flex-wrap'> 
            {cards}
        </div>
    )
}

export default ServiceCardSection

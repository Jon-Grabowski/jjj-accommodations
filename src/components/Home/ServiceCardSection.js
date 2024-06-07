import React from 'react'
import './servicecardsection.css'
import ServiceCard from './ServiceCard'
import { serviceCardData } from './utilitiesHome';


function ServiceCardSection() {

    const cards = serviceCardData.map((service, index)=>{
        return <ServiceCard key={index} service={service}/>
    })

    return (
        <div id='section-cards-wrapper' className='container-lg mt-5 d-flex justify-content-evenly flex-wrap'> 
            {cards}
        </div>
    )
}

export default ServiceCardSection

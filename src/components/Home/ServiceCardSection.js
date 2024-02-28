import React from 'react'
import './servicecardsection.css'
import ServiceCard from './ServiceCard'
import { serviceCardData } from './utilitiesHome';

function ServiceCardSection() {
    let reverseSwitch = false
    const cards = serviceCardData.map((service)=>{
        let reverse = ''
        if (reverseSwitch) reverse = 'flex-row-reverse'
        reverseSwitch = !reverseSwitch
        return <ServiceCard key={service.name} service={service} reverse={reverse}/>
    })

    return (
        <div id='section-cards-wrapper' className=' mt-5 d-flex justify-content-center flex-wrap'>
            {cards}
        </div>
    )
}

export default ServiceCardSection

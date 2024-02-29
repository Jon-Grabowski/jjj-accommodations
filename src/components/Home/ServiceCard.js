import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'


function ServiceCard({service, reverse}) {
    const {name, headline, body, image, link} = service
    // TODO: CROP CARD IMAGES TO BE SAME SIZE
    return (
        <div className='d-flex flex-column m-1 text-white service-card' style={{'maxWidth' : '24rem'}}>
            <div className='d-flex justify-content-center rounded'>
                <img src={image} className="card-img-side p-3 rounded" alt={name} style={{'maxWidth' : '24rem'}}/>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className='d-flex justify-content-center align-items-center' >
                    <h5 className="display-6 p-2 fs-3" ><strong>{headline}</strong></h5>
                </div>
                <div className='d-flex align-items-center mb-4'>
                    <p className="px-3 text-start">{body}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-1'>
                    <Link to={link} className="btn btn-primary mb-2">{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard

import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'


function ServiceCard({service, reverse}) {
    const {name, headline, body, image, link} = service
    // TODO: CROP CARD IMAGES TO BE SAME SIZE
    return (
        <div className='d-flex flex-column m-2 text-white service-card bg-white bg-opacity-25 rounded' style={{'maxWidth' : '28rem'}}>
            <div className='d-flex justify-content-center rounded'>
                <img src={image} className="card-img-side rounded-top" alt={name} style={{'maxWidth' : '28rem'}}/>
            </div>
            <div className="d-flex flex-column justify-content-between h-100">
                <h2 className="display-5 p-4">{headline}</h2>
                <p className="text-start px-3">{body}</p>
                <Link to={link} className="m-auto btn btn-primary rounded-pill border fw-bold mb-2 px-2" style={{width:'12rem'}}>{name}</Link>
            </div>
        </div>
    )
}

export default ServiceCard

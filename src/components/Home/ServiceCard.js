import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'


function ServiceCard({service}) {
    const {name, headline, body, image, link} = service

    return (
        <div className="card m-3 bg-dark text-white service-card" style={{'maxWidth' : '21rem'}}>
            <img src={image} className="card-img-top" alt={name} style={{'maxHeight':'15rem'}}/>
            <div className="card-body">
                <div className='d-flex justify-content-center align-items-center' style={{'minHeight':'4rem'}}>
                    <h5 className="card-title" >{headline}</h5>
                </div>
                <div className='d-flex align-items-center mb-1' style={{'minHeight':'11rem'}}>
                    <p className="card-text">{body}</p>
                </div>
                <Link to={link} className="btn btn-primary">{name}</Link>
            </div>
        </div>
    )
}

export default ServiceCard

import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'


function ServiceCard({service, reverse}) {
    const {name, headline, body, image, link} = service
    // TODO: CARD LAYOUT NEEDS WORK
    return (
        <div className={`d-flex ${reverse} m-3 bg-dark text-white service-card border border-secondary rounded`} style={{'maxWidth' : '45rem'}}>
            <div className='d-flex align-items-center'>
                <img src={image} className="card-img-side" alt={name} style={{'width':'15rem', 'height':'15rem'}}/>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className='d-flex justify-content-center align-items-center' >
                    <h5 className="display-6" >{headline}</h5>
                </div>
                <div className='d-flex align-items-center mb-1'>
                    <p className="card-text px-3">{body}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center mb-1'>
                    <Link to={link} className="btn btn-primary mb-2">{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard

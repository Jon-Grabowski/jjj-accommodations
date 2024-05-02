import React from 'react'
import { useState } from 'react'
import './managementservicecard.css'

function ManagementServiceCard({service}) {
    const [cardFlip, setCardFlip] = useState(true)
    const {title, body, link} = service

    function handleClick(){
        setCardFlip(!cardFlip)
    };

    return (
        <div className=" flip-card text-center mb-2" style={{maxWidth: '20rem'}}>
            <div className={`flip-card-inner ${cardFlip ? null : 'card-flipped'}`}>
                <div className='flip-card-front'>
                    <div className="card-header text-light d-flex justify-content-center align-items-center" style={{height:'6rem'}}>
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{body}</p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button onClick={handleClick}>Learn More</button>
                    </div>
                </div>
                <div className='flip-card-back'>
                    <div className="card-footer text-body-secondary">
                        <button onClick={handleClick}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementServiceCard

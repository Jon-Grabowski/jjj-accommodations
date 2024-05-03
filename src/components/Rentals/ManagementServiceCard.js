import React from 'react'
import { useState } from 'react'
import './managementservicecard.css'

function ManagementServiceCard({service}) {
    const [cardFlip, setCardFlip] = useState(true)
    const {title, body, img, link} = service

    function handleClick(){
        setCardFlip(!cardFlip)
    };

    return (
        <div className="flip-card text-center mb-2" style={{maxWidth: '23rem', height:'20rem'}}>
            <div className={`flip-card-inner rounded shadow ${cardFlip ? null : 'card-flipped'}`}>
                <div className='flip-card-front'>
                    <div className="card-header d-flex flex-column justify-content-evenly align-items-center rounded-top" style={{height:'5rem'}}>
                        <h2 className=' px-3'>{title}</h2>
                    </div>
                    <div className='h-50 bg-white'>
                        <img src={img} alt={title}  className='h-100' />
                    </div>
                    {/* <div className=" py-3 bg-light text-black">
                        <p className="card-text">{body}</p>
                    </div> */}
                    <div className="card-header d-flex justify-content-center align-items-center rounded-bottom" style={{height:'4.9rem'}}>
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

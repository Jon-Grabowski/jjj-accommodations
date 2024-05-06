import React from 'react'
import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import './managementservicecard.css'

function ManagementServiceCard({service}) {
    const [cardFlip, setCardFlip] = useState(true)
    const {title, text, img, link} = service

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
                        <button className='btn btn-primary rounded-pill border fw-bold' onClick={handleClick}>Learn More <ArrowRight/></button>
                    </div>
                </div>
                <div className='flip-card-back'>
                    <div className='card-header d-flex justify-content-center align-items-center rounded-top' style={{height:'5rem'}}>
                        <h4 className='p-2'>{text.header}</h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center bg-body text-dark' style={{height:'10rem'}}>
                        <p className='py-2 px-4' style={{fontSize: '17px'}}>{text.body}</p>
                    </div>
                    <div className="card-header d-flex justify-content-center align-items-center rounded-bottom" style={{height:'5rem'}}>
                        <button className='btn btn-primary rounded-pill border fw-bold' onClick={handleClick}><ArrowLeft/> Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementServiceCard

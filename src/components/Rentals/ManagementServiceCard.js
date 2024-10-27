import React from 'react'
import Animation from '../Utilities/Animation'
import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import './managementservicecard.css'

function ManagementServiceCard({service, index, parentInView}) {
    const [cardFlip, setCardFlip] = useState(true)
    const {title, text, img} = service

    function handleClick(){
        setCardFlip(!cardFlip)
    };
    //TODO: added card flip animation, seems laggy. try to fix.
    return (
        <div className="flip-card text-center mb-2" style={{maxWidth: '23rem'}}>
            <Animation variant='slideUp' duration={1} delay={.2*index} parentInView={parentInView}>
            {/* <div className={`flip-card-inner rounded shadow ${cardFlip ? null : 'card-flipped'}`}> */}

                {/* FRONT OF CARD */}
                {/* <div className='flip-card-front'>
                    <div className="card-header border border-2 border-bottom-0 d-flex flex-column justify-content-evenly align-items-center rounded-top" style={{height:'6rem'}}>
                        <h2 className=' px-3'>{title}</h2>
                    </div>
                    <div className='bg-white' style={{height:'10rem'}}>
                        <img src={img} alt={title}  className='h-100' />
                    </div>
                    <div className="card-header border border-2 border-top-0 d-flex justify-content-center align-items-center rounded-bottom" style={{height:'4.9rem'}}>
                        <button className='btn btn-primary rounded-pill border fw-bold' onClick={handleClick}>Learn More <ArrowRight/></button>
                    </div>
                </div> */}

                {/* BACK OF CARD */}
                {/* <div className='flip-card-back'>
                    <div className='card-header border border-2 border-bottom-0 d-flex justify-content-center align-items-center rounded-top' style={{height:'6rem'}}>
                        <h4 className='p-2'>{text.header}</h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center bg-body text-dark' style={{height:'10rem'}}>
                        <p className='py-2 px-4 fw-bold' style={{fontSize: '17px'}}>{text.body}</p>
                    </div>
                    <div className="card-header border border-2 border-top-0 d-flex justify-content-center align-items-center rounded-bottom" style={{height:'5rem'}}>
                        <button className='btn btn-primary rounded-pill border fw-bold' onClick={handleClick}><ArrowLeft/> Back</button>
                    </div>
                </div> */}
            {/* </div> */}
            <div class="card text-center">
                <div class="card-header text-light fs-2 fw-bold">
                    {title}
                </div>
                <div class="card-body">
                    <img src={img} alt={title} className='w-75'/>
                    <h5 class="card-title">{text.header}</h5>
                </div>
                <div class="card-footer text-body-secondary">
                    {text.body}
                </div>
            </div>
            </Animation>
        </div>
    )
}

export default ManagementServiceCard

import React from 'react'
import { useState } from 'react';

function RentalManagement({data}) {
    const [cardFlipped, setCardFlipped] = useState(false)
    const { title, body, imageURL, serviceObj} = data

    function handleClick(){
        setCardFlipped(!cardFlipped)
    };

    const services = [];
    const servicesDescriptions = [];
    for (const key in serviceObj){
        services.push(
            <span key={key} className='mx-3 mb-1 fw-bold'>{`◊ ${key}`}</span>
        );
        servicesDescriptions.push(
            <div key={key}>
                <h5 className='text-decoration-underline'>{key}</h5>
                <p>{serviceObj[key]}</p>
            </div>
        )
    };

    return (
        <div className='pt-4 mt-5 d-flex gap-5 flex-wrap justify-content-evenly align-items-center text-black' style={{marginBottom: '11rem'}}>
            <div className='rounded-circle border border-black border-3 overflow-hidden mb-3' style={{maxWidth: '400px', maxHeight:'400px'}}>
                <img src={imageURL} alt={title} className='h-100 w-100'/>
            </div>

            {cardFlipped ? 
                <div className='border bg-white bg-opacity-75 p-3 rounded'>
                    <div className='text-start mb-2 border-bottom pb-1'>
                        <h1 className='display-6 d-inline text-start fst-italic'>{title}</h1>
                    </div>
                    <div className='text-start m-auto' style={{maxWidth:'50rem'}}>
                        {servicesDescriptions}
                    </div>
                    
                    <button 
                        className='text-light rounded border-secondary py-2 px-4' 
                        style={{backgroundColor: 'rgb(9, 9, 39)'}}
                        onClick={handleClick}
                    >← Back</button>
                </div>
            :
                <div className='border bg-white bg-opacity-75 p-3 rounded'>
                    <div className='text-start border-bottom pb-1'>
                        <h1 className='display-4 d-inline text-start fst-italic'>{title}</h1>
                    </div>
                    <div className='text-start m-auto' style={{maxWidth:'50rem'}}>
                        <p className='p-3 fs-5'>{body}</p>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap mb-3 border-top border-bottom border-black py-2' style={{maxWidth:'50rem'}}>
                            {services}
                    </div>
                    <button 
                        className='text-light rounded border-secondary py-2 px-4' 
                        style={{backgroundColor: 'rgb(9, 9, 39)'}}
                        onClick={handleClick}
                    >More Details →</button>
                </div>}

        </div>
    )
}

export default RentalManagement

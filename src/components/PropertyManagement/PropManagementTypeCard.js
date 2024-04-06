import React from 'react'
import { useState } from 'react'

function PropManagementTypeCard({data, reverse}) {
    const [cardFlipped, setCardFlipped] = useState(false)
    const { title, body, serviceList} = data

    function handleClick(){
        setCardFlipped(!cardFlipped)
    }

    const services = serviceList.map(service=>{
        return <span className='mx-3 mb-1 fw-bold'>{`◊ ${service}`}</span>
    })

    return (

        <div className={`py-4 d-flex flex-wrap ${reverse? 'flex-row-reverse' : null} justify-content-evenly align-items-center`} style={{marginBottom: '11rem'}}>
            <div className='rounded-circle border' style={{width: '300px', height:'300px', backgroundColor:'red'}}>

            </div>

            {cardFlipped ? 
                <div className='border bg-white bg-opacity-75 p-3 rounded'>
                    <div className='text-start'>
                        <h1 className='display-4 d-inline text-start fst-italic border-bottom pb-1'>{title}</h1>
                    </div>
                    <div className='text-start m-auto' style={{maxWidth:'50rem'}}>
                        <p className='p-3 fs-5'>BACK OF CARD</p>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap mb-3 border-top border-bottom border-black py-2' style={{maxWidth:'50rem'}}>
                            {services}
                    </div>
                    <button 
                        className='text-light rounded border-secondary py-2 px-4' 
                        style={{backgroundColor: 'rgb(9, 9, 39)'}}
                        onClick={handleClick}
                    >← Back</button>
                </div>
            :
                <div className='border bg-white bg-opacity-75 p-3 rounded'>
                    <div className='text-start'>
                        <h1 className='display-4 d-inline text-start fst-italic border-bottom pb-1'>{title}</h1>
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
                    >Learn More →</button>
                </div>}

        </div>
    )
}

export default PropManagementTypeCard

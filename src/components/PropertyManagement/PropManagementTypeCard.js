import React from 'react'

function PropManagementTypeCard({data}) {
    const { title, body, serviceList} = data
    const services = serviceList.map(service=>{
        return <span className='mx-3 mb-1'>{`◊ ${service}`}</span>
    })
    return (

        <div className='py-4 d-flex flex-wrap justify-content-evenly align-items-center'>
            <div className='rounded-circle' style={{width: '300px', height:'300px', backgroundColor:'red'}}>

            </div>

            <div className='border bg-body p-3 rounded'>
                <div>
                    <h1 className='display-4'>{title}</h1>
                </div>
                <div className='text-start m-auto' style={{maxWidth:'50rem'}}>
                    <p className='p-3 fs-5'>{body}</p>
                </div>
                <div className='d-flex justify-content-center flex-wrap mb-5' style={{maxWidth:'50rem'}}>
                        {services}
                </div>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default PropManagementTypeCard

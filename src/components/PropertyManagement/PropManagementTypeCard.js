import React from 'react'

function PropManagementTypeCard({data}) {
    const { title, body, serviceList} = data
    const services = serviceList.map(service=>{
        return <span className='mx-3 mb-1 fw-bold'>{`◊ ${service}`}</span>
    })
    return (

        <div className='py-4 d-flex flex-wrap justify-content-evenly align-items-center mt-5'>
            <div className='rounded-circle border' style={{width: '300px', height:'300px', backgroundColor:'red'}}>

            </div>

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
                    data-bs-toggle="modal" data-bs-target="#rental-manage-modal"
                >Learn More</button>
            </div>

            <div className="modal fade" id="rental-manage-modal" tabIndex="-1" aria-labelledby="rental-manage-modalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropManagementTypeCard

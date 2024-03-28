import React from 'react'

function PropertyManagement() {
    
    return (
        <div className='container-lg mt-5'>
            <p className='display-5 fw-bold text-start text-decoration-underline'>Property Management</p>
            <div className='d-flex flex-wrap justify-content-evenly align-items-center mt-5'>
                <div className='border-black'>
                    <img src='../images/services/namaste-sign.jpeg' alt='namaste' className=''/>
                </div>
                <div className='w-75 mx-1 mx-md-5'>
                    <p className='fs-3'>Whether you're looking for Short Term Rental Management or Residential Property Management, we've got you covered!</p>
                    <ul>
                        <li className='fs-5 text-start mb-3'>Our Short Term Rental Management includes everything from managing rental sites and guest communications to cleaning services and property maintenance paid for by owners.</li>
                        <li className='fs-5 text-start'>For residential properties, we tailor our services to fit your unique needs, ensuring a hassle-free experience for everyone involved.</li>
                    </ul>
                    <p className='fs-4'>Trust us to take care of your property with professionalism and a friendly touch!</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyManagement

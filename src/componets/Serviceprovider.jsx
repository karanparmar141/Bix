import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Serviceprovider = () => {
    return (
        <>
            <section className='p-100 bg-black'>
                <Container>
                    <div className='heading py-2'>
                        <button className='btn btn-primary text-capitalize'>over SERVICES</button>
                        <div className="d-flex justify-content-between">
                            <p className='text-uppercase fs-1 font-primary text-white pt-3'>THE SERVICES WE PROVIDE</p>
                            <p className='text-uppercase text-white'>View inventory <i className='bi bi-arrow-up-right'></i></p>
                        </div>
                    </div>
                    <div className="service-content row">
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 border-white'>
                            <div className="service-items p-5 text-white">
                                <i className='bi bi-speedometer2 display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>ANNUAL SERVICE</p>
                                <p>Routine maintenance and yearly tune-ups are important to keep your bike running smoothly and to help avoid costly repairs.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 border-white'>
                        <div className="service-items p-5 text-white">
                                <i className='bi bi-snow display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>WINTERIZATION</p>
                                <p>Avoid future issues by making sure your motorcycle is ready for the cold winter months, whether you plan on riding or storing your bike.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 boeder-white'>
                            <div className="service-items p-5 text-white">
                                <i className='bi bi-archive-fill display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>SPRING MAINTENANCE</p>
                                <p>The importance of properly preparing your motorcycle. Make sure your ride is running at optimal performance for that summer heat.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 boeder-white'>
                            <div className="service-items p-5 text-white">
                                <i className='bi bi-fan display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>TIRE CHANGING SERVICE</p>
                                <p>Whether your tires need rotating, balancing, repair or even replacement, our tire services will get you back on the road fast.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 boeder-white'>
                            <div className="service-items p-5 text-white">
                                <i className='bi bi-gear-wide-connected display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>OIL CHANGES</p>
                                <p>A comprehensive preventive maintenance service to check, change, inspect and fill essential systems and components of your vehicle.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='p-0 m-0 border border-1 boeder-white'>
                            <div className="service-items p-5 text-white">
                                <i className='bi bi-hurricane display-2 text-primary'></i>
                                <p className='fw-semibold fs-4'>BRAKE INSPIRATION</p>
                                <p>From brake pads to brake fluid, we provides the services you need to help keep your stopping power responsive and reliable.</p>
                                <p className='text-capitalize'>read more <i className='bi bi-arrow-up-right'></i></p>
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Serviceprovider
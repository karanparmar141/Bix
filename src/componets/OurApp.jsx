import React from 'react'
import { Col, Container } from 'react-bootstrap'
import preview1 from '../assests/Screenshot_2023-10-07_184412-removebg-preview 1.png'
import preview2 from '../assests/Screenshot_2023-10-07_184609-removebg-preview_1-removebg-preview.png'

const OurApp = () => {
    return (
        <>
            <section className='bg-app'>
                <div className="bg-app-gradaint">
                    <Container className='p-100'>
                        <div className="row align-items-center">
                            <Col sm={12} md={5}>
                                <div className="app-img d-flex justify-content-between">
                                    <div className='col-6 p-1'>
                                        <img src={preview1} alt="preview-1" />
                                        <p className='display-3 fw-bold app-img-content text-end pt-3'>DRIVE</p>
                                    </div>
                                    <div className='col-6 p-1 pt-5 overflow-hidden p-0 '>
                                        <img src={preview2} alt="preview-2" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7}>
                                <div className="app-content text-white text-center text-md-start">
                                    <p className='display-5 fw-bold text-uppercase'>A STEP ABOVE WITH <span className='pe-3 display-3 font-primary text-primary'>bix</span>RIDER-FRIENDLY NATURE</p>
                                    <p className='fs-5'>The glamour of ten decades can be this timeless and modern. This motorcycle was, is and remains a design icon. A statement. This limited edition is an icon thanks to its attention to historic details. And its willingness to be glamorous. A fair bit from being modest. The generous use of chrome lends it its radiance. A true masterpiece.</p>
                                    <button className='btn btn-primary fw-semibold text-uppercase py-2 px-5'>get app</button>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default OurApp
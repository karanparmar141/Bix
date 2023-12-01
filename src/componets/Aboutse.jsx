import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../assests/about-img.png'
const Aboutse = () => {
    return (
        <>
            <section className=' bg-black p-100'>
                <Container>
                    <Row>
                        <Col sm={12} md={5}>
                            <div className="about-img position-relative">
                                <img src={img} alt="about-img" className='col-8' />
                                <Col md={5} className='img-content position-absolute text-white'>
                                    <div className="col-12 d-flex justify-content-between p-1 m-0 p-lg-3 mb-lg-5">
                                        <div className="img-box border border-3 border-primary border-end-0 border-bottom-0"></div>
                                        <div>
                                            <p className='m-0 text-uppercase'>since</p>
                                            <p className='m-0 text-center'>2022</p>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-between p-1 m-0 p-lg-3 pt-lg-5 mt-lg-5">
                                        <div>
                                            <p className='m-0 text-uppercase fs-3 text-primary fw-bold'>01</p>
                                            <p className='m-0 text-uppercase'>years EXPERIENCE</p>
                                        </div>
                                        <div className="img-box border mt-5 border-3 border-primary border-start-0 border-top-0"></div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className="about-content">
                                <button className='btn btn-primary py-2 px-4 fw-semibold'>Welcome To Bix</button>
                                <p className='pt-4 fs-1 fw-bold text-white text-uppercase'>HELPS YOU TO FIND YOUR NEXT <span className='text-primary'>motorbike</span> EASILY</p>
                                <p className='text-white fs-5'>The glamour of ten decades can be this timeless and modern. This motorcycle was, is and remains a design icon. A statement. This limited edition is an icon thanks to its attention to historic details. And its willingness to be glamorous. A fair bit from being modest. The generous use of chrome lends it its radiance. A true masterpiece.</p>
                                <p className='text-white fs-5'>Customized motorcycle. Not for sale. The vehicles shown are modified and equipped with third-party accessories and/or proprietary parts that are neither manufactured, distributed nor tested by BMW. BMW assumes no liability for the modifications (including the installation, characteristics and use of the accessories shown).</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Aboutse
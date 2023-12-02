import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className='bg-black'>
        <Container>
          <Row>
            <Col sm={12} md={5}>
              <p className='fs-2 fw-bold text-white'>DO YOU HAVE QUESTIONS? <span className='d-block text-primary'>LET'S TALK US !</span> </p>
              <div className='d-flex'>
                <i className='bi bi-geo-alt-fill fs-4 text-white'></i>
                <p className='fs-5 text-white ps-4'>5617 Glassford Street New York, NY <span className='d-block'> 10000, USA</span></p>
              </div>
              <div className='d-flex'>
                <i className='bi bi-telephone-fill fs-4 text-white'></i>
                <p className='fs-5 text-white ps-4'>+91 1234567890</p>
              </div>
              <div className='d-flex'>
                <i className='bi bi-envelope-fill fs-4 text-white'></i>
                <p className='fs-5 text-white ps-4'>bix@gmail.com</p>
              </div>
            </Col>
            <Col sm={12} md={2}>
              <p className='fs-3 pb-2 fw-bold text-white text-uppercase'>about us</p>
              <Link className='text-uppercase d-block text-white py-3'>our Services</Link>
              <Link className='text-uppercase d-block text-white py-3'>Our Products</Link>
              <Link className='text-uppercase d-block text-white py-3'>Our team</Link>
            </Col>
            <Col sm={12} md={5}>
              <p className='fs-3 pb-4 fw-bold text-white text-uppercase'>SUBSCRIBE FOR UPDATED</p>
              <div className="col-8">
                <div class="input-group mt-5">
                  <input type="email" class="form-control text-upercase border border-1 border-white" placeholder="please enter Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
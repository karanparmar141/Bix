import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className=" p-0 bg-transparent fixed-top">
        <Container fluid>
          <Navbar.Brand className='text-primary font-primary fs-90 m-0'><p>b<span className='text-white'>i</span><span className='text-secondary'>x</span></p></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link className='text-uppercase text-white ps-5'>Home</Nav.Link>
              <Nav.Link className='text-uppercase text-white ps-5'>about us</Nav.Link>
              <Nav.Link className='text-uppercase text-white ps-5'>services</Nav.Link>
              <Nav.Link className='text-uppercase text-white ps-5'>app</Nav.Link>
              <Nav.Link className='text-uppercase text-white ps-5'>inventory</Nav.Link>
            </Nav>
            <Row>
              <Col xs="auto" className='p-0'>
                <Button className='bg-transparent border-0'><i class="bi bi-search fs-5"></i></Button>
              </Col>
              <Col xs="auto" className='p-0'>
                <Button className='bg-transparent border-0'><i class='bi bi-cart-fill fs-5'></i></Button>
              </Col>
              <Col xs="auto" className='p-0'>
                <Button className='bg-transparent border-0'><i class='bi bi-person-fill fs-5'></i></Button>
              </Col>
              </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
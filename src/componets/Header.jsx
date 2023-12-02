import React from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className=" p-0 bg-transparent fixed-top">
        <Container fluid>
          <Navbar.Brand className='text-primary font-primary fs-90 m-0'><p>b<span className='text-white'>i</span><span className='text-secondary'>x</span></p></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link className='text-uppercase ps-5'><Link to='/' className='text-white'>Home</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/about' className='text-white'>about us</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/services' className='text-white'>services</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/Avalible' className='text-white'>app</Link></Nav.Link>
              <Nav.Link className='text-uppercase ps-5'><Link to='/inventory' className='text-white'>inventory</Link></Nav.Link>
            </Nav>
            <Row>
              <Col xs="auto" className='p-0'>
                <Button className='bg-transparent border-0'><i class="bi bi-search fs-5"></i></Button>
              </Col>
              <Col xs="auto" className='p-0'>
                <Button className='bg-transparent border-0'><i class='bi bi-cart-fill fs-5'></i></Button>
              </Col>
              <Col xs="auto" className='p-0'>
                <Link to='/login'>
                  <Button className='bg-transparent border-0'><i class='bi bi-person-fill fs-5'></i></Button>
                </Link>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
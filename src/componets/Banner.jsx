import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from '../componets/Accordion';

const Banner = () => {

  const accordionData = [
    {
      title: 'surat branch',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, `
    },
    {
      title: 'bharuch branch',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. `
    },
    {
      title: 'vadodara branch',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis.`
    },
    {
      title: 'ahmedabad branch',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis.`
    },
    {
      title: 'rajkot branch',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis.`
    }
  ];


  return (
    <>
      <section className='bg-banner'>
        <div className='bg-banner-gradiant'>
          <Container>
            <Row className='p-100'>
              <Col sm={12} md={6}>
                <div className="banner-content p-0 py-md-5 text-center text-md-start">
                  <p className='fs-2 fw-semibold text-uppercase text-secondary'>WELCOME TO YOUR bix</p>
                  <p className='fs-1 fw-semibold text-white'>GREAT PERFORMANCE<p>THAT METTERS IN <span className='text-primary'>FUTURE</span></p></p>
                  <p className='fs-5 text-white d-none d-md-block'>The glamour of ten decades can be this timeless and modern. This motorcycle was, is and remains a design icon. A statement. This limited edition.</p>
                </div>
              </Col>
              <Col sm={12} md={6} className='d-none d-md-block'>
                <Col sm={12} md={7} className="mx-auto  py-md-5">
                  <div className='find-branch p-3 text-center'>
                    <p className='text-primary font-primary display-2 m-0'>b<span className='text-white'>i</span><span className='text-secondary'>x</span></p>
                    <p className='text-white fs-5 text-uppercase fw-semibold'>FIND YOUR branch</p>
                    <div className="accordion ">
                      {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                      ))}
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Banner
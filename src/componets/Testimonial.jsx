import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import t1 from '../assests/t-1.jpg'
import t2 from '../assests/t-2.jpg'
import t3 from '../assests/t-3.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Testimonial = () => {
  return (
    <>
      <section className='bg-black p-100'>
        <Container>
          <div className='heading py-2'>
            <button className='btn btn-primary text-capitalize'>Testimonial</button>
            <div className="d-flex justify-content-between">
              <p className='text-uppercase fs-1 font-primary text-white pt-3'>WHAT CLIENTS SAY ABOUT US</p>
              <p className='text-uppercase text-white'>View inventory <i className='bi bi-arrow-up-right'></i></p>
            </div>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Col sm={12} >
                <div className="testimonial-content text-white border border-1 border-white p-4">
                  <p>I bought a Ducati Scrambler earlier this year the sales consultant was Bruce. It was a very pleasant experience that I will happily recommend to any other buyer. Great service and beautiful bikes. I really appreciate the service here.</p>
                  <div className='row align-items-center'>
                    <Col sm={6} className='pt-5'>
                      <div className='d-flex'>
                        <div className="col-2">
                          <img src={t1} alt="" className='col-12 rounded-circle' />
                        </div>
                        <p className='ps-3'>Diana Beckham <p>Customer</p></p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className='text-primary transform-rotate-180'>
                        <i class="bi bi-quote display-1"></i>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col sm={12} >
                <div className="testimonial-content text-white border border-1 border-white p-4">
                  <p>This is my first A licence bike. Within 2 minutes of riding I was comfortable and happy. Its allot more nimble than the R nine T I test rode and so much more exciting than my mates Enfields.</p>
                  <div className='row align-items-center'>
                    <Col sm={6} className='pt-5'>
                      <div className='d-flex'>
                        <div className="col-2">
                          <img src={t2} alt="" className='col-12 rounded-circle' />
                        </div>
                        <p className='ps-3'>Jhon Ibraham <p>Customer</p></p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className='text-primary transform-rotate-180'>
                        <i class="bi bi-quote display-1"></i>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col sm={12} >
                <div className="testimonial-content text-white border border-1 border-white p-4">
                  <p>I bought a Ducati Scrambler earlier this year the sales consultant was Bruce. It was a very pleasant experience that I will happily recommend to any other buyer. Great service and beautiful bikes. I really appreciate the service here.</p>
                  <div className='row align-items-center'>
                    <Col sm={6} className='pt-5'>
                      <div className='d-flex'>
                        <div className="col-2">
                          <img src={t3} alt="" className='col-12 rounded-circle' />
                        </div>
                        <p className='ps-3'>moon jasmin <p>Customer</p></p>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className='text-primary transform-rotate-180'>
                        <i class="bi bi-quote display-1"></i>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </>
  )
}

export default Testimonial
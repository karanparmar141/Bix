import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import i1 from '../assests/i-1.jpg'
import i2 from '../assests/i-2.jpg'
import i3 from '../assests/i-3.jpg'
import i4 from '../assests/i-4.jpeg'
import i5 from '../assests/i-5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Inventorytype = () => {
    return (
        <>
            <section className='bg-black'>
                <Container>
                    <div className='heading py-2'>
                        <button className='btn btn-primary text-capitalize'>over inventory</button>
                        <div className="d-flex justify-content-between">
                            <p className='text-uppercase fs-1 font-primary text-white pt-3'>INVENTORY TYPES</p>
                            <p className='text-uppercase text-white'>View inventory <i className='bi bi-arrow-up-right'></i></p>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
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
                        <SwiperSlide><img src={i1} alt="slide1" /></SwiperSlide>
                        <SwiperSlide><img src={i2} alt="slide2" /></SwiperSlide>
                        <SwiperSlide><img src={i3} alt="slide3" /></SwiperSlide>
                        <SwiperSlide><img src={i5} alt="slide4" /></SwiperSlide>
                        <SwiperSlide><img src={i4} alt="slide5" /></SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default Inventorytype
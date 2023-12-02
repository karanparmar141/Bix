import React from 'react'
import Header from '../componets/Header'
import Banner from '../componets/Banner'
import Aboutse from '../componets/Aboutse'
import Inventorytype from '../componets/Inventorytype'
import Serviceprovider from '../componets/Serviceprovider'
import OurApp from '../componets/OurApp'
import Testimonial from '../componets/Testimonial'
import User from '../componets/User'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Aboutse/>
      <Inventorytype/>
      <Serviceprovider/>
      <OurApp/>
      <Testimonial/>
      <User/>
    </div>
  )
}

export default Home
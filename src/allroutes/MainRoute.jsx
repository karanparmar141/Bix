import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Avalible from '../pages/Avalible'
import Inventory from '../pages/Inventory'
import Services from '../pages/Services'
import User from '../componets/User'

const MainRoute = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Avalible' element={<Avalible />} />
                <Route path='/Inventory' element={<Inventory />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/login' element={<User/>}/>
            </Routes>
        </>
    )
}

export default MainRoute
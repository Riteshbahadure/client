import React from 'react'
import Navbar from '../components/Navbar '
import Hero from '../components/Hero'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Order from '../components/Order'
import Hero2 from '../components/Hero2'

const Home = () => {
    return <div className='overflow-x-hidden mainnn bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
        <Navbar />
        <Hero />
        <Product />
        <Hero2 />
        <Footer />
    </div>
}

export default Home
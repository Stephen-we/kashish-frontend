import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import headerImg from '../assets/header_img.png'

const Header = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center relative flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${headerImg})` }}
      id='Home'
    >
      <Navbar />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative z-10 container mx-auto px-6 md:px-20 lg:px-32 text-white text-center py-10'
      >
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6'>
          Premium SS & Glass Railing Solutions
        </h1>
        <p className='text-lg md:text-xl max-w-3xl mx-auto'>
          We specialize in stainless steel railing, glass railing, and custom fabrication
          work for modern architectural and interior designs. Trusted by builders, architects,
          and decorators for durable, aesthetic solutions.
        </p>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-10'>
          <a href="#Projects" className='bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition'>
            View Projects
          </a>
          <a href="#Contact" className='border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition'>
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header

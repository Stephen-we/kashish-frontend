import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
        About <span className='underline underline-offset-4 decoration-2 font-light'>Kashish Enterprises</span>
      </h1>

      <p className='text-gray-600 max-w-3xl text-center mb-10'>
        We feel great pleasure in introducing our firm <strong>“KASHISH ENTERPRISES”</strong>. We are a leading name in the field of <strong>Steel Fabrications, Stainless Steel Railings, S.S. Glass Railings</strong> and advanced <strong>Glass Work</strong> such as <strong>Glass Glazing, Shower Cubicles, Composite Paneling, and Glass Facade Systems</strong>.
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img
          src={assets.brand_img}
          alt="Kashish Enterprises"
          className='w-full sm:w-1/2 max-w-lg object-cover'
        />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <p className='max-w-2xl text-justify leading-relaxed'>
            Established in 2010, Kashish Enterprises has been delivering top-quality fabrication services for residential, commercial, and government projects across <strong>Pune, Mumbai, and other regions of Maharashtra</strong>. With a dedicated team of designers and skilled craftsmen, we transform ideas into functional and aesthetic metal and glass solutions.
            <br /><br />
            Our commitment to excellence, client-focused approach, and ability to customize based on design and budget requirements make us a trusted partner for builders, architects, and interior designers.
            <br /><br />
            <em>We believe in building relationships with quality, commitment, and transparency — delivering solutions that are durable, elegant, and maintenance-friendly.</em>
          </p>

          <a href="#Services">
            <button className='mt-8 bg-blue-600 hover:bg-blue-700 transition px-8 py-2 rounded text-white shadow-md'>
            What We Offer
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default About

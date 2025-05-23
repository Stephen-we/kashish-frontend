import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="Kashish Enterprises Logo" />
            <p className='text-gray-400 mt-4'>
              KASHISH ENTERPRISES – Your trusted partner for premium steel fabrications, stainless steel railings, and advanced glass solutions, including glass glazing, shower cubicles, composite paneling, and facade systems.
            </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#" className='hover:text-white'>Privacy policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Contact us</h3>
            <p className='text-gray-400 mb-4'>
              Borate Wasti, Pune-Nashik Road, Moshi, Pune, Maharashtra, 412105, India
            </p>
            <p className='text-gray-400 mb-4'>
              Email: <a href="mailto:kashishenterprises7@gmail.com" className="text-blue-400 hover:underline">kashishenterprises7@gmail.com</a>
            </p>
            <p className='text-gray-400 mb-4'>
              Phone: <a href="tel:+919763328158" className="text-blue-400 hover:underline">9763328158</a>
            </p>
            <a
              href="https://www.google.com/maps?q=Borate+Wasti,+Pune-Nashik+Road,+Moshi,+Pune,+Maharashtra,+412105,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 mt-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              View on Google Maps
            </a>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 © Kashish Enterprises. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const servicesData = [
  {
    title: 'Stainless Steel Railings',
    image: assets.ss_railing,
    description: 'Elegant and durable SS railings for staircases, balconies, and commercial spaces.',
  },
  {
    title: 'Glass Railings',
    image: assets.glass_railing,
    description: 'Frameless and framed glass railings for a clean, modern architectural finish.',
  },
  {
    title: 'Window Solutions',
    image: assets.window_solution,
    description: 'Energy-efficient sliding and casement windows for perfect fit and reduced energy and noise.',
  },
  {
    title: 'Custom Metal Works',
    image: assets.custom_metal,
    description: 'Custom metal fabrication from ornamental gates to structural elements, crafted with precision.',
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-16 px-6 md:px-20 lg:px-32"
      id="Services"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Our <span className="underline underline-offset-4 decoration-2">Services</span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We specialize in stainless steel and glass fabrication services tailored to meet residential, commercial, and architectural needs.
      </p>

      {/* Scrollable slider on mobile */}
      <div className="flex gap-6 overflow-x-auto md:hidden px-1 pb-4 snap-x scroll-smooth">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[300px] bg-white shadow-lg rounded-xl snap-start transform transition-transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid layout for tablets and desktops */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;

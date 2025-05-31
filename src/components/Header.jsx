import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import headerImg from '../assets/header_img.png';

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Home"
    >
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32 text-white text-center py-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Premium SS & Glass Railing Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Specializing in stainless steel and glass railings for modern architectural designs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="#Projects"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

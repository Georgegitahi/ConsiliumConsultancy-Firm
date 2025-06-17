import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  return (
<section className="bg-white py-16 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
    <div className="md:w-1/2 space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Build Wealth With Confidence</h1>
    <p className="text-lg text-gray-600">
      We help you navigate investment strategies tailored to your financial goals.
    </p>
    <div className="flex gap-4">
      <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition">Book Appointment</button>
      <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded hover:bg-blue-50 transition">Explore Services</button>
    </div>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0">
    <img src="/hero-image.svg" alt="Hero" className="w-full max-w-md mx-auto" />
  </div>
      <motion.div
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Text content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            variants={fadeUp}
          >
            Build Wealth With Confidence
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            variants={fadeUp}
          >
            Expert financial advice, tailored investments, and secure planning —
            all under one trusted firm.
          </motion.p> */}
          <motion.div className="space-x-4" variants={fadeUp}>
            {/* <Link
              to="/book"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transform hover:scale-105 hover:shadow-lg transition duration-300"

            >
              Explore Services
            </Link> */}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div className="md:w-1/2 flex justify-center" variants={fadeUp}>
          {/* <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d2"
            alt="Financial planning"
            className="w-full max-w-md rounded-lg shadow-lg"
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

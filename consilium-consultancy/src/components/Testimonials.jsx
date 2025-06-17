import React from 'react';
import { motion } from "framer-motion";







const testimonials = [
  {
    name: "Alice M.",
    role: "Entrepreneur",
    quote:
      "Fiducia Capital helped me understand investing like never before. Clear, practical, and personalized.",
  },
  {
    name: "Brian K.",
    role: "Software Engineer",
    quote:
      "Their advice set me on a new path to financial freedom. Highly recommended!",
  },
  {
    name: "Janet O.",
    role: "Freelancer",
    quote:
      "Booking a session was easy and professional. I'm already seeing growth in my savings.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
             <motion.div
    key={index}
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
    <h4 className="text-gray-800 font-semibold">{t.name}</h4>
    <p className="text-sm text-gray-500">{t.role}</p>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

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
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0OCwgMTYzLCAxODQsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center text-slate-100 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        
        <motion.p 
          className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by thousands of clients worldwide
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300 hover:transform hover:scale-105">
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-slate-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-slate-200 text-lg leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-200 font-bold text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-semibold text-lg">{t.name}</h4>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
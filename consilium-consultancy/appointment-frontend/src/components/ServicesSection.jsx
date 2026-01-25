import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, DollarSign, PieChart, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Investment Planning",
    desc: "Customized strategies to grow and secure your wealth with proven methodologies.",
    icon: <DollarSign size={48} className="text-slate-300" />,
  },
  {
    title: "Retirement Advice",
    desc: "Ensure a stable and comfortable future with expert guidance and planning.",
    icon: <Briefcase size={48} className="text-slate-300" />,
  },
  {
    title: "Portfolio Management",
    desc: "We manage, monitor and optimize your investments for maximum returns.",
    icon: <PieChart size={48} className="text-slate-300" />,
  },
  {
    title: "Investment Planning",
    desc: "Customized strategies to grow and secure your wealth with proven methodologies.",
    icon: <DollarSign size={48} className="text-slate-300" />,
  },
  {
    title: "Retirement Advice",
    desc: "Ensure a stable and comfortable future with expert guidance and planning.",
    icon: <Briefcase size={48} className="text-slate-300" />,
  },
  {
    title: "Portfolio Management",
    desc: "We manage, monitor and optimize your investments for maximum returns.",
    icon: <PieChart size={48} className="text-slate-300" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 right-32 w-80 h-80 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-slate-500/15 to-slate-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-slate-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-32 h-32 border border-slate-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0OCwgMTYzLCAxODQsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4 drop-shadow-lg">
            Our{' '}
            <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="relative group"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl mb-6 group-hover:from-slate-600 group-hover:to-slate-500 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <motion.button
                    className="flex items-center text-slate-400 hover:text-slate-200 transition-colors group-hover:text-slate-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-2 text-sm font-medium">Learn More</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-slate-600/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-slate-600/40 rounded-full group-hover:bg-slate-500/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transition-all duration-300 border border-slate-500/50 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-transparent text-slate-300 font-semibold rounded-xl border border-slate-500/50 hover:bg-slate-800/50 hover:text-slate-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
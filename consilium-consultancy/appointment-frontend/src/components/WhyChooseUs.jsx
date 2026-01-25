import React from 'react';
import { ShieldCheck, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <ShieldCheck size={48} className="text-slate-300" />,
    title: "Trusted Expertise",
    desc: "Our certified advisors bring years of industry experience and a proven track record."
  },
  {
    icon: <Users size={48} className="text-slate-300" />,
    title: "Client-Centered Approach",
    desc: "We tailor solutions that fit your unique goals, risk tolerance, and lifestyle."
  },
  {
    icon: <Lightbulb size={48} className="text-slate-300" />,
    title: "Innovative Strategies",
    desc: "We blend traditional wisdom with modern financial tech for smart investing."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-slate-500/15 to-slate-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-24 h-24 border border-slate-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 bg-clip-text text-transparent">
              Consilium Consultancy
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover what sets us apart in the world of financial consulting
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/90 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl mb-6 group-hover:from-slate-600 group-hover:to-slate-500 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {reason.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors">
                  {reason.desc}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-slate-600/30 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-slate-300 text-lg mb-6">
            Ready to experience the Consilium difference?
          </p> */}
          {/* <motion.button
            className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transition-all duration-300 border border-slate-500/50 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
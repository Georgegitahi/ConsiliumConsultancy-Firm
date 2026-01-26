import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Target, 
  ArrowRight, 
  Play, 
  Star, 
  Users, 
  Award,
  CheckCircle,
  Sparkles,
  BarChart3
} from 'lucide-react';

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
  const [currentText, setCurrentText] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const rotatingTexts = [
    'opportunities',
    'solutions',
    'freedom'
  ];

  const achievements = [
    'Award-winning investment strategies',
    'SEC registered and fully compliant',
    'Personalized wealth management',
    '24/7 portfolio monitoring'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-slate-500/20 to-slate-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-slate-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
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
          className="absolute top-1/4 left-1/3 w-32 h-32 border border-slate-400/30 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-slate-400/30 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        {/* Wave Animation */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-600/10 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.1), transparent)",
            backgroundSize: "200% 100%",
          }}
        ></motion.div>

        {/* Central Rotating Element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-300/5 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0OCwgMTYzLCAxODQsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Main Content - Centered */}
          <div className="max-w-4xl space-y-8">
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-full border border-slate-400/30">
                <Sparkles className="w-4 h-4 text-slate-300 mr-2" />
                <span className="text-slate-200 text-sm font-semibold">Wealth Management Platform</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 leading-tight drop-shadow-lg">
                Bringing financial
                <span className="block bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 bg-clip-text text-transparent relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentText}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{
                        duration: 0.1000,
                        ease: "easeInOut"
                      }}
                      className="inline-block"
                    >
                      {rotatingTexts[currentText]}
                    </motion.span>
                  </AnimatePresence>
                  {/* <span className="text-slate-300"> & success</span> */}
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                Transform your financial future with expert investment strategies, 
                personalized wealth planning, and proven results that speak for themselves.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-500/50"
              >
                {/* <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span> */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full border-2 border-slate-200 flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-300">15,000+ happy clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-slate-300 ml-1">4.9/5 rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
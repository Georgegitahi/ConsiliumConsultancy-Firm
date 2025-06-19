import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [currentStat, setCurrentStat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { value: '$2.4B+', label: 'Assets Under Management', icon: TrendingUp },
    { value: '15,000+', label: 'Happy Clients', icon: Users },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '25+', label: 'Years Experience', icon: Award }
  ];

  const achievements = [
    'Award-winning investment strategies',
    'SEC registered and fully compliant',
    'Personalized wealth management',
    '24/7 portfolio monitoring'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
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
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl"
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
              className="absolute w-1 h-1 bg-white/20 rounded-full"
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
          className="absolute top-1/4 left-1/3 w-32 h-32 border border-cyan-400/30 rotate-45"
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
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-pink-400/30 rounded-full"
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
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/10 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)",
            backgroundSize: "200% 100%",
          }}
        ></motion.div>

        {/* Central Rotating Element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-200/50">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-semibold">#1 Wealth Management Platform</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Build Wealth
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  With Confidence
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg drop-shadow-sm">
                Transform your financial future with expert investment strategies, 
                personalized wealth planning, and proven results that speak for themselves.
              </p>
            </motion.div>

            {/* Achievement List */}
            <motion.div variants={fadeUp} className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 font-medium">{achievement}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="/book"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span> */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              {/* <button 
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Play className={`w-4 h-4 text-white ml-0.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                </div>
                Watch Demo
              </button> */}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{i}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-300">15,000+ happy clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-1">4.9/5 rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div variants={fadeUp} className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl"></div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-800 font-bold text-xl">Portfolio Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                {/* Animated Stat Display */}
                <motion.div
                  key={currentStat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 mb-6"
                >
                  <div className="flex justify-center mb-3">
                    {React.createElement(stats[currentStat].icon, { 
                      className: "w-10 h-10 text-blue-600" 
                    })}
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stats[currentStat].value}
                  </div>
                  <div className="text-gray-600">
                    {stats[currentStat].label}
                  </div>
                </motion.div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  {[
                    { label: 'Growth Portfolio', value: 85, color: 'from-green-500 to-emerald-500' },
                    { label: 'Conservative Mix', value: 70, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Alternative Assets', value: 55, color: 'from-purple-500 to-pink-500' }
                  ].map((item, index) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{item.label}</span>
                        <span className="text-gray-800 font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className={`bg-gradient-to-r ${item.color} h-3 rounded-full relative overflow-hidden`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {/* <button className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm font-medium">Analytics</span>
                  </button> */}
                  {/* <button className="flex items-center justify-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl transition-colors">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-medium">Goals</span>
                  </button> */}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              className="text-center group cursor-pointer p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                {React.createElement(stat.icon, { 
                  className: "w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" 
                })}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
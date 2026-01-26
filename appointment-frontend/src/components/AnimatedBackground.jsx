// src/components/LiveBackground.jsx
import React, { useEffect } from 'react';

const  AnimatedBackground = ({ variant = 'default', intensity = 'medium' }) => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('live-particles');
      if (!particlesContainer) return;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Adjust particle count based on intensity
      const particleCount = intensity === 'low' ? 15 : intensity === 'high' ? 45 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Add Tailwind classes for styling
        particle.className = `
          absolute rounded-full opacity-20 animate-pulse
          ${Math.random() > 0.5 ? 'bg-purple-200' : 'bg-blue-200'}
          ${Math.random() > 0.7 ? 'bg-indigo-200' : ''}
        `.trim();
        
        // Random size and position
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation properties
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Add floating animation
        particle.style.animation = `
          float ${Math.random() * 4 + 8}s ease-in-out infinite,
          pulse ${Math.random() * 2 + 2}s ease-in-out infinite alternate
        `;
        
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
    
    // Recreate particles periodically for dynamic effect
    const interval = setInterval(createParticles, 15000);
    
    return () => clearInterval(interval);
  }, [intensity]);

  // Different background variants
  const getBackgroundVariant = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';
      case 'warm':
        return 'bg-gradient-to-br from-orange-50 via-red-50 to-pink-50';
      case 'cool':
        return 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50';
      case 'minimal':
        return 'bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100';
      default:
        return 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50';
    }
  };

  const getOverlayVariant = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30';
      case 'warm':
        return 'bg-gradient-to-r from-orange-200/30 via-transparent to-pink-200/30';
      case 'cool':
        return 'bg-gradient-to-r from-cyan-200/30 via-transparent to-indigo-200/30';
      case 'minimal':
        return 'bg-gradient-to-r from-gray-200/20 via-transparent to-slate-200/20';
      default:
        return 'bg-gradient-to-r from-blue-100/30 via-transparent to-purple-100/30';
    }
  };

  return (
    <>
      {/* Main Background Container */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${getBackgroundVariant()}`} />
        
        {/* Animated Gradient Overlay */}
        <div className={`absolute inset-0 ${getOverlayVariant()} animate-pulse`} />
        
        {/* Large Background Shapes */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-bounce" 
          style={{animationDuration: '8s'}} 
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-15 animate-bounce" 
          style={{animationDuration: '10s', animationDelay: '2s'}} 
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full opacity-10 animate-spin" 
          style={{animationDuration: '20s'}} 
        />
        
        {/* Floating Particles Container */}
        <div id="live-particles" className="absolute inset-0" />
        
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent" />
        
        {/* Additional Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-ping" />
        <div 
          className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full opacity-30 animate-ping" 
          style={{animationDelay: '1s'}} 
        />
        <div 
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-indigo-300 rounded-full opacity-50 animate-ping" 
          style={{animationDelay: '2s'}} 
        />
        <div 
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-25 animate-ping" 
          style={{animationDelay: '3s'}} 
        />
      </div>
      
      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        .floating-particle {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '💼' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Book', href: '/book', icon: '📅' },
    { name: 'Partnerships', href: '/partnerships', icon: '🤝' },
    { name: 'Contact', href: '/contact', icon: '📞' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 20px
          )`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Enhanced Branding */}
          <div className="lg:col-span-1 group">
            <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300">
                Consilium
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:w-24 transition-all duration-300"></div>
              <p className="text-gray-300 leading-relaxed text-sm mb-6">
                Empowering your financial future with trusted advice and innovative solutions.
              </p>
              <div className="flex space-x-4">
                {['L', 'T', 'F'].map((social, index) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-gray-800/70 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-gray-700 hover:border-blue-500 hover:bg-blue-600 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <span className="text-xs font-semibold">{social}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <h3 className="text-xl font-semibold mb-6 text-gray-100 relative">
              Quick Links
              <div className="absolute bottom-[-4px] left-0 w-8 h-0.5 bg-blue-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li 
                  key={link.name}
                  className="transform transition-all duration-300 hover:translate-x-2"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                  >
                    <span className="text-lg transform transition-transform duration-300 group-hover:scale-110">{link.icon}</span>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">{link.name}</span>
                    <span className={`transform transition-all duration-300 ${hoveredLink === index ? 'translate-x-1 opacity-100' : 'opacity-0'}`}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <h3 className="text-xl font-semibold mb-6 text-gray-100 relative">
              Get in Touch
              <div className="absolute bottom-[-4px] left-0 w-8 h-0.5 bg-green-500 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-5 h-5 text-blue-400 flex-shrink-0">📍</div>
                <span className="text-gray-300 text-sm">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="w-5 h-5 text-green-400 flex-shrink-0">📞</div>
                <span className="text-gray-300 text-sm">+254 7026 15905</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="w-5 h-5 text-purple-400 flex-shrink-0">📧</div>
                <span className="text-gray-300 text-sm break-all">info@consiliumconsultancy.com</span>
                
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="w-5 h-5 text-purple-400 flex-shrink-0">💼</div>
                <span className="text-gray-300 text-sm break-all">career@consiliumconsultancy.com</span>
                
              </div>
            </div>
          </div>

          {/* Enhanced Newsletter */}
          <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <h3 className="text-xl font-semibold mb-6 text-gray-100 relative">
              Stay Informed
              <div className="absolute bottom-[-4px] left-0 w-8 h-0.5 bg-purple-500 rounded-full"></div>
            </h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest financial insights and updates.</p>
            <div className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-4 pr-12 rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/90 focus:bg-gray-800"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300">📧</div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-blue-500/25 active:scale-95">
                <span>Subscribe Now</span>
                <span className="transform transition-transform duration-300 hover:translate-x-1">🚀</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Consilium Consultancy. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-1 hover:underline"
              >
                <span>Privacy Policy</span>
                <span className="text-xs">↗</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center space-x-1 hover:underline"
              >
                <span>Terms of Service</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
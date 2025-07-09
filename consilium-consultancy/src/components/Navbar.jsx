import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Shield, TrendingUp, Users, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Wealth Management', icon: TrendingUp, desc: 'Grow your portfolio' },
    { name: 'Investment Planning', icon: Sparkles, desc: 'Strategic investments' },
    { name: 'Risk Assessment', icon: Shield, desc: 'Secure your future' }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', dropdown: services },
    { name: 'Partnerships', href: '/partnerships', icon: Users },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleAppointmentSubmit = () => {
    // Validate required fields
    if (!appointmentData.name || !appointmentData.email || !appointmentData.phone || 
        !appointmentData.service || !appointmentData.date || !appointmentData.time) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Appointment booking data:', appointmentData);
    
    // Show success message (in real app, handle this properly)
    alert('Appointment request submitted successfully! We will contact you soon.');
    
    // Reset form and close modal
    setAppointmentData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setShowAppointmentModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openAppointmentModal = () => {
    setShowAppointmentModal(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Consilium
                </h1>
                <p className="text-xs text-gray-500">
                  Consultancy Firm
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </a>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 animate-in slide-in-from-top-5 duration-200">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={link.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <button 
                onClick={openAppointmentModal}
                className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-gray-700 hover:bg-gray-100"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-white/20 px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <div key={link.name} className="space-y-2">
                <a
                  href={link.href}
                  className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span className="font-medium">{link.name}</span>
                  </div>
                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </a>
                
                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 space-y-2 animate-in slide-in-from-left duration-300">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={link.href}
                        className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <button 
              onClick={openAppointmentModal}
              className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Book Appointment</h2>
                  <p className="text-sm text-gray-600">Schedule a consultation with our experts</p>
                </div>
              </div>
              <button
                onClick={() => setShowAppointmentModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Service
                  </label>
                  <select
                    name="service"
                    value={appointmentData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={appointmentData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={appointmentData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your needs or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAppointmentModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAppointmentSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                  <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, Shield, TrendingUp, Users, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

// Custom Consilium Logo Component
const ConsiliumLogo = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Outer Circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        className="opacity-90"
      />
      
      {/* Column/Pillar */}
      <g transform="translate(35, 25)">
        {/* Column base */}
        <rect x="0" y="40" width="20" height="4" fill="url(#logoGradient)" rx="2"/>
        {/* Column shaft */}
        <rect x="6" y="15" width="8" height="25" fill="url(#logoGradient)" rx="1"/>
        {/* Column capital */}
        <rect x="2" y="10" width="16" height="5" fill="url(#logoGradient)" rx="2"/>
        {/* Column top lines */}
        <rect x="1" y="8" width="18" height="2" fill="url(#logoGradient)" rx="1"/>
        <rect x="0" y="5" width="20" height="3" fill="url(#logoGradient)" rx="1.5"/>
      </g>
      
      {/* Coin Stacks */}
      <g transform="translate(60, 35)">
        {/* First stack (shorter) */}
        <ellipse cx="6" cy="25" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="6" cy="23" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="6" cy="21" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="6" cy="19" rx="5" ry="2" fill="url(#logoGradient)"/>
        
        {/* Second stack (taller) */}
        <ellipse cx="18" cy="25" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="18" cy="23" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="18" cy="21" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="18" cy="19" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="18" cy="17" rx="5" ry="2" fill="url(#logoGradient)"/>
        <ellipse cx="18" cy="15" rx="5" ry="2" fill="url(#logoGradient)"/>
      </g>
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  // Replace with your actual Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "8e210d59-d3e3-4795-a3fe-897dfcc69a86";

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
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleAppointmentSubmit = async () => {
    // Validate required fields
    if (!appointmentData.name || !appointmentData.email || !appointmentData.phone || 
        !appointmentData.service || !appointmentData.date || !appointmentData.time) {
      setSubmitStatus('validation_error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      
      // Basic form data
      formData.append("name", appointmentData.name);
      formData.append("email", appointmentData.email);
      formData.append("phone", appointmentData.phone);
      formData.append("service", appointmentData.service);
      formData.append("date", appointmentData.date);
      formData.append("time", appointmentData.time);
      formData.append("message", appointmentData.message || "No additional message provided");
      
      // Enhanced Web3Forms fields for better email handling
      formData.append("subject", "New Appointment Booking Request");
      formData.append("from_name", appointmentData.name);
      formData.append("reply_to", appointmentData.email);
      
      // Custom message format for better readability
      const customMessage = `
APPOINTMENT BOOKING REQUEST

Client Details:
- Name: ${appointmentData.name}
- Email: ${appointmentData.email}
- Phone: ${appointmentData.phone}

Appointment Details:
- Service: ${appointmentData.service}
- Preferred Date: ${appointmentData.date}
- Preferred Time: ${appointmentData.time}

Additional Message:
${appointmentData.message || "No additional message provided"}

---
This appointment request was submitted through the Consilium website.
      `;
      
      formData.append("message", customMessage);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form data
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
        
        // Auto-close modal after success message is shown
        setTimeout(() => {
          setShowAppointmentModal(false);
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (submitStatus === 'validation_error') {
      setSubmitStatus(null);
    }
  };

  const openAppointmentModal = () => {
    setShowAppointmentModal(true);
    setIsOpen(false); // Close mobile menu if open
    setSubmitStatus(null); // Clear any previous status
  };

  const closeModal = () => {
    setShowAppointmentModal(false);
    setSubmitStatus(null);
    // Don't clear form data unless successfully submitted
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-800/90 backdrop-blur-xl shadow-lg border-b border-cyan-400/20' 
          : 'bg-slate-800 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <ConsiliumLogo className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 bg-clip-text text-transparent">
                  CONSILIUM
                </h1>
                <p className="text-xs text-cyan-300/70 font-medium tracking-wider">
                  CONSULTANCY FIRM
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
                    className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 text-cyan-100 hover:text-cyan-300 hover:bg-cyan-400/10"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 group-hover:w-full transition-all duration-300"></div>
                  </a>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-400/20 p-2 animate-in slide-in-from-top-5 duration-200">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={link.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-400/10 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5 text-slate-800" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-cyan-100">{item.name}</h4>
                            <p className="text-sm text-cyan-300/70">{item.desc}</p>
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
                className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-slate-800 font-semibold rounded-xl hover:from-cyan-300 hover:via-sky-300 hover:to-blue-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <div className="w-2 h-2 bg-slate-800 rounded-full group-hover:animate-ping"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-cyan-100 hover:bg-cyan-400/10"
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
          <div className="bg-slate-800/95 backdrop-blur-xl border-t border-cyan-400/20 px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <div key={link.name} className="space-y-2">
                <a
                  href={link.href}
                  className="flex items-center justify-between p-3 rounded-xl text-cyan-100 hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 group"
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
                        className="flex items-center gap-3 p-2 rounded-lg text-cyan-300/70 hover:text-cyan-300 hover:bg-cyan-400/10 transition-colors"
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
              className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-slate-800 font-semibold rounded-xl hover:from-cyan-300 hover:via-sky-300 hover:to-blue-300 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <div className="w-2 h-2 bg-slate-800 rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-cyan-400/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-cyan-100">Book Appointment</h2>
                  <p className="text-sm text-cyan-300/70">Schedule a consultation with our experts</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-cyan-400/10 transition-colors text-cyan-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mx-6 mt-4 p-4 bg-green-900/50 border border-green-400/50 rounded-lg">
                <p className="text-green-300 font-medium">✅ Appointment request sent successfully!</p>
                <p className="text-green-300/70 text-sm mt-1">We'll contact you soon to confirm your appointment.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mx-6 mt-4 p-4 bg-red-900/50 border border-red-400/50 rounded-lg">
                <p className="text-red-300 font-medium">❌ Error sending appointment request</p>
                <p className="text-red-300/70 text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            )}
            
            {submitStatus === 'validation_error' && (
              <div className="mx-6 mt-4 p-4 bg-yellow-900/50 border border-yellow-400/50 rounded-lg">
                <p className="text-yellow-300 font-medium">⚠️ Please fill in all required fields</p>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={appointmentData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 placeholder-cyan-300/50 disabled:opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={appointmentData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 placeholder-cyan-300/50 disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={appointmentData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 placeholder-cyan-300/50 disabled:opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Service *
                  </label>
                  <select
                    name="service"
                    value={appointmentData.service}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 disabled:opacity-50"
                  >
                    <option value="" className="text-cyan-300/50">Select a service</option>
                    {services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={appointmentData.date}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 disabled:opacity-50"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={appointmentData.time}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors text-cyan-100 disabled:opacity-50"
                  >
                    <option value="" className="text-cyan-300/50">Select a time</option>
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
                <label className="block text-sm font-medium text-cyan-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={appointmentData.message}
                  onChange={handleInputChange}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-700 border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors resize-none text-cyan-100 placeholder-cyan-300/50 disabled:opacity-50"
                  placeholder="Tell us more about your needs or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-400/10 transition-colors font-medium disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAppointmentSubmit}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 text-slate-800 rounded-lg hover:from-cyan-300 hover:via-sky-300 hover:to-blue-300 transition-all font-medium flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-800 border-t-transparent rounded-full animate-spin"></div>
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                      <div className="w-2 h-2 bg-slate-800 rounded-full group-hover:animate-ping"></div>
                    </>
                  )}
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
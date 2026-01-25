import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, AlertCircle, Send, Users } from 'lucide-react';

const AppointmentBookingForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceType: '',
    advisorId: '',
    notes: ''
  });

  const [advisors, setAdvisors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  // Mock advisors data (replace with actual API call)
  const mockAdvisors = [
    { id: '1', name: 'Sarah Johnson', specialty: 'Investment Planning', email: 'sarah@consilium.com' },
    { id: '2', name: 'Michael Chen', specialty: 'Retirement Planning', email: 'michael@consilium.com' },
    { id: '3', name: 'Emily Rodriguez', specialty: 'Tax Strategy', email: 'emily@consilium.com' },
    { id: '4', name: 'David Thompson', specialty: 'Estate Planning', email: 'david@consilium.com' }
  ];

  const serviceTypes = [
    'Financial Planning Consultation',
    'Investment Portfolio Review',
    'Retirement Planning',
    'Tax Strategy Session',
    'Estate Planning',
    'Insurance Review',
    'Debt Management',
    'Business Financial Planning'
  ];

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 17 && minute > 0) break; // End at 5:00 PM
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  useEffect(() => {
    setAdvisors(mockAdvisors);
    setAvailableSlots(generateTimeSlots());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.clientName.trim()) errors.push('Name is required');
    if (!formData.clientEmail.trim()) errors.push('Email is required');
    if (!formData.clientPhone.trim()) errors.push('Phone number is required');
    if (!formData.appointmentDate) errors.push('Appointment date is required');
    if (!formData.appointmentTime) errors.push('Appointment time is required');
    if (!formData.serviceType) errors.push('Service type is required');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.clientEmail && !emailRegex.test(formData.clientEmail)) {
      errors.push('Please enter a valid email address');
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-()]+$/;
    if (formData.clientPhone && !phoneRegex.test(formData.clientPhone)) {
      errors.push('Please enter a valid phone number');
    }
    
    // Date validation (not in the past)
    const selectedDate = new Date(formData.appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.push('Please select a future date');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join('. '));
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // API call to backend
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccess('Appointment booked successfully! You will receive a confirmation email shortly.');
        setStep(3); // Success step
        // Reset form
        setFormData({
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          appointmentDate: '',
          appointmentTime: '',
          serviceType: '',
          advisorId: '',
          notes: ''
        });
      } else {
        setError(result.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      const basicErrors = [];
      if (!formData.clientName.trim()) basicErrors.push('Name is required');
      if (!formData.clientEmail.trim()) basicErrors.push('Email is required');
      if (!formData.clientPhone.trim()) basicErrors.push('Phone number is required');
      
      if (basicErrors.length > 0) {
        setError(basicErrors.join('. '));
        return;
      }
    }
    
    setError('');
    setStep(step + 1);
  };

  const prevStep = () => {
    setError('');
    setStep(step - 1);
  };

  const resetForm = () => {
    setStep(1);
    setSuccess('');
    setError('');
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      appointmentDate: '',
      appointmentTime: '',
      serviceType: '',
      advisorId: '',
      notes: ''
    });
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
            <h1 className="text-3xl font-bold text-center">Book Your Appointment</h1>
            <p className="text-center text-cyan-100 mt-2">Schedule a consultation with our financial advisors</p>
            
            {/* Progress Bar */}
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className={`flex items-center ${stepNum < 3 ? 'mr-4' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= stepNum ? 'bg-white text-cyan-500' : 'bg-white/30 text-white'
                    }`}>
                      {stepNum === 3 && success ? <CheckCircle className="w-5 h-5" /> : stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-16 h-0.5 ${step > stepNum ? 'bg-white' : 'bg-white/30'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center text-red-200">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && step === 3 && (
              <div className="text-center">
                <div className="mb-6 p-6 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">Appointment Confirmed!</h2>
                  <p className="text-gray-300">{success}</p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Book Another Appointment
                </button>
              </div>
            )}

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="clientEmail"
                      value={formData.clientEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="clientPhone"
                      value={formData.clientPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
                  >
                    Next Step
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Appointment Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Appointment Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Appointment Date *
                    </label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Appointment Time *
                    </label>
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    >
                      <option value="">Select time</option>
                      {availableSlots.map(slot => (
                        <option key={slot} value={slot} className="bg-gray-800">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    <option value="">Select service type</option>
                    {serviceTypes.map(service => (
                      <option key={service} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Preferred Advisor (Optional)
                  </label>
                  <select
                    name="advisorId"
                    value={formData.advisorId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    <option value="">Any available advisor</option>
                    {advisors.map(advisor => (
                      <option key={advisor.id} value={advisor.id} className="bg-gray-800">
                        {advisor.name} - {advisor.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    placeholder="Any specific topics you'd like to discuss or questions you have..."
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center"
                  >
                    {loading ? 'Booking...' : 'Book Appointment'}
                    {!loading && <Send className="w-4 h-4 ml-2" />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center text-gray-300">
          <p className="text-sm">
            Need help? Contact us at{' '}
            <a href="mailto:support@consilium.com" className="text-cyan-400 hover:underline">
              support@consilium.com
            </a>{' '}
            or call{' '}
            <a href="tel:+1-555-0123" className="text-cyan-400 hover:underline">
              +1 (555) 012-3456
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingForm;
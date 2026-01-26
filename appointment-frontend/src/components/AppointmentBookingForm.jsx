import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, AlertCircle, Send, Users } from 'lucide-react';
import { appointmentAPI, advisorAPI } from '../services/api';
import { SERVICE_TYPES } from '../utils/constants';

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
  const [advisorsLoading, setAdvisorsLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  // Load advisors from API
  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        setAdvisorsLoading(true);
        const response = await advisorAPI.getAll();
        setAdvisors(response.data);
      } catch (error) {
        console.error('Error fetching advisors:', error);
        setError('Failed to load advisors. Please refresh the page.');
      } finally {
        setAdvisorsLoading(false);
      }
    };

    fetchAdvisors();
  }, []);

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
      // Format data for API
      const appointmentData = {
        ...formData,
        advisorId: formData.advisorId || null // Send null if no advisor selected
      };

      const response = await appointmentAPI.create(appointmentData);
      
      if (response.success) {
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
        setError(response.message || 'Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Booking error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component remains the same...
  // (Include all the remaining JSX and functions from the original component)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-12 px-4">
      {/* Your existing JSX here */}
      {/* Replace serviceTypes.map with SERVICE_TYPES.map */}
      {/* Replace mockAdvisors with advisors from API */}
      {/* Add loading state for advisors */}
      {advisorsLoading && (
        <div className="text-center text-gray-300">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="mt-2">Loading advisors...</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentBookingForm;
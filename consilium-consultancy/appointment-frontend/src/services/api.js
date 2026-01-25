// API base URL - update this if your backend runs on different port
import { config } from '../config/env';

const API_BASE_URL = config.API_BASE_URL;
// ... rest of the file remains the same
// const API_BASE_URL = 'http://localhost:5000/api';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Appointments API
export const appointmentAPI = {
  // Create new appointment
  create: (appointmentData) => 
    apiRequest('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData)
    }),

  // Get all appointments
  getAll: () => apiRequest('/appointments'),

  // Get appointment by ID
  getById: (id) => apiRequest(`/appointments/${id}`),

  // Update appointment
  update: (id, appointmentData) => 
    apiRequest(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(appointmentData)
    }),

  // Delete appointment
  delete: (id) => 
    apiRequest(`/appointments/${id}`, {
      method: 'DELETE'
    })
};

// Advisors API
export const advisorAPI = {
  // Get all advisors
  getAll: () => apiRequest('/advisors'),

  // Get advisor by ID
  getById: (id) => apiRequest(`/advisors/${id}`),

  // Create new advisor
  create: (advisorData) => 
    apiRequest('/advisors', {
      method: 'POST',
      body: JSON.stringify(advisorData)
    })
};

// Health check
export const healthCheck = () => apiRequest('/health');
// client/src/utils/api.js

import axios from 'axios';

// Base API URL from environment variables or default
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor - Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 API Request:', config.method.toUpperCase(), config.url);
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle responses and errors
api.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ API Response:', response.config.url, response.status);
    }
    
    return response;
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      console.error('❌ API Error:', status, data.message || error.message);
      
      // Handle specific status codes
      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          }
          break;
          
        case 403:
          console.error('Access forbidden');
          break;
          
        case 404:
          console.error('Resource not found');
          break;
          
        case 500:
          console.error('Server error');
          break;
          
        default:
          console.error('API Error:', data.message || 'Unknown error');
      }
      
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request made but no response received
      console.error('❌ Network Error: No response from server');
      return Promise.reject({
        message: 'Network error. Please check your connection.',
      });
    } else {
      // Something else happened
      console.error('❌ Error:', error.message);
      return Promise.reject({
        message: error.message || 'An unexpected error occurred',
      });
    }
  }
);

// ================================
// AUTH API ENDPOINTS
// ================================

export const authAPI = {
  /**
   * Register a new user
   * @param {Object} data - { name, email, password }
   * @returns {Promise} User data and token
   */
  register: async (data) => {
    try {
      const response = await api.post('/auth/register', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Login user
   * @param {Object} data - { email, password }
   * @returns {Promise} User data and token
   */
  login: async (data) => {
    try {
      const response = await api.post('/auth/login', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Google OAuth login
   * @param {Object} data - Google user data
   * @returns {Promise} User data and token
   */
  googleLogin: async (data) => {
    try {
      const response = await api.post('/auth/google', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get current user
   * @returns {Promise} Current user data
   */
  getMe: async () => {
    try {
      const response = await api.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Logout user
   * @returns {Promise} Logout confirmation
   */
  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// ================================
// USER API ENDPOINTS
// ================================

export const userAPI = {
  /**
   * Get user profile
   * @returns {Promise} User profile data
   */
  getProfile: async () => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update user profile
   * @param {Object} data - { name, avatar }
   * @returns {Promise} Updated user data
   */
  updateProfile: async (data) => {
    try {
      const response = await api.put('/users/profile', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get all users (Admin only)
   * @returns {Promise} List of all users
   */
  getAllUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// ================================
// ALGORITHM PROGRESS API (Optional)
// ================================

export const progressAPI = {
  /**
   * Save algorithm progress
   * @param {Object} data - { algorithmType, algorithmName, completed }
   * @returns {Promise} Progress data
   */
  saveProgress: async (data) => {
    try {
      const response = await api.post('/progress', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get user progress
   * @returns {Promise} User's algorithm progress
   */
  getProgress: async () => {
    try {
      const response = await api.get('/progress');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// ================================
// UTILITY FUNCTIONS
// ================================

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * Get stored user data
 * @returns {Object|null}
 */
export const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Get stored token
 * @returns {string|null}
 */
export const getStoredToken = () => {
  return localStorage.getItem('token');
};

/**
 * Clear authentication data
 */
export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Health check
 * @returns {Promise} Server health status
 */
export const healthCheck = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ================================
// ERROR HANDLER HELPER
// ================================

/**
 * Format API error for display
 * @param {Error} error 
 * @returns {string} Formatted error message
 */
export const formatAPIError = (error) => {
  if (error.message) {
    return error.message;
  }
  
  if (error.errors && Array.isArray(error.errors)) {
    return error.errors.map(err => err.msg).join(', ');
  }
  
  return 'An unexpected error occurred';
};

// ================================
// EXPORT DEFAULT API INSTANCE
// ================================

export default api;
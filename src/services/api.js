import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// User API services
export const userService = {
  // Register new user
  register: async (userData) => {
    const response = await api.post('/users/register', userData);
    if (response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  },

  // Login user
  login: async (email, password) => {
    const response = await api.post('/users/login', { email, password });
    if (response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userToken');
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
};

export default api;
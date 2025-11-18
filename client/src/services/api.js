import axios from 'axios';

// API Base URLs for each microservice
const API_URLS = {
  main: 'http://localhost:10001',
  products: 'http://localhost:10002',
  categories: 'http://localhost:10003',
  suppliers: 'http://localhost:10004',
  auth: 'http://localhost:10005'
};

// Create axios instance with default config
const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { API_URLS, api };

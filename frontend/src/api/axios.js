// src/api/axios.js
// This sets up a custom Axios instance with our backend's base URL
// It also adds the JWT token automatically to every request

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// This interceptor runs BEFORE every request
// It reads the token from localStorage and adds it to the Authorization header
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// This interceptor runs AFTER every response
// If the server returns 401 (Unauthorized), we log the user out automatically
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;
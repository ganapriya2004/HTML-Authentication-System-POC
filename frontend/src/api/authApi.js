// src/api/authApi.js
// Functions for all authentication API calls

import API from './axios';

// Call register endpoint
export const registerUser = (userData) => API.post('/auth/register', userData);

// Call login endpoint
export const loginUser = (userData) => API.post('/auth/login', userData);

// Call forgot password endpoint
export const forgotPassword = (email) => API.post('/auth/forgot-password', { email });

// Call reset password endpoint
export const resetPassword = (data) => API.post('/auth/reset-password', data);

// Get current logged in user
export const getMe = () => API.get('/auth/me');
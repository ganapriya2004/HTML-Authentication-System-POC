// src/context/AuthContext.jsx
// This creates a global state for authentication
// Any component in the app can access the logged in user info using this context

import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context object
const AuthContext = createContext();

// AuthProvider wraps our whole app and provides auth state everywhere
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // When app loads, check if user data is saved in localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login function - saves token and user data
  const login = (tokenValue, userData) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(tokenValue);
    setUser(userData);
  };

  // Logout function - clears everything
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook so components can easily use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
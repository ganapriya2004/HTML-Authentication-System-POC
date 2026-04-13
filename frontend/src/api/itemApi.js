// src/api/itemApi.js
// Functions for all dashboard item API calls (CRUD operations)

import API from './axios';

// Get all items for the logged in user
export const getItems = () => API.get('/items');

// Get a single item by ID
export const getItem = (id) => API.get(`/items/${id}`);

// Create a new item
export const createItem = (itemData) => API.post('/items', itemData);

// Update an existing item
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);

// Delete an item
export const deleteItem = (id) => API.delete(`/items/${id}`);

// Get dashboard statistics
export const getStats = () => API.get('/stats');
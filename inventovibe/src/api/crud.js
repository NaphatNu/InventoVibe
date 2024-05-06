import axios from 'axios';

const API_BASE_URL = 'https://sheet.best/api/sheets/5549f250-fd34-4bc7-8d8b-c8d015051808';

// Create (Post)
const createItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Read (Get)
const getAllItems = async (sheet) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tabs/${sheet}`);
    return response.data;
  } catch (error) {
    console.error('Error getting all items:', error);
    throw error;
  }
};

//
const getAllItemByValue = async (sheet) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tabs/History/category/${sheet}`);
    return response.data;
  } catch (error) {
    console.error('Error getting all items:', error);
    throw error;
  }
};
// (Get by ID)
const getItemById = async (itemId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting item by ID:', error);
    throw error;
  }
};

// Update (put)
const updateItem = async (itemId, updatedItemData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${itemId}`, updatedItemData);
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Delete
const deleteItem = async (itemId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};


export { createItem, getAllItems, getItemById, updateItem, deleteItem ,getAllItemByValue};
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData, { withCredentials: true });
};

export const logout = async () => {
  return await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
};

export const getUser = async () => {
  return await axios.get(`${API_URL}/me`, { withCredentials: true });
};

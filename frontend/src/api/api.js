import axios from 'axios';
import { getToken } from '../services/authService';
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5117/api',
  headers: { 'Content-Type': 'application/json' },
});

API.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

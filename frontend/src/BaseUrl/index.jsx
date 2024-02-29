import axios from 'axios';

export const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL, 
  withCredentials: true 
});

// Add interceptors if needed
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export default API;

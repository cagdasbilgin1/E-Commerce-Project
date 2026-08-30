import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config here (e.g., add auth headers)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

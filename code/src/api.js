import axios from 'axios';

const api = axios.create({
     baseURL: 'http://localhost:8000/api/', // 后端的 API 地址
     headers: {
          'Content-Type': 'application/json',
     },
});

// Add a request interceptor to add JWT token
api.interceptors.request.use((config) => {
     const token = localStorage.getItem('token');
     if (token) {
          config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
});

export default api;

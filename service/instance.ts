import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
});

baseInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

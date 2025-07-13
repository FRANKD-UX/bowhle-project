import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/", // Frank please Change to production URL later
});

// Frank to Auto-add token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

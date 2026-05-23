import axios from "axios";

// Production-safe base URL (Vite environment)
const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  console.warn("VITE_API_URL is not defined in .env file");
}

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically (for future JWT system)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
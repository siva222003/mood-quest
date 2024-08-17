import axios from "axios";
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
});

//headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.auth = `Bearer ${token}`;
  }
  return config;
});

//response

//error

//refreshToken

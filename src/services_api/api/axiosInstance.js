import axios from "axios";

// Helper to get cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const axiosInstance = axios.create({
  baseURL: "http://192.168.29.251:8000/api",
  withCredentials: true, 
}); 

axiosInstance.interceptors.request.use(
  (config) => {
   
    const token = getCookie("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // localStorage.removeItem("accessToken");
      // window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

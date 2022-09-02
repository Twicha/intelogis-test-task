import axios from "axios";

const baseURL = "http://localhost:3001";

const apiInstance = axios.create({
  baseURL,
});

apiInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = baseURL;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { apiInstance };

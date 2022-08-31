import axios from "axios";

const baseURL = "http://localhost:3001";

const apiInstance = axios.create({
  baseURL,
});

apiInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = baseURL;

    config.headers = {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { apiInstance };

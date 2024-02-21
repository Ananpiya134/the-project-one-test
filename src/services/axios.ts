import Axios from "axios";
import { API_BASE_URL } from "@/configs/constants";

const debug = true;
const axios = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTcwNTEzMTU5MSwiZXhwIjoxNzA3NzIzNTkxfQ.-BlhldWm2NtVas28Yq-A4KqZxQyD6zuGCFeBAR2tYLw";
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;

    /* eslint no-console: "off" */
    if (debug) {
      console.log(`Request -> ${config.method} -> ${config.url} `, config.data);
    }

    return config;
  },
  (error) => {
    if (debug) {
      console.log(
        `Response -> Error  -> ${error.response.config.method} -> ${error.response.config.url} `,
        error.response.data
      );
    }

    return Promise.reject(error);
  }
);

// Response interceptor for API calls
axios.interceptors.response.use(
  (response) => {
    if (debug) {
      console.log(
        `Response -> ${response.config.method} -> ${response.config.url} `,
        response.data
      );
    }

    return response;
  },
  async (error) => {
    if (debug) {
      console.log(
        `Response -> Error  -> ${error.response.config.method} -> ${error.response.config.url} `,
        error.response.data
      );
    }

    return Promise.reject(error);
  }
);

export default axios;

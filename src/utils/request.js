import axios from "axios";
import { Message } from "element-ui";
import { authApiBefore } from "@/nmb/middleware/authApiMiddleware";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: process.env.VUE_APP_TIMEOUT
});

// request interceptor
service.interceptors.request.use(
  async config => {
    const headers = (await authApiBefore()).headers || {};
    config.headers = {
      ...headers,
      Accept: "application/json",
      "Content-Type": headers["Content-Type"] || "application/json"
    };
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;

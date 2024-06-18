import axios, { AxiosError } from "axios";
import config from "../utils/config";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: config.VITE_API_EDC_URL,
  headers: {
    "Content-type": "application/json",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (body: any, token: string) => {
    return axiosInstance
      .post<T>(this.endpoint, body, {
        headers: {
          "Authorization": "Bearer " + token,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          // Handle Axios errors
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            // Server responded with a status code outside of 2xx range
            // console.error("Request failed with status:", axiosError.response.status);
            // console.error("Response data:", axiosError.response.data);
            return axiosError.response.data;
          } else if (axiosError.request) {
            // Request was made but no response was received
            // console.error("No response received:", axiosError.request);
            return axiosError.request;
          } else {
            // Something else happened while setting up the request
            // console.error("Error setting up the request:", axiosError.message);
            return axiosError.message;
          }
        } else {
          // Handle other types of errors (not Axios errors)
          // console.error("An error occurred:", error);
          return error;
        }
      });
  };
}

export default APIClient;

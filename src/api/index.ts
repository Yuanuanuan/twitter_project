import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "http://localhost:8081";

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

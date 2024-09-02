import axios, { AxiosRequestConfig, Method } from 'axios';

const API_BASE_URL = import.meta.env.VITE_DB_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchFromApi = async <T>(
  endpoint: string,
  method: Method = 'GET',
  data?: any,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await api.request<T>({
      url: endpoint,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to ${method} data from API:`, error);
    throw error;
  }
};

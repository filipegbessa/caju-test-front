import axios, { AxiosRequestConfig, Method } from 'axios';

const baseUrlAPI = process.env.VITE_DB_URL;

const api = axios.create({
  baseURL: baseUrlAPI,
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

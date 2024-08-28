import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_DB_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchFromApi = async <T>(
  endpoint: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint, config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch from API:', error);
    throw error;
  }
};

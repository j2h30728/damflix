import axios from 'axios';

const { VITE_API_KEY } = import.meta.env;

export const BASE_URL = 'https://api.themoviedb.org/3/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${VITE_API_KEY}`,
    accept: 'application/json',
  },
});
export default apiClient;

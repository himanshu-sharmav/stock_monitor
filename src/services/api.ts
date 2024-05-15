import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const register = (username: string, password: string, email: string) => {
  return axios.post(`${API_URL}/users/`, { username, password, email });
};

export const login = (username: string, password: string) => {
  return axios.post(`${API_URL}/token/`, { username, password });
};

export const getWatchlists = (token: string) => {
  return axios.get(`${API_URL}/watchlists/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addWatchlist = (symbol: string, token: string) => {
  return axios.post(
    `${API_URL}/watchlists/`,
    { symbol },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const deleteWatchlist = (id: number, token: string) => {
  return axios.delete(`${API_URL}/watchlists/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getStockData = (symbol: string) => {
  return axios.get(`${API_URL}/stock/${symbol}/`);
};

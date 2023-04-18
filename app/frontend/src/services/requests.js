import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response;
};

export default api;

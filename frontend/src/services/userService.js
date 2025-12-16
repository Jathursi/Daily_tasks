import API from '../api/api';

export const getAllUsers = async () => {
  const response = await API.get('/User'); // /api/User
  return response.data;
};

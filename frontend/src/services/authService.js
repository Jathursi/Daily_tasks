import API from '../api/api';

const TOKEN_KEY = 'jwtToken';

export const login = async (Email, password_hash) => {
  const response = await API.post('/Auth/login', { Email, password_hash });
  if (response.data.token) {
    localStorage.setItem(TOKEN_KEY, response.data.token);
  }
  return response.data;
};

export const register = async ({ name, Email, password }) => {
  const response = await API.post('/User/register', {
    name,
    Email,
    password_hash: password 
  });
  return response.data;
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const authHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

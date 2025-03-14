import { request } from '../request';

const login = async (credentials) => {
  return await request.post('auth/login', credentials);
};

const check = async () => {
  return await request.get('auth/check');
};

const logout = async () => {
  return await request.get('auth/logout');
};

const getRoles = async () => {
  return await request.get('auth/roles');
};

export const authApi = { login, logout, check, getRoles };

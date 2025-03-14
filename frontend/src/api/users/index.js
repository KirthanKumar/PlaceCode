import { request } from '../request';

const getAll = async () => {
  return await request.get('user');
};

const getById = async (id) => {
  return await request.get(`user/${id}`);
};

const getAvailableWorks = async (id) => {
  return await request.get(`user/${id}/works`);
};

const create = async (user) => {
  return await request.post('user', user);
};

const deleteById = async (id) => {
  return await request.delete(`user/${id}`);
};

const update = async (user) => {
  return await request.put('user', user);
};

export const usersApi = {
  create,
  getAll,
  getById,
  getAvailableWorks,
  deleteById,
  update,
};

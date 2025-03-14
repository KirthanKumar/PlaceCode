import { request } from '../request';

const run = async (task) => {
  return await request.post('task/run', task);
};

const getAll = async () => {
  return await request.get('task');
};

const getAllWithoutDescriptionAndTests = async () => {
  return await request.get('task?exclude[]=description&exclude[]=tests');
};

const getById = async (id) => {
  return await request.get(`task/${id}`);
};

const getByIdWithoutTests = async (id) => {
  return await request.get(`task/${id}?exclude[]=tests`);
};

const getTestsById = async (id) => {
  return await request.get(`task/${id}/tests`);
};

const getTopics = async () => {
  return await request.get('task/topics');
};

const getPLangs = async () => {
  return await request.get('task/plangs');
};

const create = async (task) => {
  return await request.post('task', task);
};

const update = async (task) => {
  return await request.put('task', task);
};

const deleteById = async (id) => {
  return await request.delete(`task/${id}`);
};

export const tasksApi = {
  run,
  getAll,
  getAllWithoutDescriptionAndTests,
  create,
  deleteById,
  getById,
  getByIdWithoutTests,
  getTestsById,
  getTopics,
  getPLangs,
  update,
};

import { request } from '../request';

const getAll = async () => {
  return await request.get('work');
};

const getTasksOfWork = async (id) => {
  return await request.get(`work/${id}/tasks`);
};

const getGroupsOfWork = async (id) => {
  return await request.get(`work/${id}/groups`);
};

const getWorksWithTask = async (id) => {
  return await request.get(`work/filterByTask/${id}`);
};

const getTasksOfWorkWithoutDescription = async (id) => {
  return await request.get(`work/${id}/tasks?exclude[]=description`);
};

const getTasksOfWorkWithoutDescriptionAndTests = async (id) => {
  return await request.get(`work/${id}/tasks?exclude[]=description&exclude[]=tests`);
};

const getById = async (id) => {
  return await request.get(`work/${id}`);
};

const deleteById = async (id) => {
  return await request.delete(`work/${id}`);
};

const create = async (work) => {
  return await request.post('work', work);
};

const update = async (work) => {
  return await request.put('work', work);
};

export const worksApi = {
  getAll,
  getById,
  getGroupsOfWork,
  getTasksOfWork,
  getWorksWithTask,
  getTasksOfWorkWithoutDescription,
  getTasksOfWorkWithoutDescriptionAndTests,
  deleteById,
  create,
  update,
};

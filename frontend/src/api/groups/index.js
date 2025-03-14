import { request } from "../request";

const getAll = async () => {
  return await request.get("group");
};

const getById = async (id) => {
  return await request.get(`group/${id}`);
};

const create = async (group) => {
  return await request.post("group", group);
};

const update = async (group) => {
  return await request.put("group", group);
};

const deleteById = async (id) => {
  return await request.delete(`group/${id}`);
};

export const groupsApi = { getAll, create, deleteById, getById, update };

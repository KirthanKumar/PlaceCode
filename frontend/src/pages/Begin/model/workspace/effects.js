import { tasksApi, worksApi } from "@api";

export const getTasksFx = async () => {
  try {
    return await worksApi.getTasksOfWorkWithoutDescriptionAndTests();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const getTaskInfoFx = async (taskId) => {
  try {
    return await tasksApi.getById(taskId);
  } catch (error) {
    console.error("Error fetching task info:", error);
    throw error;
  }
};

export const runFx = async (payload) => {
  try {
    return await tasksApi.run(payload);
  } catch (error) {
    console.error("Error running task:", error);
    throw error;
  }
};

export const getLangsFx = async () => {
  try {
    return await tasksApi.getPLangs();
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};

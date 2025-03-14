import { groupsApi } from "@api";

export const createGroup = async (groupData) => {
  try {
    const response = await groupsApi.create(groupData);
    return response;
  } catch (error) {
    console.error("Error creating group:", error);
    throw error;
  }
};

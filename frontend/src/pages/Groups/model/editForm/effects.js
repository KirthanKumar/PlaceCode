import { createContext, useContext, useState } from "react";
import { groupsApi } from "@api";

const EditGroupContext = createContext();

export const useEditGroup = () => useContext(EditGroupContext);

export const EditGroupProvider = ({ children }) => {
  const [groupData, setGroupData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getGroup = async (groupId) => {
    setLoading(true);
    try {
      const data = await groupsApi.getById(groupId);
      setGroupData(data);
    } catch (error) {
      console.error("Error fetching group:", error);
    } finally {
      setLoading(false);
    }
  };

  const editGroup = async (groupId, updatedData) => {
    setLoading(true);
    try {
      await groupsApi.update(groupId, updatedData);
    } catch (error) {
      console.error("Error updating group:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EditGroupContext.Provider value={{ groupData, loading, getGroup, editGroup }}>
      {children}
    </EditGroupContext.Provider>
  );
};

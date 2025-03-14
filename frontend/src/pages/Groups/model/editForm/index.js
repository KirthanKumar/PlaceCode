import { createContext, useContext, useState, useEffect } from "react";
import { groupsApi } from "@api";
import { useEditModal } from "../editModal";
import { useGroupsTable } from "../groupsTable";
import { useNotifications } from "@model";

const EditFormContext = createContext();

export const useEditForm = () => useContext(EditFormContext);

export const EditFormProvider = ({ children }) => {
  const { closeEditModal } = useEditModal();
  const { refreshGroups } = useGroupsTable();
  const { createMessage } = useNotifications();

  const [formValues, setFormValues] = useState({ name: "" });
  const [editStatus, setEditStatus] = useState("idle");
  const [getStatus, setGetStatus] = useState("idle");

  const fieldValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getGroup = async (groupId) => {
    setGetStatus("pending");
    try {
      const data = await groupsApi.getById(groupId);
      setFormValues(data);
      setGetStatus("done");
    } catch (error) {
      setGetStatus("fail");
      console.error("Error fetching group:", error);
    }
  };

  const editGroup = async (groupId) => {
    setEditStatus("pending");
    try {
      await groupsApi.update(groupId, formValues);
      createMessage({ type: "success", text: "Group updated successfully" });
      setEditStatus("done");
      closeEditModal();
      refreshGroups();
    } catch (error) {
      setEditStatus("fail");
      createMessage({ type: "error", text: "Error updating group" });
      console.error("Error updating group:", error);
    }
  };

  useEffect(() => {
    return () => {
      // Reset form when modal closes
      setFormValues({ name: "" });
      setGetStatus("idle");
      setEditStatus("idle");
    };
  }, [closeEditModal]);

  return (
    <EditFormContext.Provider
      value={{ formValues, editStatus, getStatus, fieldValueChange, editGroup, getGroup }}
    >
      {children}
    </EditFormContext.Provider>
  );
};

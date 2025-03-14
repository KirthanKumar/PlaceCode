import { useState, useEffect, createContext, useContext } from "react";
import { Status, MessageType } from "@typings";
import { notifications } from "@model";
import { createGroupApi } from "../effects";

const AddFormContext = createContext();

export const useAddForm = () => {
  return useContext(AddFormContext);
};

export const AddFormProvider = ({ children }) => {
  const [addForm, setAddForm] = useState({ name: "" });
  const [createGroupStatus, setCreateGroupStatus] = useState(Status.Idle);

  const fieldValueChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prev) => ({ ...prev, [name]: value }));
  };

  const createGroup = async () => {
    setCreateGroupStatus(Status.Pending);
    try {
      const response = await createGroupApi(addForm);
      setCreateGroupStatus(Status.Done);
      setAddForm({ name: "" }); // Reset form after success
      notifications.createMessage({
        type: MessageType.Success,
        text: response.message,
      });
    } catch (error) {
      setCreateGroupStatus(Status.Fail);
      notifications.createMessage({
        type: MessageType.Error,
        text: error.message,
      });
    }
  };

  return (
    <AddFormContext.Provider
      value={{ addForm, createGroupStatus, fieldValueChange, createGroup }}
    >
      {children}
    </AddFormContext.Provider>
  );
};

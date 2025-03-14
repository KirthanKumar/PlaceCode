import { createContext, useContext, useState } from "react";

const EditFormContext = createContext();

export const useEditForm = () => useContext(EditFormContext);

export const EditFormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({ id: 0, name: "" });
  const [editStatus, setEditStatus] = useState("idle");
  const [getStatus, setGetStatus] = useState("pending");

  return (
    <EditFormContext.Provider
      value={{ formValues, setFormValues, editStatus, setEditStatus, getStatus, setGetStatus }}
    >
      {children}
    </EditFormContext.Provider>
  );
};

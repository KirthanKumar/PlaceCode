import { createContext, useContext, useState } from "react";

const EditFormContext = createContext();

export const useEditForm = () => useContext(EditFormContext);

export const EditFormProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({ name: "" });

  const fieldValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <EditFormContext.Provider value={{ formValues, fieldValueChange }}>
      {children}
    </EditFormContext.Provider>
  );
};

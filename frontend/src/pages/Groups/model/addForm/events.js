import { useState } from "react";

export const useAddForm = () => {
  const [formData, setFormData] = useState({ name: "" });

  const fieldValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createGroup = async (submitHandler) => {
    await submitHandler(formData);
    setFormData({ name: "" }); // Reset form after creation
  };

  return {
    formData,
    fieldValueChange,
    createGroup,
  };
};

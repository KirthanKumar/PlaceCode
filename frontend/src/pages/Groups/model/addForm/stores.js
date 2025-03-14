import { createContext, useContext, useState } from 'react';
import { Status } from '@typings';

const AddFormContext = createContext();

export const useAddForm = () => {
  return useContext(AddFormContext);
};

export const AddFormProvider = ({ children }) => {
  const [addForm, setAddForm] = useState({ name: '' });
  const [createGroupStatus, setCreateGroupStatus] = useState(Status.Idle);

  return (
    <AddFormContext.Provider value={{ addForm, setAddForm, createGroupStatus, setCreateGroupStatus }}>
      {children}
    </AddFormContext.Provider>
  );
};

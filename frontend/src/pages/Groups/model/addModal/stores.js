import { createContext, useContext, useState } from 'react';

const AddModalContext = createContext();

export const useAddModal = () => useContext(AddModalContext);

export const AddModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAddModal = () => setIsOpen(true);
  const closeAddModal = () => setIsOpen(false);

  return (
    <AddModalContext.Provider value={{ isOpen, openAddModal, closeAddModal }}>
      {children}
    </AddModalContext.Provider>
  );
};

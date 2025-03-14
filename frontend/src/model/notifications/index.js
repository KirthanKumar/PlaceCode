import { createContext, useState, useContext } from "react";
import { nanoid } from "nanoid";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const createMessage = (newMessage) => {
    if (!newMessage.text) return;

    const message = {
      key: nanoid(),
      message: newMessage.text,
      options: {
        autoHideDuration: 2500,
        disableWindowBlurListener: true,
        variant: newMessage.type,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      },
      displayed: false,
    };

    setNotifications((prev) => [...prev, message]);
  };

  const setDisplayed = (key) => {
    setNotifications((prev) =>
      prev.map((msg) => (msg.key === key ? { ...msg, displayed: true } : msg))
    );
  };

  const removeMessage = (key) => {
    setNotifications((prev) => prev.filter((msg) => msg.key !== key));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, createMessage, setDisplayed, removeMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);

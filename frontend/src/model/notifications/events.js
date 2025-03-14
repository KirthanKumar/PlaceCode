import { createContext, useState, useContext } from "react";
import { nanoid } from "nanoid";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

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

    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const setDisplayed = (key) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.key === key ? { ...msg, displayed: true } : msg
      )
    );
  };

  const removeMessage = (key) => {
    setMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.key !== key)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ messages, createMessage, setDisplayed, removeMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);

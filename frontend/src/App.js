import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { Navigation, NavLink } from "./components/Navigation";
import { AppLoader } from "./components/Loaders/AppLoader";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { getNavigationLinks, getRoutes } from "./routes";
import { auth } from "./model";

import { AuthProvider } from "./model/auth";
import { NotificationProvider } from "./model/notifications/events";

export const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    // Simulate fetching user authentication status
    const fetchUser = async () => {
      try {
        const userData = await auth.getUser(); // Replace with actual auth fetching logic
        setUser(userData);
        setIsAuth(!!userData);
      } catch (error) {
        setSnackbarMessage("Error fetching user data");
        setSnackbarOpen(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const pages = useRoutes(getRoutes(user?.role?.name));
  const links = getNavigationLinks(user?.role?.name);

  if (isLoading) {
    return <AppLoader />;
  }

  if (!isAuth) {
    return pages;
  }

  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="App">
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
          >
            <Alert severity="error">{snackbarMessage}</Alert>
          </Snackbar>
          <Header>
            <Navigation>
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  href={link.path}
                  strict={link.strict}
                  text={link.text}
                  icon={link.icon}
                />
              ))}
            </Navigation>
          </Header>
          <Layout>{pages}</Layout>
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
};

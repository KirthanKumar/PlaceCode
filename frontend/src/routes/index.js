import React from "react";
import {
  Groups,
  Login,
  Logout,
  Main,
  Tasks,
  Users,
  Works,
  Begin,
} from "../pages";
import * as Icons from "../components/Icons";

const studentRoutes = {
  "/": () => <Main.Index />,
  "/begin/:id": ({ id }) => <Begin id={id} />,
  "/login": () => <Login />,
  "/logout": () => <Logout />,
};

const studentLinks = [
  { path: "/", strict: true, text: "Главная", icon: Icons.Home },
  { path: "/logout", text: "Выйти", icon: Icons.Logout },
];

const moderatorRoutes = {
  "/": () => <Main.Index />,
  "/begin/:id": ({ id }) => <Begin id={id} />,
  "/login": () => <Login />,
  "/logout": () => <Logout />,
  "/tasks": () => <Tasks.AddTask />,
};

const moderatorLinks = [
  { path: "/", strict: true, text: "Главная", icon: Icons.Home },
  { path: "/tasks", text: "Задания", icon: Icons.Tasks },
  { path: "/logout", text: "Выйти", icon: Icons.Logout },
];

const anonymousRoutes = {
  "/login": () => <Login />,
};

const anonymousLinks = [];

const adminRoutes = {
  "/": () => <Main.Index />,
  "/login": () => <Login />,
  "/logout": () => <Logout />,
  "/groups": () => <Groups.Index />,
  "/users": () => <Users.Index />,
  "/users/add": () => <Users.AddUser />,
  "/users/edit/:id": ({ id }) => <Users.EditUser id={id} />,
  "/tasks": () => <Tasks.Index />,
  "/tasks/add": () => <Tasks.AddTask />,
  "/tasks/edit/:id": ({ id }) => <Tasks.EditTask id={id} />,
  "/tasks/preview/:id": ({ id }) => <Tasks.PreviewTask id={id} />,
  "/works": () => <Works.Index />,
  "/works/add": () => <Works.AddWork />,
  "/works/edit/:id": ({ id }) => <Works.EditWork id={id} />,
  "/works/preview/:id": ({ id }) => <Works.PreviewWork id={id} />,
};

const adminLinks = [
  { path: "/", strict: true, text: "Главная", icon: Icons.Home },
  { path: "/groups", text: "Группы", icon: Icons.Groups },
  { path: "/users", text: "Студенты", icon: Icons.Users },
  { path: "/tasks", text: "Задания", icon: Icons.Tasks },
  { path: "/works", text: "Работы", icon: Icons.Works },
  { path: "/logout", text: "Выйти", icon: Icons.Logout },
];

export const getRoutes = (role) => {
  switch (role) {
    case "Student":
      return studentRoutes;
    case "Moderator":
      return moderatorRoutes;
    case "Administrator":
      return adminRoutes;
    default:
      return anonymousRoutes;
  }
};

export const getNavigationLinks = (role) => {
  switch (role) {
    case "Student":
      return studentLinks;
    case "Moderator":
      return moderatorLinks;
    case "Administrator":
      return adminLinks;
    default:
      return anonymousLinks;
  }
};

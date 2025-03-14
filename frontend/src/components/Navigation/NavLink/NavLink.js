import React from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import styles from "./NavLink.module.css";

export const NavLink = ({ icon: Icon, text, href, strict }) => {
  const location = useLocation();
  /*
    strict = true, path = '/', href = '/' -> active
    path = '/users/add', href = '/users/' -> active
  */
  const isActive = strict
    ? location.pathname === href
    : location.pathname.startsWith(href);

  return (
    <RouterNavLink
      draggable={false}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
      to={href}
    >
      {Icon && <Icon />}
      {text}
    </RouterNavLink>
  );
};

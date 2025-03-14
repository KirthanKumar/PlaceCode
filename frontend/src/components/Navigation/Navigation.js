import React from "react";
import styles from "./Navigation.module.css";

const Item = ({ children }) => <li className={styles.item}>{children}</li>;

const List = ({ children }) => <ul className={styles.list}>{children}</ul>;

export const Navigation = ({ children }) => (
  <List>
    {React.Children.map(children, (link) => (
      <Item>{link}</Item>
    ))}
  </List>
);

import React, { useState, useEffect } from "react";
import { Select, Item } from "@components/Inputs/Select";
import { PLangId } from "@common/typings/task";
import styles from "./LangSelect.module.css";

const availableLangs = [
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "cpp", name: "C++" },
];

export const LangSelect = ({ disabled }) => {
  const [langs, setLangs] = useState(availableLangs);
  const [selected, setSelected] = useState(availableLangs[0].id);

  useEffect(() => {
    // If languages are fetched from an API, replace this with an async call
    setLangs(availableLangs);
  }, []);

  return (
    <Select
      disabled={disabled}
      className={styles.select}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      variant="standard"
    >
      {langs.map((lang) => (
        <Item key={lang.id} value={lang.id}>
          {lang.name}
        </Item>
      ))}
    </Select>
  );
};

import React, { useState } from 'react';
import styles from './Editor.module.css';

export const Editor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <textarea
      value={code}
      onChange={handleChange}
      className={styles.editor}
    />
  );
};

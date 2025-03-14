import React from 'react';
import { PlusButton as Add } from '@components/Buttons';
import styles from './TestsCounter.module.css';

export const TestsCounter = ({ count, onClick }) => (
  <div className={styles.counter}>
    <span>Тестов: {count}</span>
    <Add onClick={onClick} />
  </div>
);

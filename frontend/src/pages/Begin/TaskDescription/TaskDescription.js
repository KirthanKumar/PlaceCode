import React, { useContext } from 'react';
import { Card, Divider } from '@components';
import { Circular as Loader } from '@components/Loaders';
import { WorkspaceContext } from '../model/WorkspaceContext';
import { TestList } from './TestList';
import styles from './TaskDescription.module.css';

export const TaskDescription = () => {
  const { selectedTaskInfo, taskInfoIsLoading } = useContext(WorkspaceContext);

  return (
    <Card className={styles.taskDescription}>
      {taskInfoIsLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: selectedTaskInfo?.description ?? '' }} />
          <Divider />
          <TestList />
        </div>
      )}
    </Card>
  );
};

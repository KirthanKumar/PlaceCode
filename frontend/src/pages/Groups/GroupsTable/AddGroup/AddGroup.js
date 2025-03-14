import React, { useContext, useState } from 'react';
import { PrimaryButton as Add, SecondaryButton as Cancel } from '@components/Buttons';
import { MappedInput } from '@components/Inputs';
import { Linear } from '@components/Loaders';
import { Status } from '@typings';
import { GroupsContext } from '../../model/GroupsContext';
import styles from './AddGroup.module.css';

export const AddGroup = () => {
  const { createGroup, closeAddModal } = useContext(GroupsContext);
  const [groupName, setGroupName] = useState('');
  const [status, setStatus] = useState(Status.Idle);

  const isPending = status === Status.Pending;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(Status.Pending);
    await createGroup(groupName);
    setStatus(Status.Idle);
  };

  return (
    <div className={styles.addGroup}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <h3 className={styles.title}>Добавить группу</h3>
        <div className={styles.fields}>
          <MappedInput
            name="name"
            label="Название"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        {isPending ? (
          <div className={styles.loader}>
            <Linear />
          </div>
        ) : (
          <div className={styles.actions}>
            <Add type="submit">Добавить</Add>
            <Cancel onClick={closeAddModal}>Отменить</Cancel>
          </div>
        )}
      </form>
    </div>
  );
};

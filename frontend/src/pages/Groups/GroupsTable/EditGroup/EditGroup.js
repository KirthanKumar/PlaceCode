import React, { useContext, useState, useEffect } from 'react';
import { PrimaryButton as Save, SecondaryButton as Cancel } from '@components/Buttons';
import { MappedInput } from '@components/Inputs';
import { Linear, Circular } from '@components/Loaders';
import { Status } from '@typings';
import { GroupsContext } from '../../model/GroupsContext';
import styles from './EditGroup.module.css';

export const EditGroup = ({ groupId }) => {
  const { getGroupDetails, editGroup, closeEditModal } = useContext(GroupsContext);
  const [groupName, setGroupName] = useState('');
  const [status, setStatus] = useState({ edit: Status.Idle, load: Status.Pending });

  useEffect(() => {
    const fetchGroupDetails = async () => {
      setStatus((prev) => ({ ...prev, load: Status.Pending }));
      const groupDetails = await getGroupDetails(groupId);
      if (groupDetails) setGroupName(groupDetails.name);
      setStatus((prev) => ({ ...prev, load: Status.Idle }));
    };

    fetchGroupDetails();
  }, [groupId, getGroupDetails]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus((prev) => ({ ...prev, edit: Status.Pending }));
    await editGroup(groupId, groupName);
    setStatus((prev) => ({ ...prev, edit: Status.Idle }));
  };

  return (
    <div className={styles.editGroup}>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <h3 className={styles.title}>Редактировать группу</h3>
        <div className={styles.fields}>
          {status.load === Status.Pending && (
            <div className={styles.loadingOverlay}>
              <Circular />
              <span>Загружаем данные</span>
            </div>
          )}
          <MappedInput
            name="name"
            label="Название"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        {status.edit === Status.Pending ? (
          <div className={styles.loader}>
            <Linear />
          </div>
        ) : (
          <div className={styles.actions}>
            <Save disabled={status.load === Status.Pending} type="submit">
              Сохранить
            </Save>
            <Cancel onClick={closeEditModal}>Отмена</Cancel>
          </div>
        )}
      </form>
    </div>
  );
};

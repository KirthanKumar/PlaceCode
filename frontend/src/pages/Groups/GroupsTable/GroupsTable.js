import React, { useContext } from 'react';
import * as T from '@components/Table';
import {
  PrimaryButton as Add,
  EditButton as Edit,
  DeleteButton as Delete,
} from '@components/Buttons';
import { Modal } from '@components';
import { GroupsContext } from '../model/GroupsContext';
import { AddGroup } from './AddGroup';
import { EditGroup } from './EditGroup';
import { DeleteGroup } from './DeleteGroup';
import styles from './GroupsTable.module.css';

export const GroupsTable = ({ groups = [] }) => {
  const {
    addGroupModalOpen,
    editGroupModalOpen,
    openAddModal,
    closeAddModal,
    openEditModal,
    closeEditModal,
    selectForEdit,
    selectForDelete,
  } = useContext(GroupsContext);

  const groupsIsEmpty = groups.length === 0;

  return (
    <T.Table className={styles.table}>
      <Modal open={addGroupModalOpen} onClose={closeAddModal}>
        <AddGroup />
      </Modal>
      <Modal open={editGroupModalOpen} onClose={closeEditModal}>
        <EditGroup />
      </Modal>
      <DeleteGroup />
      <T.Head className={styles.head}>
        <T.Row>
          <T.Cell colSpan={3}>
            <T.Header>
              <T.Title>Groups</T.Title>
              <T.Actions>
                <Add onClick={openAddModal}>Add</Add>
              </T.Actions>
            </T.Header>
          </T.Cell>
        </T.Row>
        <T.Row>
          <T.Cell>No.</T.Cell>
          <T.Cell>Name</T.Cell>
          <T.Cell>Actions</T.Cell>
        </T.Row>
      </T.Head>
      <T.Body>
        {groupsIsEmpty ? (
          <T.Row>
            <T.Cell colSpan={3}>The list of groups is still empty</T.Cell>
          </T.Row>
        ) : (
          groups.map((group, index) => (
            <T.Row key={group.id} className={styles.row}>
              <T.Cell>{index + 1}</T.Cell>
              <T.Cell>{group.name}</T.Cell>
              <T.Cell>
                <div className={styles.rowActions}>
                  <Edit onClick={() => selectForEdit(group.id)} />
                  <Delete onClick={() => selectForDelete(group.id)} />
                </div>
              </T.Cell>
            </T.Row>
          ))
        )}
      </T.Body>
    </T.Table>
  );
};

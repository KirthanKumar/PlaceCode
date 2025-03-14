import React, { useContext } from "react";
import { ConfirmationDialog } from "@components/ConfirmationDialog";
import { GroupsContext } from "../model/GroupsContext";

export const DeleteGroup = () => {
  const { selectedForDelete, deleteDialogIsOpen, confirmDelete, cancelDelete } =
    useContext(GroupsContext);

  return (
    <ConfirmationDialog
      open={deleteDialogIsOpen}
      onConfirm={confirmDelete}
      onCancel={cancelDelete}
      title="Удалить группу"
      confirmText="Удалить"
    >
      <p>
        You are sure that you want to delete the group {selectedForDelete?.name}
        ?
      </p>
      <p>All students of this group will also be removed</p>
    </ConfirmationDialog>
  );
};

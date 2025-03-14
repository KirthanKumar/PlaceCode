import { createStore, createEvent } from 'effector';

export const $editModal = createStore({ open: false });

const openEditModal = createEvent();
const closeEditModal = createEvent();

$editModal.on(openEditModal, () => ({ open: true }));
$editModal.reset(closeEditModal);

export const editModal = {
  $editModal,
  openEditModal,
  closeEditModal,
};

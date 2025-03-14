import { createEvent } from "effector";

export const refreshGroups = createEvent();

export const selectForDelete = createEvent();
export const selectForEdit = createEvent();
export const confirmDelete = createEvent();
export const cancelDelete = createEvent();
export const groupDeleted = createEvent();

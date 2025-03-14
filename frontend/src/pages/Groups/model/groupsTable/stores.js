import { createStore } from "effector";
import { Status } from "@typings";

const groups = [];

export const $groups = createStore(groups);

export const $getGroupsStatus = createStore(Status.Pending);

export const $selectedForDelete = createStore(null);
export const $deleteDialogIsOpen = $selectedForDelete.map(Boolean);

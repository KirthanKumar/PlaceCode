import React, { useEffect } from "react";
import { useStore } from "effector-react";
import { PageLoader, PageError } from "@components/Loaders";
import { GroupsTable } from "./GroupsTable";
import { groupsTable, GroupsPage } from "./model";

export const Groups = () => {
  useEffect(GroupsPage.onMount, []);

  const groups = useStore(groupsTable.$groups);
  const groupsStatus = useStore(groupsTable.$getGroupsStatus);

  const isLoading = groupsStatus === "Pending";
  const isFail = groupsStatus === "Fail";

  if (isLoading) {
    return <PageLoader />;
  }

  if (isFail) {
    return <PageError />;
  }

  return <GroupsTable groups={groups} />;
};

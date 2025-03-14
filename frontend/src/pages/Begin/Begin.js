import React, { useEffect, useContext } from "react";
import { Paper } from "../../components";
import { PageError, PageLoader } from "../../components/Loaders";
import { WorkspaceContext } from "@pages/Begin/model/WorkspaceContext";
import { TaskDescription } from "./TaskDescription";
import { TaskList } from "./TaskList";
import { CodeEditor } from "./CodeEditor";
import styles from "./Begin.module.css";

export const Begin = ({ id }) => {
  const { isLoading, isFail, onMount } = useContext(WorkspaceContext);

  useEffect(() => {
    onMount(id);
  }, [id, onMount]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (isFail) {
    return <PageError />;
  }

  return (
    <div className={styles.wrap}>
      <Paper className={styles.beginPage}>
        <TaskList />
        <TaskDescription />
        <CodeEditor />
      </Paper>
    </div>
  );
};

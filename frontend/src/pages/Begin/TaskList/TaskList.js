import React, { useContext } from "react";
import { Card } from "@components";
import { List, ListItem, ListItemButton } from "@mui/material";
import { WorkspaceContext } from "../model/WorkspaceContext";
import styles from "./TaskList.module.css";

export const TaskList = () => {
  const { tasks, selectedId, runPending, taskChanged } =
    useContext(WorkspaceContext);

  return (
    <Card className={styles.taskList}>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={task.id} disablePadding>
            <ListItemButton
              onClick={() => taskChanged(task.id)}
              disabled={runPending}
              selected={task.id === selectedId}
            >
              {index + 1}. {task.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

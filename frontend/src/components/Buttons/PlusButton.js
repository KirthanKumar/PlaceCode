import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Plus } from "../Icons";

export const PlusButton = (props) => (
  <Tooltip title={props.prompt || "Добавить"}>
    <IconButton {...props} size="small">
      <Plus />
    </IconButton>
  </Tooltip>
);

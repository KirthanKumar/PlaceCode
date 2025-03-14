import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Preview } from "../Icons";

export const PreviewButton = (props) => (
  <Tooltip title={props.prompt || "Просмотреть"}>
    <IconButton onClick={props.onClick} size="small">
      <Preview />
    </IconButton>
  </Tooltip>
);

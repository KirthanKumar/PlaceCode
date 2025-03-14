import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";

export const DeleteButton = ({ prompt, ...props }) => (
  <Tooltip title={prompt || "Delete"}>
    <IconButton {...props} size="small">
      <DeleteIcon />
    </IconButton>
  </Tooltip>
);

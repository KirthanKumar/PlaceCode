import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/EditOutlined";

export const EditButton = ({ onClick, prompt }) => (
  <Tooltip title={prompt || "Edit"}>
    <IconButton onClick={onClick} size="small">
      <EditIcon />
    </IconButton>
  </Tooltip>
);

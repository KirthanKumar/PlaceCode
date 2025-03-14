import React from "react";
import { IconButton } from "@mui/material";
import { Minus } from "../Icons";

export const MinusButton = (props) => (
  <IconButton {...props} size="small">
    <Minus />
  </IconButton>
);

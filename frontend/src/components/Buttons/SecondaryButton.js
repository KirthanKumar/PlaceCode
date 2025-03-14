import React from "react";
import { Button } from "@mui/material";

export const SecondaryButton = ({ onClick, children, disabled }) => {
  return (
    <Button
      disabled={disabled}
      variant="outlined"
      color="secondary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

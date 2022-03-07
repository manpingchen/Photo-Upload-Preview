import React from "react";
import { Popover } from "@mui/material";

const SimpleDialog = (props) => {
  const {
    children,
    id,
    onClose,
    anchorEl,
    anchorOrigin = { vertical: "bottom", horizontal: "center" },
  } = props;

  return (
    <Popover
      id={id}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      className="simple-non-title-popover"
      {...props}
    >
      {children}
    </Popover>
  );
};

export default SimpleDialog;

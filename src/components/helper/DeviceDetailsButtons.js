import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const DeviceDetailsButtons = (props) => {
  const [btnColor, setButtonColor] = useState(true);

  const id = props.id;

  const onEditClickHandler = () => {
    props.onEdit(id);
  };
  const onDeleteClickHandler = () => {
    props.onDelete(id);
  };

  const onPowerOnClickHandler = () => {
    setButtonColor((prevColor) => !prevColor);
  };

  return (
    <div>
      <IconButton
        onClick={onPowerOnClickHandler}
        style={{ marginLeft: "20%" }}
        color={btnColor ? "success" : "error"}
        aria-label="edit"
      >
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton
        onClick={onEditClickHandler}
        style={{ marginLeft: "20%" }}
        color="primary"
        aria-label="edit"
      >
        <BuildIcon />
      </IconButton>
      <IconButton
        onClick={onDeleteClickHandler}
        style={{ marginLeft: "20%" }}
        className="btn"
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeviceDetailsButtons;

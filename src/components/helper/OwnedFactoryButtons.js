import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import DeleteIcon from "@mui/icons-material/Delete";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const OwnedFactoryButtons = (props) => {
  const [btnColor, setButtonColor] = useState(true);

  const id = props.id;

  const onConfigClickHandler = () => {
    props.onConfig(id);
  };

  const onPowerOnClickHandler = () => {
    setButtonColor((prevColor) => !prevColor);
  };

  const onEditClickHandler = () => {
    props.onEdit(id);
  };
  const onDeleteClickHandler = () => {
    props.onDelete(id);
  };

  return (
    <div>
      <IconButton
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onClick={onPowerOnClickHandler}
        color={btnColor ? "success" : "error"}
        aria-label="edit"
      >
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton
        style={{ marginLeft: "5%" }}
        color="primary"
        aria-label="edit"
        onClick={onEditClickHandler}
      >
        <BuildIcon />
      </IconButton>
      <IconButton
        style={{ marginLeft: "5%" }}
        onClick={onDeleteClickHandler}
        className="btn"
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        style={{ float: "right" }}
        onClick={onConfigClickHandler}
        color="primary"
        aria-label="edit"
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
};

export default OwnedFactoryButtons;

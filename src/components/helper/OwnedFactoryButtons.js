import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import DeleteIcon from "@mui/icons-material/Delete";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Stack from "@mui/material/Stack";

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
    <Stack spacing={2} direction="row">
      <IconButton
        onClick={onPowerOnClickHandler}
        color={btnColor ? "success" : "error"}
        aria-label="edit"
      >
        <PowerSettingsNewIcon />
      </IconButton>
      <IconButton
        {...props.state}
        color="primary"
        aria-label="edit"
        onClick={onEditClickHandler}
      >
        <BuildIcon />
      </IconButton>
      <IconButton
        {...props.state}
        onClick={onDeleteClickHandler}
        className="btn"
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        onClick={onConfigClickHandler}
        color="primary"
        aria-label="edit"
      >
        <SettingsIcon />
      </IconButton>
    </Stack>
  );
};

export default OwnedFactoryButtons;

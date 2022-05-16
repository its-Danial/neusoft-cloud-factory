import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const ToggleConfigButtons = (props) => {
  const [btnColor, setButtonColor] = useState(true);

  const id = props.id;

  const onConfigClickHandler = () => {
    props.onConfig(id);
  };

  const onPowerOnClickHandler = () => {
    setButtonColor((prevColor) => !prevColor);
  };

  return (
    <div>
      <IconButton
        onClick={onPowerOnClickHandler}
        style={{ marginRight: "50px" }}
        color={btnColor ? "success" : "error"}
        aria-label="edit"
      >
        <PowerSettingsNewIcon />
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

export default ToggleConfigButtons;

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

const PowerButton = (props) => {
  const id = props.id;
  const [btnColor, setButtonColor] = useState(true);

  const onPowerOnClickHandler = () => {
    setButtonColor((prevColor) => !prevColor);
    props.onChangeColor(id);
  };

  return (
    <IconButton
      onClick={onPowerOnClickHandler}
      color={btnColor ? "error" : "success"}
      aria-label="Power On/Off"
    >
      <PowerSettingsNewIcon />
    </IconButton>
  );
};

export default PowerButton;

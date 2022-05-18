import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";

import PowerButton from "./PowerButton";
import Stack from "@mui/material/Stack";

const DeviceDetailsButtons = (props) => {
  const id = props.id;

  const onEditClickHandler = () => {
    props.onEdit(id);
  };
  const onDeleteClickHandler = () => {
    props.onDelete(id);
  };

  return (
    <Stack spacing={2} direction="row">
      <PowerButton onChangeColor={props.onTurnOff} id={id} />
      <IconButton
        onClick={onEditClickHandler}
        color="primary"
        aria-label="edit"
      >
        <BuildIcon />
      </IconButton>
      <IconButton
        onClick={onDeleteClickHandler}
        className="btn"
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default DeviceDetailsButtons;

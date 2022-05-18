import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import DeleteIcon from "@mui/icons-material/Delete";
import PowerButton from "./PowerButton";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

const OwnedFactoryButtons = (props) => {
  const dispatch = useDispatch();

  const id = props.id;

  const onConfigClickHandler = () => {
    props.onConfig(id);
    dispatch(modalActions.open());
  };

  const onEditClickHandler = () => {
    props.onEdit(id);
    dispatch(modalActions.open());
  };
  const onDeleteClickHandler = () => {
    props.onDelete(id);
  };

  return (
    <Stack spacing={2} direction="row">
      <PowerButton onChangeColor={props.onTurnOff} id={id} />
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
        aria-label="Configure"
      >
        <SettingsIcon />
      </IconButton>
    </Stack>
  );
};

export default OwnedFactoryButtons;

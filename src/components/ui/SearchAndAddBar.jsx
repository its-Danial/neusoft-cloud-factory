import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

const SearchAndAddBar = (props) => {
  const dispatch = useDispatch();

  const onAddClickHandler = () => {
    dispatch(modalActions.open());
    props.showRentDeviceForm(false);
  };
  const onRentDeviceHandler = () => {
    dispatch(modalActions.open());
    props.showRentDeviceForm(true);
  };

  //for searching

  const onSearchChangeHandler = (event) => {
    props.onEnterText(event.target.value);
  };

  return (
    <>
      {!props.dontShowAdd && (
        <Button
          onClick={onAddClickHandler}
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          aria-label="add new entry button"
          title="Add new entry button"
        >
          Add
        </Button>
      )}
      {props.showRent && (
        <Button
          aria-label="rent a device button"
          title="Rent a device button"
          onClick={onRentDeviceHandler}
          color="success"
          style={{ marginLeft: "20px" }}
          variant="contained"
        >
          Rent Device
        </Button>
      )}
      <TextField
        // style={{ marginLeft: "10px", marginBottom: "10px" }}
        style={{ float: "right", margin: "5px" }}
        size="small"
        id="outlined-basic"
        label="Search Field"
        variant="outlined"
        onChange={onSearchChangeHandler}
      />
    </>
  );
};

export default SearchAndAddBar;

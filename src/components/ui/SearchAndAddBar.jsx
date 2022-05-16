import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

const SearchAndAddBar = (props) => {
  const dispatch = useDispatch();

  const onAddClickHandler = () => dispatch(modalActions.open());

  //for searching

  const onSearchChangeHandler = (event) => {
    props.onEnterText(event.target.value);
  };

  return (
    <>
      <Button
        onClick={onAddClickHandler}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
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

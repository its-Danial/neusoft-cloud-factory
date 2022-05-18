import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

import DeviceConfigFormList from "../ui/DeviceConfigFormList";

import ModalForm from "../ui/ModalForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const inputList = [1, 2, 3];

const DevicesConfigForm = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalActions.close());
    props.showRentDeviceForm(false);
    props.showConfigForm(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data.get("name"));
    const value = data.get("name");
    props.getValue(value);
    props.getEditValues(value);
  };
  return (
    <ModalForm>
      <form onSubmit={onSubmitHandler}>
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            size="large"
            style={{ float: "right" }}
            aria-label="cancel"
            color="error"
          >
            <CloseIcon />
          </IconButton>
          <Container>
            <Typography
              sx={{ mt: 5, mb: 3 }}
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              {/* Device Category Form */}
              Hitachi L-300 - ID: 91741
            </Typography>
            <Button
              variant="contained"
              color="success"
              disableElevation
              startIcon={<AddIcon />}
              aria-label="add new entry button"
              title="Add new entry button"
            >
              Add Product
            </Button>
            {inputList.map((item) => {
              return <DeviceConfigFormList />;
            })}

            <DeviceConfigFormList />
            <Button
              style={{ float: "right", marginTop: "15px" }}
              variant="contained"
              color="success"
              type="submit"
            >
              Save
            </Button>
          </Container>
        </Box>
      </form>
    </ModalForm>
  );
};

export default DevicesConfigForm;

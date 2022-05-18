import React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";
import RentDeviceTable from "../manufacturer/RentDeviceTable";

import ModalForm from "../ui/ModalForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 475,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RentDeviceForm = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalActions.close());
    props.showRentDeviceForm(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data.get("name"));
    const value = data.get("name");
    props.getValue(value);
    props.getEditValues(value);
    props.showRentDeviceForm(false);
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
            <RentDeviceTable />

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

export default RentDeviceForm;

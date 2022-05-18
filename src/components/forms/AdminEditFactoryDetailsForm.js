import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

import ModalForm from "../ui/ModalForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdminEditFactoryDetailsForm = (props) => {
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const values = {
      userName: data.get("userName"),
      fullName: data.get("fullName"),
      contactInfo: data.get("contactInfo"),
      role: data.get("role"),
    };

    props.getValues(values);
  };

  const handleClose = () => dispatch(modalActions.close());
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

          <Typography
            sx={{ mt: 5 }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {/* Device Form */}
            Edit User
          </Typography>

          <Typography sx={{ mt: 6 }}>
            User Name
            <TextField
              style={{ float: "right", marginLeft: "45px" }}
              size="small"
              id="userName"
              name="userName"
              label="Filled"
              variant="filled"
            />
          </Typography>
          <Typography sx={{ mt: 6 }}>
            Full Name
            <TextField
              style={{ float: "right", marginLeft: "45px" }}
              size="small"
              id="fullName"
              name="fullName"
              label="Filled"
              variant="filled"
            />
          </Typography>
          <Typography sx={{ mt: 6 }}>
            Contact Info
            <TextField
              style={{ float: "right", marginLeft: "45px" }}
              size="small"
              id="contactInfo"
              name="contactInfo"
              label="Filled"
              variant="filled"
            />
          </Typography>
          <Typography sx={{ mt: 6 }}>
            Role
            <TextField
              style={{ float: "right", marginLeft: "45px" }}
              size="small"
              id="role"
              name="role"
              label="Filled"
              variant="filled"
            />
          </Typography>
          <Typography sx={{ mt: 6 }}>
            <Button
              type="submit"
              style={{ float: "right" }}
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </Typography>
        </Box>
      </form>
    </ModalForm>
  );
};

export default AdminEditFactoryDetailsForm;

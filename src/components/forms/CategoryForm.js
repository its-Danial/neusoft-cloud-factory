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
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CategoryForm = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(modalActions.close());

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data.get("name"));
    const value = data.get("name");
    props.getValue(value);
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

          <Typography
            sx={{ mt: 5 }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {/* Device Category Form */}
            {props.title}
          </Typography>
          <Typography variant="h6" sx={{ mt: 5 }}>
            Category Name
            {/* {props.categoryName} */}
            <TextField
              style={{ marginLeft: "15px" }}
              size="small"
              id="name"
              name="name"
              label="Name"
              variant="filled"
            />
          </Typography>
          <Button
            style={{ float: "right", marginTop: "25%" }}
            variant="contained"
            color="success"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </form>
    </ModalForm>
  );
};

export default CategoryForm;

import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";
import MenuItem from "@mui/material/MenuItem";

import ModalForm from "../ui/ModalForm";

const currencies = [
  {
    value: "Category 1",
    label: "Category 1",
  },
  {
    value: "Category 2",
    label: "Category 2",
  },
  {
    value: "Category 3",
    label: "Category 3",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 620,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DetailsForm = (props) => {
  const [category, setCategory] = React.useState("Category 1");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const values = {
      name: data.get("name"),
      category: category,
      specification: data.get("specifications"),
      description: data.get("description"),
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
            {props.title} Details Form
          </Typography>
          <Typography
            style={{ float: "right", width: "45%", marginRight: "30px" }}
            sx={{ mt: 6 }}
          >
            {props.title} Description
            <Typography sx={{ mt: 2 }}>
              <TextField
                id="description"
                name="description"
                fullWidth
                variant="filled"
                placeholder={`Please Fill In ${props.title} Description`}
                multiline
                rows={4}
                maxRows={5}
              />
            </Typography>
          </Typography>
          <Typography style={{ width: "50%" }} sx={{ mt: 6 }}>
            {props.title} Name
            <TextField
              style={{ marginLeft: "45px" }}
              size="small"
              id="name"
              name="name"
              label="Filled"
              variant="filled"
            />
          </Typography>

          <Typography style={{ width: "50%" }} sx={{ mt: 6 }}>
            {props.title} Category
            <TextField
              style={{ marginLeft: "15px" }}
              size="small"
              select
              label="Select"
              id="category"
              name="category"
              value={category}
              onChange={handleChange}
              helperText="Please Select A category"
              variant="filled"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Typography>
          <Typography style={{ width: "45%" }} sx={{ mt: 6 }}>
            {props.title} Specifications
            <Typography sx={{ mt: 2 }}>
              <TextField
                fullWidth
                id="specifications"
                name="specifications"
                variant="filled"
                placeholder={`Please Fill In ${props.title} Specifications`}
                multiline
                rows={4}
                maxRows={5}
              />
            </Typography>
          </Typography>

          <Button
            type="submit"
            style={{ float: "right" }}
            variant="contained"
            color="success"
          >
            Save
          </Button>
        </Box>
      </form>
    </ModalForm>
  );
};

export default DetailsForm;

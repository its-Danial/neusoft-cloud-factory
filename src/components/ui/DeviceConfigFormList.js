import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const DeviceConfigFormList = () => {
  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6" sx={{ mt: 2 }}>
        Product Name
        {/* {props.categoryName} */}
        <TextField
          style={{ marginLeft: "15px", marginRight: "15px" }}
          size="small"
          id="name"
          name="name"
          label="Name"
          variant="filled"
        />
        Product Capacity
        {/* {props.categoryName} */}
        <TextField
          style={{ marginLeft: "15px" }}
          size="small"
          id="name"
          name="name"
          label="e.g 8 per hour"
          variant="filled"
        />
      </Typography>
      <IconButton
        className="btn"
        color="error"
        title="Delete Entry"
        aria-label="Delete Entry"
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default DeviceConfigFormList;

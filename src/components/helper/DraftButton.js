import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import Stack from "@mui/material/Stack";

const DraftButton = () => {
  return (
    <Stack spacing={1} direction="row">
      <IconButton color="success" aria-label="edit">
        <SaveIcon />
      </IconButton>
      <IconButton color="primary" aria-label="edit">
        <BuildIcon />
      </IconButton>
      <IconButton className="btn" color="error" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default DraftButton;

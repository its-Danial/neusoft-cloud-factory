import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";

const EditDeleteButtons = (props) => {
  const id = props.id;

  const onEditClickHandler = () => {
    props.onEdit(id);
  };
  const onDeleteClickHandler = () => {
    props.onDelete(id);
  };

  return (
    <>
      <IconButton
        style={{ marginRight: "50px" }}
        color="primary"
        aria-label="edit"
        onClick={onEditClickHandler}
      >
        <BuildIcon />
      </IconButton>
      <IconButton
        onClick={onDeleteClickHandler}
        className="btn"
        color="error"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default EditDeleteButtons;

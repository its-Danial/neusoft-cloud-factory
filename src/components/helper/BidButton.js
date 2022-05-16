import Button from "@mui/material/Button";

const BidButton = (props) => {
  return (
    <Button
      {...props.state}
      disableElevation
      color="success"
      variant="contained"
    >
      Bid
    </Button>
  );
};

export default BidButton;

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BidButtonWithStyle = styled(Button)({
  textTransform: "none",
  lineHeight: 1.25,
});

const BidButton = (props) => {
  return (
    <BidButtonWithStyle
      {...props.state}
      disableElevation
      color="success"
      variant="contained"
    >
      {props.text}
    </BidButtonWithStyle>
  );
};

export default BidButton;

import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

const BidButtonWithStyle = styled(Button)({
  textTransform: "none",
  lineHeight: 1.25,
});

const BidButton = (props) => {
  const dispatch = useDispatch();

  const [style, setStyle] = useState(false);

  const onClickHandler = (e) => {
    setStyle(true);
    dispatch(modalActions.open());
    props.showBid(true);
  };

  return (
    <BidButtonWithStyle
      disabled={props.disabled || style ? true : false}
      disableElevation
      color="success"
      variant="contained"
      onClick={onClickHandler}
    >
      {props.text}
    </BidButtonWithStyle>
  );
};

export default BidButton;

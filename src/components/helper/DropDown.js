import { useSelector, useDispatch } from "react-redux";
import { sideDrawerStateActions } from "../../store/sideDrawerStateSlice";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../ui/StylesDrawerArrowButton";

export default function DropDown(props) {
  const panelName = props.panelName;

  const expanded = useSelector((state) => state.sideDrawerState.show);

  const dispatch = useDispatch();

  const handleChange = (panel) => (event, newExpanded) => {
    dispatch(sideDrawerStateActions.close(newExpanded ? panel : false));
  };

  return (
    <>
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary>{props.icon}</AccordionSummary>
        <AccordionDetails>{props.button1}</AccordionDetails>
        <AccordionDetails>{props.button2}</AccordionDetails>
      </Accordion>
    </>
  );
}

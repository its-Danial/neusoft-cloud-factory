import React from "react";
import { NavLink } from "react-router-dom";

const NavTo = (props) => {
  return (
    <NavLink
      to={props.to}
      activeStyle={{ color: "blue" }}
      style={{ textDecoration: "none", color: "#808080" }}
    >
      {props.children}
    </NavLink>
  );
};

export default NavTo;

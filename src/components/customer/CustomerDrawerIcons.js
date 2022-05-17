import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import NavTo from "../helper/NavTo";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavRedirect = () => {
  return (
    <NavTo to="/dashboard/customer/order-management">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Order Management" />
      </ListItemButton>
    </NavTo>
  );
};

export default NavRedirect;

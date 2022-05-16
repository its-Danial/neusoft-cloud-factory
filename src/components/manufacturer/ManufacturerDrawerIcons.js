import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import NavTo from "../helper/NavTo";

import { useDispatch } from "react-redux";
import { manufacturerDisplayActions } from "../../store/manufacturerDisplaySlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavRedirect = () => {
  const dispatch = useDispatch();
  // User Management
  const displayMyFactoryHandler = (event) => {
    dispatch(manufacturerDisplayActions.myFactoryDisplay());
  };
  // Factory Details
  const displayOrderManagementHandler = (event) => {
    dispatch(manufacturerDisplayActions.orderManagementDisplay());
  };

  return (
    <React.Fragment>
      {/* ----------------- */}
      <NavTo to="/dashboard/manufacturer/my-factory">
        <ListItemButton onClick={displayMyFactoryHandler}>
          <ListItemIcon>
            <SettingsSuggestIcon />
          </ListItemIcon>
          <ListItemText primary="My Factory" />
        </ListItemButton>
      </NavTo>
      {/* ----------------- */}
      <NavTo to="/dashboard/manufacturer/order-management">
        <ListItemButton onClick={displayOrderManagementHandler}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Order Management" />
        </ListItemButton>
      </NavTo>
    </React.Fragment>
  );
};

export default NavRedirect;

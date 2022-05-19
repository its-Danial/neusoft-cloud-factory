import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";

import NavTo from "../helper/NavTo";

import { useDispatch } from "react-redux";
import { adminDisplayActions } from "../../store/adminDisplaySlice";

import DropDown from "../helper/DropDown";

const NavRedirect = () => {
  const dispatch = useDispatch();
  // User Management
  const displayUserManagementHandler = (event) => {
    dispatch(adminDisplayActions.userManagementDisplay());
  };
  // Factory Details
  const displayFactoryDetailsHandler = (event) => {
    dispatch(adminDisplayActions.factoryDetailsDisplay());
  };
  // Product Category
  const displayProductCategoryHandler = (event) => {
    dispatch(adminDisplayActions.productCategoryDisplay());
  };
  //Product Details
  const displayProductDetailsHandler = (event) => {
    dispatch(adminDisplayActions.productDetailsDisplay());
  };
  //Capacity Center Device Category
  const displayDeviceCategoryHandler = (event) => {
    dispatch(adminDisplayActions.deviceCategoryDisplay());
  };

  //Capacity Center Device Detail
  const displayDeviceDetailsHandler = (event) => {
    dispatch(adminDisplayActions.deviceDetailsDisplay());
  };

  //Display Summary Handler
  const displaySummaryHandler = (event) => {
    dispatch(adminDisplayActions.summaryDisplay());
  };

  return (
    <React.Fragment>
      {/* ----------------- */}
      <NavTo to="/dashboard/admin/summary">
        <ListItemButton onClick={displaySummaryHandler}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </NavTo>
      {/* ----------------- */}
      <NavTo to="/dashboard/admin/user-management">
        <ListItemButton onClick={displayUserManagementHandler}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItemButton>
      </NavTo>
      {/* ----------------- */}
      <NavTo to="/dashboard/admin/factory-details">
        <ListItemButton onClick={displayFactoryDetailsHandler}>
          <ListItemIcon>
            <SettingsSuggestIcon />
          </ListItemIcon>
          <ListItemText primary="Factory Details" />
        </ListItemButton>
      </NavTo>

      {/* ----------------- */}

      <ListItemButton>
        <DropDown
          panelName={"panel1"}
          icon={
            <>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Product" />
            </>
          }
          button1={
            <NavTo to="/dashboard/admin/product-management/product-category">
              <strong onClick={displayProductCategoryHandler}>
                Product Category
              </strong>
            </NavTo>
          }
          button2={
            <NavTo to="/dashboard/admin/product-management/product-Details">
              <strong onClick={displayProductDetailsHandler}>
                Product Details
              </strong>
            </NavTo>
          }
        />
      </ListItemButton>
      {/* ----------------- */}

      <ListItemButton>
        <DropDown
          panelName={"panel2"}
          icon={
            <>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Capacity Center" />
            </>
          }
          button1={
            <NavTo to="/dashboard/admin/capacity-center/device-category">
              <strong onClick={displayDeviceCategoryHandler}>
                Device Category
              </strong>
            </NavTo>
          }
          button2={
            <NavTo to="/dashboard/admin/capacity-center/device-details">
              <strong onClick={displayDeviceDetailsHandler}>
                Device Details
              </strong>
            </NavTo>
          }
        />
      </ListItemButton>

      {/* ----------------- */}
    </React.Fragment>
  );
};

export default NavRedirect;

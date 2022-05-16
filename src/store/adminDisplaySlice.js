import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayContent: "User Management",
};

export const adminDisplaySlice = createSlice({
  name: "adminDisplaySlice",
  initialState,
  reducers: {
    userManagementDisplay: (state) => {
      state.displayContent = "User Management";
    },
    factoryDetailsDisplay: (state) => {
      state.displayContent = "Factory Detail";
    },
    productCategoryDisplay: (state) => {
      state.displayContent = "Product Management - Product Category";
    },
    productDetailsDisplay: (state) => {
      state.displayContent = "Product Management - Product Details";
    },
    deviceCategoryDisplay: (state) => {
      state.displayContent = "Capacity Center - Device Category";
    },
    deviceDetailsDisplay: (state) => {
      state.displayContent = "Capacity Center - Device Details";
    },
  },
});

export const adminDisplayActions = adminDisplaySlice.actions;

export default adminDisplaySlice.reducer;

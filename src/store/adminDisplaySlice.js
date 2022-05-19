import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayContent: "Summary",
};

export const adminDisplaySlice = createSlice({
  name: "adminDisplaySlice",
  initialState,
  reducers: {
    userManagementDisplay: (state) => {
      state.displayContent = "User Management";
    },
    summaryDisplay: (state) => {
      state.displayContent = "Summary";
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayContent: "My Factory",
};

export const manufacturerDisplaySlice = createSlice({
  name: "manufacturerDisplaySlice",
  initialState,
  reducers: {
    myFactoryDisplay: (state) => {
      state.displayContent = "My Factory";
    },
    orderManagementDisplay: (state) => {
      state.displayContent = "Order Management";
    },
  },
});

export const manufacturerDisplayActions = manufacturerDisplaySlice.actions;

export default manufacturerDisplaySlice.reducer;

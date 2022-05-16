import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expanded: "panel1",
};

export const sideDrawerStateSlice = createSlice({
  name: "sideDrawerStateSlice",
  initialState,
  reducers: {
    close: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const sideDrawerStateActions = sideDrawerStateSlice.actions;

export default sideDrawerStateSlice.reducer;

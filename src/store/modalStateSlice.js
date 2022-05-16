import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const modalStateSlice = createSlice({
  name: "modalStateSlice",
  initialState,
  reducers: {
    close: (state) => {
      state.show = false;
    },
    open: (state) => {
      state.show = true;
    },
  },
});

export const modalActions = modalStateSlice.actions;

export default modalStateSlice.reducer;

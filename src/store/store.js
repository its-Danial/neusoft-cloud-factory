import { configureStore } from "@reduxjs/toolkit";
import adminDisplayReducer from "./adminDisplaySlice";
import sideDrawerStateReducer from "./sideDrawerStateSlice";
import modalStateSliceReducer from "./modalStateSlice";
import accountSliceReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    adminDisplay: adminDisplayReducer,
    sideDrawerState: sideDrawerStateReducer,
    modalState: modalStateSliceReducer,
    userAccountState: accountSliceReducer,
  },
});

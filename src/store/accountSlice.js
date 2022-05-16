import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      email: "admin",
      password: "admin123",
      id: 69,
      fullName: "Administrator",
      contactInfo: "admin contact",
      role: "administrator",
      logInStatus: false,
    },
    {
      email: "manager1",
      password: "manage123",
      id: 70,
      fullName: "Manager",
      contactInfo: "Manager contact",
      role: "manager",
      logInStatus: false,
    },
    {
      email: "customer1",
      password: "customer123",
      id: 71,
      fullName: "Customer",
      contactInfo: "Customer contact",
      role: "customer",
      logInStatus: false,
    },
  ],
};

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    logIn: (state, action) => {
      ///this needs to be users.loginStatus
      state.logInStatus = true;
    },
    logOut: (state, action) => {
      ///this needs to be users.loginStatus
      state.logInStatus = false;
    },
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const accountSliceActions = accountSlice.actions;

export default accountSlice.reducer;

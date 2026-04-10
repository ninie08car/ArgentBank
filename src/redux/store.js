import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import logoutSlice from "./slices/logoutSlice";

const store = configureStore({
  reducer: { login: loginSlice, logout: logoutSlice },
});

export default store;

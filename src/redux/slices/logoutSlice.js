import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logout",
  initialState: { token: null },
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token;
    },
    logoutReducer: (state) => {
      state.token = null;
    },
  },
});

export default logoutSlice.reducer;
export const { loginReducer, logoutReducer } = logoutSlice.actions;

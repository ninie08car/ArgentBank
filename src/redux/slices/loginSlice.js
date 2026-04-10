import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { token: null, user: null },
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logoutReducer: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export default loginSlice.reducer;
export const { loginReducer, logoutReducer } = loginSlice.actions;

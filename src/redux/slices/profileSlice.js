import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
  },
  reducers: {
    updateUsername: (state, action) => {
      state.userName = action.payload;
    },
    setProfile: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    clearProfile: (state) => {
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { updateUsername, setProfile, clearProfile } =
  profileSlice.actions;

export default profileSlice.reducer;

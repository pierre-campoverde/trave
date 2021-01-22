import { createSlice } from "@reduxjs/toolkit";
import * as authFunctions from "./UserAuthFuntions/authFunctions";
import toast from "react-hot-toast";
const initialState = {
  data: { userData: {} },
  status: "idle",
  error: null,
  errorCode: "",
  userLoggedIn: null,
};
const myUserSlice = createSlice({
  name: "myUser",
  initialState,
  reducers: {},
  extraReducers: {
    //!AUTH METHODS
    //*GETTING USER STATUS
    [authFunctions.getUserStatus.pending]: (state, action) => {
      state.status = "loading";
    },
    [authFunctions.getUserStatus.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data.userData = action.payload;
      state.userLoggedIn = true;
    },
    [authFunctions.getUserStatus.rejected]: (state) => {
      state.status = "error";
      state.userLoggedIn = false;
      state.status = "idle";
    },
    //*CREATE USER
    [authFunctions.createUser.pending]: (state) => {
      state.status = "loading";
    },
    [authFunctions.createUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.userLoggedIn = true;
    },
    [authFunctions.createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.errorCode = action.error.code;
      if (action.error.code === "auth/email-already-in-use") {
        toast.error("Este email ya esta en uso");
      }
    },

    //*LOG IN WITH EMAIL & PASSWORD EXTRA-REDUCERS
    [authFunctions.logInUser.pending]: (state) => {
      state.status = "loading";
    },
    [authFunctions.logInUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data.userData = action.payload;
      state.userLoggedIn = true;
      toast.success("Bienvenido");
    },
    [authFunctions.logInUser.rejected]: (state, action) => {
      state.status = "failed";
      state.errorCode = action.error.code;
      if (state.errorCode === "auth/wrong-password") {
        toast.error("Contraseña incorrecta");
      }
    },

    //*LOG IN WITH GOOGLE EXTRA-REDUCERS
    [authFunctions.logInUserGoogle.pending]: (state) => {
      state.status = "loading";
    },
    [authFunctions.logInUserGoogle.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data.userData = action.payload;
      state.userLoggedIn = true;
    },
    [authFunctions.logInUserGoogle.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },

    //*LOG IN WITH FACEBOOK EXTRA-REDUCERS
    [authFunctions.logInUserFacebook.pending]: (state) => {
      state.status = "loading";
    },
    [authFunctions.logInUserFacebook.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data.userData = action.payload;
      state.userLoggedIn = true;
    },
    [authFunctions.logInUserFacebook.rejected]: (state, action) => {
      state.status = "failed";
    },
    //*LOG OUT
    [authFunctions.logOutUser.pending]: (state) => {
      state.status = "loading";
    },
    [authFunctions.logOutUser.fulfilled]: (state) => {
      state.status = "succeeded";
      state.userLoggedIn = false;
      state.data.userData = {};
    },
    [authFunctions.logOutUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export default myUserSlice.reducer;

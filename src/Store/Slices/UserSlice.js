import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../Api/config/fbConfig";
import { googleProvider, fbProvider } from "../../Api/config/fbConfig";
const initialState = {
  data: {},
  status: "idle",
  error: null,
  errorMessage: "",
};

//*LOG IN WITH EMAIL AND PASSWORD
export const logInUser = createAsyncThunk(
  "myUser/userLogIn",
  async (userCredentials) => {
    try {
      const credential = await auth.signInWithEmailAndPassword(
        userCredentials.email,
        userCredentials.password
      );

      const {
        email,
        uid,
        displayName,
        photoURL,
        emailVerified,
      } = credential.user;
      return { email, uid, displayName, photoURL, emailVerified };
    } catch (error) {
      //!Este error esta siendo utilizado como payload es por eso que se guarda en el nombre del usuario
      //!Utilizar un methodo para que filtre si es un user o un error
      return error.code;
    }
  }
);

//*LOG IN WITH GOOGLE
export const logInUserGoogle = createAsyncThunk(
  "myUser/userLoginGoogle",
  async () => {
    const credentials = await auth.signInWithPopup(googleProvider);
    let userData = {
      email: credentials.additionalUserInfo.profile.email,
      uid: credentials.user.uid,
      familyName: credentials.additionalUserInfo.profile.family_name,
      firstName: credentials.additionalUserInfo.profile.given_name,
      fullName: credentials.additionalUserInfo.profile.name,
      photoURL: credentials.additionalUserInfo.profile.picture,
      locale: credentials.additionalUserInfo.profile.locale,
    };
    console.log(credentials);
    return userData;
  }
);

//* LOG IN WITH FACEBOOK

export const logInUserFacebook = createAsyncThunk(
  "myUser/userLogInFacebook",
  async () => {
    const credentials = await auth.signInWithPopup(fbProvider);
    let userData = {
      email: credentials.additionalUserInfo.profile.email,
      uid: credentials.user.uid,
      familyName: credentials.additionalUserInfo.profile.last_name,
      firstName: credentials.additionalUserInfo.profile.first_name,
      fullName: credentials.additionalUserInfo.profile.name,
      photoURL: credentials.additionalUserInfo.profile.picture.data.url,
      isDefautlPicture:
        credentials.additionalUserInfo.profile.picture.data.is_silhouette,
    };
    console.log(credentials);
    return userData;
  }
);

//!Handle Errors
const myUserSlice = createSlice({
  name: "myUser",
  initialState,
  reducers: {},
  extraReducers: {
    //*LOG IN WITH EMAIL & PASSWORD EXTRA-REDUCERS
    [logInUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [logInUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.myUserData = action.payload;
    },
    [logInUser.rejected]: (state, action) => {
      state.status = "failed";
      state.errorMessage = action.error.message;
      console.log(state.errorMessage);
    },

    //*LOG IN WITH GOOGLE EXTRA-REDUCERS
    [logInUserGoogle.pending]: (state, action) => {
      state.status = "loading";
    },
    [logInUserGoogle.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [logInUserGoogle.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },

    //*LOG IN WITH FACEBOOK EXTRA-REDUCERS
    [logInUserFacebook.pending]: (state, action) => {
      state.status = "loading";
    },
    [logInUserFacebook.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [logInUserFacebook.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
  },
});
export default myUserSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../Api/config/fbConfig";
import { googleProvider, fbProvider } from "../../Api/config/fbConfig";
import toast from "react-hot-toast";
const initialState = {
  data: {},
  status: "idle",
  error: null,
  errorCode: "",
  userLoggedIn: null,
};

//*NOTIFICATION SYSTEM

//*GET THE CURRENT USER

export const getCurrentUser = createAsyncThunk(
  "myUser/getCurrentUser",
  async () => {
    const getUserId = () => {
      return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          unsubscribe();
          if (user) {
            resolve(user.uid);
          } else {
            reject("No user");
          }
        });
      });
    };
    const getUserData = async (userId) => {
      try {
        const response = await db.collection("Users").doc(userId).get();
        return response.data();
      } catch (error) {
        console.log(error);
      }
    };
    const userId = await getUserId();
    if (userId) {
      const userData = getUserData(userId);
      return userData;
    } else {
      return false;
    }
  }
);
//*LOG OUT
export const logOutUser = createAsyncThunk("myUser/userLogOut", async () => {
  try {
    const response = await auth.signOut();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
//*SIGN UP WITH EMAIL AND PASSWORD
export const createUser = createAsyncThunk(
  "myUser/createUser",
  async (userCredentials) => {
    const credentials = await auth.createUserWithEmailAndPassword(
      userCredentials.email,
      userCredentials.password
    );

    const userData = {
      email: credentials.user.email,
      uid: credentials.user.uid,
      photoURL: credentials.user.photoURL,
      isNewUSer: credentials.additionalUserInfo.isNewUser,
      emailVerified: credentials.user.emailVerified,
      firstName: userCredentials.firstName,
      familyName: userCredentials.familyName,
      fullName: userCredentials.firstName + " " + userCredentials.familyName,
    };
    await db.collection("Users").doc(userData.uid).set(userData);
    return userData;
  }
);
//*LOG IN WITH EMAIL AND PASSWORD
export const logInUser = createAsyncThunk(
  "myUser/userLogIn",
  async (userCredentials) => {
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
    //!indexar con firestore
    return { email, uid, displayName, photoURL, emailVerified };
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
    const userDataUpldoaded = await db
      .collection("Users")
      .doc(userData.uid)
      .set(userData);
    console.log(userDataUpldoaded);
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
    await db.collection("Users").doc(userData.uid).set(userData);
    return userData;
  }
);

//!Handle Errors
const myUserSlice = createSlice({
  name: "myUser",
  initialState,
  reducers: {},
  extraReducers: {
    //*GETTING CURRENT USER
    [getCurrentUser.pending]: (state, action) => {
      state.status = "loading";
      console.log(state.status);
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.data = action.payload;
      state.userLoggedIn = true;
      console.log(action.payload);
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.status = "error";
      state.userLoggedIn = false;
      console.log(action.error);
    },
    //*CREATE USER
    [createUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [createUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.userLoggedIn = true;
    },
    [createUser.rejected]: (state, action) => {
      state.status = "failed";
      state.errorCode = action.error.code;
      if (action.error.code === "auth/email-already-in-use") {
        toast.error("Este email ya esta en uso");
      }
    },

    //*LOG IN WITH EMAIL & PASSWORD EXTRA-REDUCERS
    [logInUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [logInUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.userLoggedIn = true;
      toast.success("Bienvenido");
    },
    [logInUser.rejected]: (state, action) => {
      state.status = "failed";
      state.errorCode = action.error.code;
      if (state.errorCode === "auth/wrong-password") {
        toast.error("Contraseña incorrecta");
      }
    },

    //*LOG IN WITH GOOGLE EXTRA-REDUCERS
    [logInUserGoogle.pending]: (state, action) => {
      state.status = "loading";
    },
    [logInUserGoogle.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.userLoggedIn = true;
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
      state.userLoggedIn = true;
    },
    [logInUserFacebook.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
    //*LOG OUT
    [logOutUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [logOutUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userLoggedIn = "false";
      state.data = {};
    },
    [logOutUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default myUserSlice.reducer;

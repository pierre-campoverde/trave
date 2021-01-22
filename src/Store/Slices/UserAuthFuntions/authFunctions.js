import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  auth,
  db,
  googleProvider,
  fbProvider,
} from "../../../Api/config/fbConfig";

//*Check the status of the current user
export const getUserStatus = createAsyncThunk(
  "myUser/GET_USER_STATUS",
  async () => {
    const getCurrentUserID = () => {
      return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            resolve(user.uid);
          } else {
            reject(false);
          }
        });
      });
    };
    const res = await getCurrentUserID();
    const userData = await db.collection("Users").doc(res).get();
    return userData.data();
  }
);
//*SIGN UP METHODS*/

//*Sign up with email & password
export const createUser = createAsyncThunk(
  "myUser/CREATE_USER",
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
  "myUser/LOG_IN",
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
    return { email, uid, displayName, photoURL, emailVerified };
  }
);
//*LOG IN WITH GOOGLE
export const logInUserGoogle = createAsyncThunk(
  "myUser/LOG_IN_GOOGLE",
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
    await db.collection("Users").doc(userData.uid).set(userData);
    return userData;
  }
);

//* LOG IN WITH FACEBOOK

export const logInUserFacebook = createAsyncThunk(
  "myUser/LOG_IN_FACEBOOK",
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

//*LOG OUT
export const logOutUser = createAsyncThunk("myUser/LOG_OUT", async () => {
  try {
    await auth.signOut();
    return true;
  } catch (error) {
    return false;
  }
});

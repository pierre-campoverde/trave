import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../Api/config/fbConfig";
const initialState = {
  data: { userPrograms: {} },
  status: "idle",
  error: null,
  errorCode: "",
  userLoggedIn: null,
};

//*Metodo de funcionalidades del usuario
//*[Guardar Programas]-[Obtener los programas guardados]*//
//*OBTENER LOS PROGRAMAS DE USUARIO
export const getUserPrograms = createAsyncThunk(
  "myUser/GET_USER_PROGRAMS",
  async (userID) => {
    const res = await db
      .collection("Users")
      .doc(userID)
      .collection("extraData")
      .doc("savedPrograms")
      .get();
    const myPrograms = res.data();
    return myPrograms;
  }
);
export const saveProgram = createAsyncThunk(
  "myUser/saveProgram",
  async (userID, programsID) => {
    try {
      await db
        .collection("Users")
        .doc(userID)
        .collection("extraData")
        .doc("savedPrograms")
        .set(programsID);
    } catch (error) {
      console.log(error.message);
    }
  }
);

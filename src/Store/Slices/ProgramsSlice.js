import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../Api/config/fbConfig";
const initialState = {
  selectedProgram: {},
  programs: [],
  status: "idle",
  error: null,
  query: { country: "", program: "", area: "", especiality: "" },
  errorMessage: "",
};

//*Async Request to Fireabase
//?oBTENER PROGRAMAS ALEATORIOS POR AHORA
//*OBTENEMOS TODOS LOS PROGRAMAS
export const fetchPrograms = createAsyncThunk(
  "programs/fetchPrograms",
  async () => {
    const programs = [];
    const res = await db.collection("Programs").get();
    res.forEach((doc) => programs.push({ id: doc.id, ...doc.data() }));
    return programs;
  }
);
//*OBTENER UNICAMENTE UN PROGRAMA
export const fetchProgram = createAsyncThunk(
  "programs/fetchProgram",
  async (id) => {
    const res = await db.collection("Programs").doc(id).get();
    const program = res.data();
    return program;
  }
);
//*OBTENEMOS PROGRAMAS FILTRADOS DESDE LA HOME PAGE
export const fetchQuery = createAsyncThunk(
  "programs/fetchQuery",
  async (query) => {
    const queryRes = [];
    if (query.country) {
      console.log(query.country);
    } else {
      console.log(query);
    }
    const response = await db
      .collection("Programs")
      .where("country", "==", `${query.country}`)
      .get();
    console.log(query.country);
    response.forEach((doc) => queryRes.push({ id: doc.id, ...doc.data() }));
    console.log(queryRes);
    return queryRes;
  }
);

//*SLICE
const ProgramSlice = createSlice({
  name: "programs",
  initialState,
  reducers: {
    addQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchProgram.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProgram.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.selectedProgram = action.payload;
    },
    [fetchProgram.rejected]: (state, action) => {
      state.status = "failed";
      console.log(action.error);
    },
    //*FETCHING ALL PROGRAMS REDUCER */
    [fetchPrograms.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPrograms.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.programs = state.programs.concat(action.payload);
    },
    [fetchPrograms.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //*FETCHING QUERIES REDUCER
    [fetchQuery.pending]: (state, action) => {
      state.status = "loading";
      console.log("Loading");
    },
    [fetchQuery.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.programs = action.payload;
    },
    [fetchQuery.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.name;
      state.errorMessage = action.error.code;
    },
  },
});
//*

//*SELECTORS
export const { addQuery } = ProgramSlice.actions;
export const selectAllPrograms = (state) => state.programs.programs;
export const selectProgramsById = (state, programId) =>
  state.programs.programs.find((program) => program.id === programId);
export default ProgramSlice.reducer;

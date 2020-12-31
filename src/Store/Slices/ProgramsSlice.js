import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../Api/config/fbConfig";
const initialState = {
  programs: [],
  status: "idle",
  error: null,
};

//*Async Request to Fireabase

export const fetchPrograms = createAsyncThunk(
  "programs/fetchPrograms",
  async () => {
    const programs = [];
    const res = await db.collection("Programs").get();
    res.forEach((doc) => programs.push({ id: doc.id, ...doc.data() }));
    return programs;
  }
);

//*SLICE

const programSlice = createSlice({
  name: "programs",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPrograms.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPrograms.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log(action);
      state.programs = state.programs.concat(action.payload);
    },
    [fetchPrograms.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

//*SELECTORS

export const selectAllPrograms = (state) => state.programs.programs;
export const selectProgramsById = (state, programId) =>
  state.programs.programs.find((program) => program.id === programId);
export default programSlice.reducer;

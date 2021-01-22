import { createSlice } from "@reduxjs/toolkit";

const initialData={
  data:{userData:{}},
  status:'idle',
  error:null,
  errorMessage:''
}

const myUserFeatureSlice=createSlice({
  name:"myUserFeatures",
  
})








//!PROGRAMS METHODS
    //*GET MYPROGRAMS
    [fetchMyPrograms.pending]: (state) => {
        state.status = "loading";
      },
      [fetchMyPrograms.fulfilled]: (state, action) => {
        state.status = "succeeded";
        state.data.mySavedPrograms = action.payload;
      },
      [fetchMyPrograms.rejected]: (state) => {
        state.status = "failed";
      },
      //*SAVE PROGRAMS
      [saveProgram.pending]: (state) => {
        state.status = "loading";
      },
      [saveProgram.fulfilled]: (state, action) => {
        state.status = "Succeeded";
      },
      [saveProgram.rejected]: (state, action) => {
        state.error = action.errorCode;
        console.log(action);
      },
export const { saveProgramLocally } = myUserSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import * as userFeatures from './UserFeaturesFunctions/featuresFunctions'
const initialState={
  data:{savedPrograms:{}},
  status:'idle',
  error:null,
  errorMessage:''
}
const myUserFeatureSlice=createSlice({
  name:"myUserFeatures",
  initialState:{},
  reducers:{
    saveProgramLocally:
  },
  extraReducers:{
    [userFeatures.getUserPrograms.pending]: (state) => {
        state.status = "loading";
      },
      [userFeatures.getUserPrograms.fulfilled]: (state, action) => {
        state.status = "succeeded";
        state.data.mySavedPrograms = action.payload;
      },
      [userFeatures.getUserPrograms.rejected]: (state) => {
        state.status = "failed";
      },
      //*SAVE PROGRAMS
      [userFeatures.saveProgram.pending]: (state) => {
        state.status = "loading";
      },
      [userFeatures.saveProgram.fulfilled]: (state, action) => {
        state.status = "Succeeded";
      },
      [userFeatures.saveProgram.rejected]: (state, action) => {
        state.error = action.errorCode;
        console.log(action);
      }
  }
})
export const { saveProgramLocally } = myUserFeatureSlice.actions;
export default myUserFeatureSlice.reducer
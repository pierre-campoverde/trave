import { configureStore } from "@reduxjs/toolkit";
import programsReducer from "./Slices/ProgramsSlice";
import userReducer from "./Slices/UserSlice";
export default configureStore({
  reducer: {
    programs: programsReducer,
    myUser: userReducer,
  },
});

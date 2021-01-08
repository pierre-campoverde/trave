import { configureStore } from "@reduxjs/toolkit";
import programsReducer from "./Slices/ProgramsSlice";
import userReducer from "./Slices/UserSlice";
import uiReducer from "./Slices/UiSlice";
export default configureStore({
  reducer: {
    programs: programsReducer,
    myUser: userReducer,
    interface: uiReducer,
  },
});

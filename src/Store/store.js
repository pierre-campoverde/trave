import { configureStore } from "@reduxjs/toolkit";
import programsReducer from "./Slices/ProgramsSlice";
import userReducer from "./Slices/UserAuthSlice";
import uiReducer from "./Slices/UiSlice";
export default configureStore({
  reducer: {
    programs: programsReducer,
    myUser: userReducer,
    interface: uiReducer,
  },
});

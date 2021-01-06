import { configureStore } from "@reduxjs/toolkit";
import programsReducer from "./Slices/ProgramsSlice";
import userReducer from "./Slices/UserSlice";
import uiReducer from "./Slices/UiSlice";
import queryReducer from "./Slices/QueriesSlice";
export default configureStore({
  reducer: {
    programs: programsReducer,
    myUser: userReducer,
    interface: uiReducer,
    queries: queryReducer,
  },
});

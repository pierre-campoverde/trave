import { createSlice } from "@reduxjs/toolkit";
export const UiSlice = createSlice({
  name: "counter",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setToggleFalse: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, setToggleFalse } = UiSlice.actions;
export default UiSlice.reducer;

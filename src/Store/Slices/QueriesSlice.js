import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../Api/config/fbConfig";
const initialState = {
  query: {},
  results: [],
  status: "idle",
  error: null,
};

//*MAKE A QUERY TO FB
export const makeQuery = createAsyncThunk(
  "queries/makeQuery",
  async (query) => {
    //!COMO OBTENEMOS LA QUERY DIRECTAMENTE EN LA FUNCTION
    const queryRes = [];
    const response = await db
      .collection("Programs")
      .where("country", "==", `${query.country}`)
      .get();
    response.forEach((doc) => queryRes.push(doc.data()));
    return queryRes;
  }
);

const QuerieSlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    addQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: {
    //*GETTING QUERIES
    [makeQuery.pending]: (state, action) => {
      state.status = "Loading";
      console.log("Loading");
    },
    [makeQuery.fulfilled]: (state, action) => {
      state.status = "Successful";
      state.results = action.payload;
    },
  },
});
export const { addQuery } = QuerieSlice.actions;
export default QuerieSlice.reducer;

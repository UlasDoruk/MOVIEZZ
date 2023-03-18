import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default movieSlice.reducer
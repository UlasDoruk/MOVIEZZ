import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const config = {
//   headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
// };

export const fetchPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",async (page) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/popular?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US&page=${page}`
    );
    return res.data.results;
  }
);

export const fetchUpcomingMovies = createAsyncThunk(
  "movies/getUpcomingMovies",
  async (page) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/upcoming?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US&page=${page}`
    );
    return res.data.results;
  }
);


export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies:[],
    upcomingMovies:[]
  },
  reducers: {},
  extraReducers: {
    [fetchPopularMovies.fulfilled]:(state,action)=>{
        state.popularMovies = action.payload
    },[fetchUpcomingMovies.fulfilled]:(state,action)=>{
        state.upcomingMovies=action.payload
    }
  },
});

export default movieSlice.reducer
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/getTopRatedMovies",
  async (page) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/top_rated?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US&page=${page}`
    );
    return res.data.results;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/popular?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US&page=${1}`
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
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    pageNumber: 1,
  },
  reducers: {},
  extraReducers: {
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.popularMovies = action.payload;
    },
    [fetchUpcomingMovies.fulfilled]: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    [fetchTopRatedMovies.fulfilled]: (state, action) => {
      state.pageNumber += 1;
      state.topRatedMovies = [...state.topRatedMovies, ...action.payload];
    },
  },
});

export default movieSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie, fetchMovieCredits,fetchPopularMovies,fetchTopRatedMovies,fetchUpcomingMovies,fetchMovieTrailer} from "./fetchApı";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
    pageNumber: 1,
    status: "idle",
    firstFetchTopRated: true,
    movie: [],
    movieTrailer:[],
    movieFirstTrailer :[],
    movieCreditsDirectors: [],
    movieCreditsActors:[],
    shortDate: "",
    genres: [],
    voteAverage: 0,
    movieHour: 0,
    movieMinute: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchMovieTrailer.fulfilled]:(state,action)=>{
      state.movieTrailer = action.payload
      state.movieFirstTrailer = action.payload[0]
    },
    [fetchMovieCredits.fulfilled]: (state, action) => {
      state.movieCreditsDirectors = action.payload.cast
    },
    [fetchMovie.fulfilled]: (state, action) => {
      state.movie = action.payload;
      state.shortDate = action.payload.release_date.slice(0, 4);
      state.genres = action.payload.genres.map((item) => {
        return item.name;
      });
      state.voteAverage = action.payload.vote_average;
      state.movieHour = Math.floor(action.payload.runtime / 60);
      state.movieMinute = action.payload.runtime % (state.movieHour * 60);
    },
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.popularMovies = action.payload;
    },
    [fetchPopularMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUpcomingMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.upcomingMovies = action.payload;
    },
    [fetchUpcomingMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTopRatedMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.pageNumber += 1;
      state.firstFetchTopRated = false;
      state.topRatedMovies = [...state.topRatedMovies, ...action.payload];
    },
    [fetchTopRatedMovies.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export default movieSlice.reducer
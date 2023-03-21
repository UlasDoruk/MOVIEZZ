import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSimilarMovies = createAsyncThunk(
  "movies/getSimilarMovies",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`
    );
    return res.data.results;
  }
);

export const fetchMovieTrailer = createAsyncThunk(
  "movies/getMovieTrailer",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`
    );
    return res.data.results;
  }
);

export const fetchMovieCredits = createAsyncThunk(
  "movies/getMovieCredits",
  async (id) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`
    );
    return res.data;
  }
);

export const fetchMovie = createAsyncThunk("movies/getMovie", async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/${id}?api_key=${process.env.REACT_APP_API_TOKEN}&language=en-US`
  );
  return res.data;
});

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
  "movies/getPopularMovies",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/movie/popular?api_key=${
        process.env.REACT_APP_API_TOKEN
      }&language=en-US&page=${1}`
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

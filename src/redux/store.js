import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

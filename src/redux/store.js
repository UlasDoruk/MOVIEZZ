import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import firebaseSlice from "./firebaseSlice"

export  const store = configureStore({
  reducer: {
    movies: movieSlice,
    auth : firebaseSlice
  },
});

export default store
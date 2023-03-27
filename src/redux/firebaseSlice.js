import { createSlice } from "@reduxjs/toolkit";

const firebaseSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    favMovies: [],
  },
  reducers: {
    getRegister: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = JSON.parse(localStorage.getItem("user"))
    },
    login: (state, action) => {
        localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout: (state) => {
        localStorage.removeItem("user")
        localStorage.removeItem("favMovies")
      state.user = "";
    },
    addFavMovies: (state, action) => {
      state.favMovies = [...state.favMovies,localStorage.setItem("favMovies",JSON.stringify(action.payload))]
    },
    setFavMovies: (state, action) => {
        localStorage.setItem(
          "favMovies",
          JSON.stringify(
            action.payload.map((item) => {
              return item.movie;
            })
          )
        );
    state.favMovies = JSON.parse(localStorage.getItem("favMovies"));
    },
  },
});

export const { login, logout, getRegister, addFavMovies, setFavMovies } =
  firebaseSlice.actions;
export default firebaseSlice.reducer
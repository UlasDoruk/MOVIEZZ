import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TopRatedPage from "./Pages/TopRated/TopRatedPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import ErrorPage from "./Pages/Error/ErrorPage"
import MoviePage from "./Pages/Movie/MoviePage";
import RegisterPage from "./Pages/AuthPages/RegisterPage";
import SearchedMoviesPage from "./Pages/SearchedMovies/SearchedMoviesPage";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/movie/:movie_id" element={<MoviePage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/search" element={<SearchedMoviesPage />}></Route>
        <Route path="/redirect" element={<Navigate to={"/"} />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

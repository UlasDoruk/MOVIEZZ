import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import TopRatedPage from "./Pages/TopRated/TopRatedPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import ErrorPage from "./Pages/Error/ErrorPage"
import MoviePage from "./Pages/Movie/MoviePage";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/movie/:movie_id" element={<MoviePage />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

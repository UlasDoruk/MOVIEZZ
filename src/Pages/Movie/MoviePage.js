
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SimilarMovie from "./Extras/SimilarMovies"
import Recommendations from "./Extras/Recommendations";
import Movie from "./Extras/Movie";
import MovieCredits from "./Extras/MovieCredits";

function MoviePage() {
  return (
    <div>
      <Navbar />
      <Movie />
      <div className="pr-20 pl-20">
        <MovieCredits />
        <SimilarMovie />
        <Recommendations />
      </div>
      <Footer />
    </div>
  );
}

export default MoviePage
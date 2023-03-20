
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SimilarMovie from "./SimilarMovies"
import Recommendations from "./Recommendations";
import Movie from "../Movie";

function MoviePage() {
  return (
    <div>
        <Navbar/>
        <Movie/>
        <SimilarMovie/>
        <Recommendations/>
        <Footer/>
    </div>
  )
}

export default MoviePage
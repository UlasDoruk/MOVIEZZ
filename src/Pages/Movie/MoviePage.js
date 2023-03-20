
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SimilarMovie from "./Extras/SimilarMovies"
import Recommendations from "./Extras/Recommendations";
import Movie from "./Extras/Movie";

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
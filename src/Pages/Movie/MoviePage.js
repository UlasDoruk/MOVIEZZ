
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Movie from "./Extras/Movie";
import MovieCredits from "./Extras/MovieCredits";
import SimilarRecoButton from "../../components/SimilarRecoButton";

function MoviePage() {

  return (
    <div className="h-full">
      <Navbar />
      <Movie />
      <div className="lg:pr-20 lg:pl-20 pl-5 pr-5">
        <MovieCredits />
        <SimilarRecoButton />
        <div className="lg:pr-5 pr-2  lg:pl-5 pl-2 pb-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MoviePage
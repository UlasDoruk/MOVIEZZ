
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SimilarMovie from "./Extras/SimilarMovies"
import Recommendations from "./Extras/Recommendations";
import Movie from "./Extras/Movie";
import MovieCredits from "./Extras/MovieCredits";
import TitleBar from  "../../components/TitleBar"

// Redux
import { openTheSection } from "../../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";

// Icon
import {MdArrowDropDownCircle} from "react-icons/md"

function MoviePage() {
  
  let dispatch = useDispatch();

  const openSection = useSelector((state) => state.movies.openSection);

  return (
    <div className="h-full">
      <Navbar />
      <Movie />
      <div className="lg:pr-20 lg:pl-20 pl-5 pr-5">
        <MovieCredits />
        <div className=" mt-5 mb-5 ">
          <button
            onClick={() => dispatch(openTheSection())}
            className="flex justify-center font-bold underline mb-5 hover:scale-110 sm:text-2xl text-sm text-slate-900">
            <p className="">Similar & Recommended Movies</p>
            <MdArrowDropDownCircle className="mt-2 ml-2" />
          </button>
          {openSection && (
            <>
              <TitleBar title = "Similar Movies"/>
              <SimilarMovie />
              <Recommendations />
            </>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MoviePage
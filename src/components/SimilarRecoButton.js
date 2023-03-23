import SimilarMovie from "../Pages/Movie/Extras/SimilarMovies";
import Recommendations from "../Pages/Movie/Extras/Recommendations";
import TitleBar from "./TitleBar";

// Redux
import { openTheSection } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

// Icon
import { MdArrowDropDownCircle } from "react-icons/md";

function SimilarRecoButton() {
  
  let dispatch = useDispatch();

  const openSection = useSelector((state) => state.movies.openSection);

  return (
    <>
      <button
        onClick={() => dispatch(openTheSection())}
        className="flex justify-center font-bold underline mb-5 hover:scale-110 sm:text-2xl text-sm text-slate-900 mt-10 lg:pl-5 pl-2 "
      >
        <p className="">Similar & Recommended Movies</p>
        <MdArrowDropDownCircle className="lg:mt-2 mt-1 ml-2" />
      </button>
      <div className=" mt-5 mb-5 ">
        {openSection && (
          <>
            <TitleBar title="Similar Movies" />
            <SimilarMovie />
            <TitleBar title="Recommended Movies"/>
            <Recommendations />
          </>
        )}
      </div>
    </>
  );
}

export default SimilarRecoButton;

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ErrorPage from "../Error/ErrorPage"
import { Link} from "react-router-dom";

// Flowbite
import { Card } from "flowbite-react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
  fetchRecommendedMovies,
} from "../../redux/fetchApı";

// Icon
import {AiOutlineCalendar} from "react-icons/ai"
import { FaWalking } from "react-icons/fa";

function SearchedMoviesPage() {

     const dispatch = useDispatch();

    const searchedMovies = useSelector((state)=>state.movies.searchedMovies)
    const status = useSelector((state)=>state.movies.status)

    const handleMovieID = (item_ID) => {
      dispatch(fetchMovie(item_ID));
      dispatch(fetchMovieCredits(item_ID));
      dispatch(fetchMovieTrailer(item_ID));
      dispatch(fetchSimilarMovies(item_ID));
      dispatch(fetchRecommendedMovies(item_ID));
    };

  return (
    <>
      <Navbar />
      {status === "failed" ? (
        <ErrorPage />
      ) : (
        <>
          <div className="lg:grid lg:grid-cols-5 flex flex-wrap p-5">
            {searchedMovies.map((item) => {
              return (
                <div key={item.id} className="flex">
                  <div className="max-w-sm flex p-2 bg-slate-100">
                    <Card
                      imgSrc={`${process.env.REACT_APP_API_IMAGE}${item.poster_path}`}
                    >
                      <h5 className="text-2xl  font-bold lg:text-center  text-gray-900">
                        {item.original_title}
                      </h5>
                      <div className="flex justify-between">
                        <span className="rounded bg-red-800 text-white p-2">
                          {item.vote_average.toString().slice(0, 3)}
                        </span>
                        <span className="font-mono text-lg mt-2 flex justify-center">
                          <AiOutlineCalendar className="mt-1 mr-1" />
                          {item.release_date}
                        </span>
                      </div>
                      <span className=" font-normal text-gray-700 flex-1 text-justify lg:flex hidden rounded py-2 ">
                        {item.overview.length > 250
                          ? item.overview.substring(0, 250) + "..."
                          : item.overview}
                      </span>
                      <Link
                        to={`/movie/${item.id}`}
                        className="text-white  p-2 flex justify-center bottom-0 bg-sky-700 hover:bg-sky-900"
                      >
                        <button
                          onClick={() => handleMovieID(item.id)}
                          className=""
                        >
                          <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 hover:pl-3" />
                        </button>
                      </Link>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default SearchedMoviesPage
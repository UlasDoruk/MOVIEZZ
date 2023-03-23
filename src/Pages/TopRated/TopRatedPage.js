import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

// Redux
import {
  fetchTopRatedMovies,
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
  fetchRecommendedMovies
} from "../../redux/fetchApı";
import { useDispatch, useSelector } from "react-redux";

// Icon
import { FaWalking } from "react-icons/fa";
import { RiArrowDownCircleLine } from "react-icons/ri";
import {AiOutlineCalendar} from "react-icons/ai"
 

function TopRatedPage() {

  const dispatch = useDispatch();

  // Selectors
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  let pageNumber = useSelector((state) => state.movies.pageNumber);
  const status = useSelector((state)=>state.movies.status)

  // Page number changer func
  const handlePageNumber = () => {
    dispatch(fetchTopRatedMovies(pageNumber));
  };

  const handleMovieID = (item_ID) => {
    dispatch(fetchMovie(item_ID));
    dispatch(fetchMovieCredits(item_ID));
    dispatch(fetchMovieTrailer(item_ID));
    dispatch(fetchSimilarMovies(item_ID))
    dispatch(fetchRecommendedMovies(item_ID));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopRatedMovies());
    }
  }, [status]);

  return (
    <>
      <Navbar />
      {status === "loading" && <Loading />}
      <div className="lg:grid lg:grid-cols-5 flex flex-wrap p-5">
        {topRatedMovies.map((item) => {
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
                      {item.vote_average}
                    </span>
                    <span className="font-mono text-lg mt-2 flex justify-center">
                      <AiOutlineCalendar className="mt-1 mr-1" />
                      {item.release_date}
                    </span>
                  </div>
                    <span className=" font-normal text-gray-700 flex-1 text-justify lg:flex hidden rounded py-2 ">
                      {item.overview}
                    </span>
                  <Link
                    to={`/movie/${item.id}`}
                    className="text-white  p-2 flex justify-center bottom-0 bg-sky-700 hover:bg-sky-900"
                  >
                    <button onClick={() => handleMovieID(item.id)} className="">
                      <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 hover:pl-3" />
                    </button>
                  </Link>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center text-white mb-5 ">
        <button
          onClick={handlePageNumber}
          className="flex justify-center rounded-lg  hover:bg-sky-900 w-1/2 bg-slate-800 p-5 mb-5 mt-5"
        >
          <p className="lg:contents hidden font-bold text-2xl">
            Load More Movies
          </p>
          <RiArrowDownCircleLine className="w-10 h-10 lg:ml-2 ml-0" />
        </button>
      </div>
      <div className="pr-5 pl-5 pb-5">
        <Footer />
      </div>
    </>
  );
}

export default TopRatedPage;

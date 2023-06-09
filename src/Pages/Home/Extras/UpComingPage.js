import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";

//Redux
import {
  fetchUpcomingMovies,
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
  fetchRecommendedMovies
} from "../../../redux/fetchApı";
import { useDispatch, useSelector } from "react-redux";

// Icon
import { FaWalking } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

function UpComingPage() {
  const dispatch = useDispatch();

  // Selectors
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const status = useSelector((state) => state.movies.status);

  const handleMovieID = (item_ID) => {
    dispatch(fetchMovie(item_ID));
    dispatch(fetchMovieCredits(item_ID));
    dispatch(fetchMovieTrailer(item_ID));
    dispatch(fetchSimilarMovies(item_ID));
    dispatch(fetchRecommendedMovies(item_ID));
  };

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="mb-10 mt-5">
      {status === "loading" && <Loading />}
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={""}
        scrollbar={{ draggable: true, dragSize: 250 }}
      >
        {upcomingMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm shadow bg-gray-800 mb-5">
                <div className="relative ">
                  <Link to={`/movie/${item.id}`}>
                    <img
                      onClick={() => handleMovieID(item.id)}
                      className=""
                      src={
                        item.poster_path
                          ? `${process.env.REACT_APP_API_IMAGE}${item.poster_path}`
                          : "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="absolute lg:font-bold text-xs bg-sky-700 lg:rounded-full lg:mt-2 lg:mr-2 lg:p-2 p-1 text-white  -right-0 -top-0">
                    {item.vote_average}
                  </div>
                </div>
                <Link
                  to={`/movie/${item.id}`}
                  className="flex justify-around hover:bg-blue-500"
                >
                  <button
                    onClick={() => handleMovieID(item.id)}
                    className="text-white  p-2  flex justify-center lg:mr-5"
                  >
                    <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 lg:mr-14" />
                    <p className="hidden lg:block font-mono text-lg opacity-50 mt-1">
                      {item.release_date}
                    </p>
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default UpComingPage;

// Redux
import { openTheSection } from "../../../redux/movieSlice";
import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
} from "../../../redux/fetchApı";
import { useSelector, useDispatch } from "react-redux";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

function SimilarMovies() {

  const dispatch = useDispatch();

  const similarMovies = useSelector((state) => state.movies.similarMovies);

  const handleMovieID = (item_ID) => {
    dispatch(fetchMovie(item_ID));
    dispatch(fetchMovieCredits(item_ID));
    dispatch(fetchMovieTrailer(item_ID));
    dispatch(fetchSimilarMovies(item_ID));
    dispatch(openTheSection())
  };

  return (
    <>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={5}
        slidesPerView={6}
        onSwiper={""}
        scrollbar={{ draggable: true, dragSize: 100 }}
      >
        {similarMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <div
                  onClick={() => handleMovieID(item.id)}
                  className="max-w-sm shadow bg-gray-800 mb-5"
                >
                  <div className="relative ">
                    <img
                      className="lg:h-96 h-24 lg:w-96 w-24"
                      src={
                        item.poster_path
                          ? `${process.env.REACT_APP_API_IMAGE}${item.poster_path}`
                          : `https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg`
                      }
                      alt=""
                    />
                    <div className="absolute lg:font-bold text-xs bg-sky-700 lg:rounded-full lg:mt-2 lg:mr-2 lg:p-2 p-1 text-white  -right-0 -top-0">
                      {item.vote_average.toString().slice(0, 3)}
                    </div>
                  </div>
                  {/* <Link
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
                </Link> */}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SimilarMovies;

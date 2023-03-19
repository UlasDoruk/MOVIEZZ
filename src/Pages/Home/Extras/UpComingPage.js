import { fetchUpcomingMovies } from "../../../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Icon
import { FaWalking } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

function UpComingPage() {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={""}
      >
        {upcomingMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm shadow bg-gray-800 ">
                <div className="relative ">
                  <img
                    className=""
                    src={`https://www.themoviedb.org/t/p/w400/${item.poster_path}`}
                    alt=""
                  />
                  <div className="absolute lg:font-bold text-xs bg-sky-700 lg:rounded-full lg:mt-2 lg:mr-2 lg:p-2 p-1 text-white  -right-0 -top-0">
                    {item.vote_average}
                  </div>
                </div>
                <Link
                  to={"/toprated"}
                  className="flex justify-around hover:bg-blue-500"
                >
                  <button className="text-white  p-2  flex justify-center lg:mr-5">
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

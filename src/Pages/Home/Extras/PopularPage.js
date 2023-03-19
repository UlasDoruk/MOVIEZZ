import { fetchPopularMovies } from "../../../redux/movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"

// Icon
import { FaWalking } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";


function PopularPage() {

  const dispatch = useDispatch()

  const popularMovies = useSelector((state)=>state.movies.popularMovies)

  useEffect(()=>{
    dispatch(fetchPopularMovies())
  },[dispatch])

  return (
    <div className="">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={""}
      >
        {popularMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm shadow bg-gray-800 ">
                <img
                  className=""
                  src={`https://www.themoviedb.org/t/p/w400/${item.poster_path}`}
                  alt=""
                />
                <Link
                  to={"/toprated"}
                  className="flex justify-around hover:bg-blue-500"
                >
                  <button className="text-white  p-2  flex justify-center lg:mr-5">
                    <FaWalking className="w-10 h-10 lg:mr-14" />
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

export default PopularPage
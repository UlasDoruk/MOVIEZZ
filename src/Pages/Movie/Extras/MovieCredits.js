import { useSelector } from "react-redux";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,FreeMode} from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function MovieCredits() {

  const movieCreditsActors = useSelector((state) => state.movies.movieCreditsActors);

  return (
    <>
      <h1 className="flex justify-start font-bold lg:text-2xl text-base lg:p-3 p-1">
        Cast
      </h1>
      <Swiper
        modules={[FreeMode,Scrollbar]}
        spaceBetween={5}
        slidesPerView={10}
        onSwiper={""}
        scrollbar={{ draggable: true, dragSize: 100 }}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 1 },
          480: { slidesPerView: 3, spaceBetween: 1 },
          768: { slidesPerView: 5, spaceBetween: 2 },
          1024: { slidesPerView: 7, spaceBetween: 5 },
          1280: { slidesPerView: 10, spaceBetween: 5 },
        }}
      >
        {movieCreditsActors.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="mt-1 lg:mb-10 mb-5 shadow-xl text-left bg-white ">
                <img
                  className="rounded-t-lg"
                  src={
                    item.profile_path
                      ? `https://www.themoviedb.org/t/p/w200/${item.profile_path}`
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
                  }
                  alt=""
                />
                <div className="lg:p-5 p-1 pt-2 text-dark lg:truncate truncate">
                  <h5 className="lg:font-bold lg:opacity-70 opacity-50 lg:p-0 p-1 text-sm flex-1">
                    {item.original_name}
                  </h5>
                  <p className="opacity-50 lg:flex hidden">{item.character}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default MovieCredits;

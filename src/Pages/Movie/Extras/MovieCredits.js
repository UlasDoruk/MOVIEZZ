import { useSelector } from "react-redux";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

function MovieCredits() {

  const movieCreditsActors = useSelector((state) => state.movies.movieCreditsActors);

  return (
    <>
      <h1 className="flex justify-start font-bold text-2xl p-5 pb-0">Cast</h1>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={5}
        slidesPerView={10}
        onSwiper={""}
        scrollbar={{ draggable: true, dragSize: 100 }}>
        {movieCreditsActors.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="mt-5 mb-10 shadow-xl text-left bg-white">
                  <img
                    className="rounded-t-lg"
                    src={
                      item.profile_path
                        ? `https://www.themoviedb.org/t/p/w200/${item.profile_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
                    }
                    alt=""/>
                <div className="p-5 pt-2 text-dark truncate ">
                  <h5 className="font-bold ">{item.original_name}</h5>
                  <p className="opacity-50 ">{item.character}</p>
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

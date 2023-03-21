import { useSelector } from 'react-redux'

// Icon
import {AiFillHeart} from "react-icons/ai"
import { MdOutlineVideoLibrary } from "react-icons/md";

function Movie() {

  let isOffical = true

  // Selectors
  const movie = useSelector((state)=>state.movies.movie)
  const shortDate = useSelector((state)=>state.movies.shortDate)
  const genres = useSelector((state) => state.movies.genres);
  const voteAverage = useSelector((state) => state.movies.voteAverage);
  const movieHour = useSelector((state) => state.movies.movieHour);
  const movieMinute = useSelector((state) => state.movies.movieMinute);
  const movieCreditsDirectors = useSelector((state) => state.movies.movieCreditsDirectors);
  const movieTrailer = useSelector((state) => state.movies.movieTrailer);
  const movieFirstTrailer = useSelector((state) => state.movies.movieFirstTrailer);

  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
      }}
    >
      <div className="flex justify-start">
        <img
          className=" rounded-3xl p-5 lg:pl-20"
          src={`${process.env.REACT_APP_API_IMAGE}${movie.poster_path}`}
        ></img>
        <div className="font-bold text-white p-10">
          <div className="flex justify-start pb-5">
            <h1 className="text-4xl">
              {movie.original_title} - ({shortDate})
            </h1>
          </div>
          <div className="flex justify-start pb-5">
            <p className="uppercase">
              {movie.release_date} - ({movie.original_language})
            </p>
            {genres.map((item, index) => {
              return (
                <p className="ml-3 underline" key={index}>
                  {item}
                </p>
              );
            })}
            <div className="pl-5 flex justify-center ">
              {movieHour}h<p className="ml-1">{movieMinute}m</p>
            </div>
          </div>
          <div className="flex justify-start pb-5">
            <p
              className={`${
                voteAverage >= 7 ? " bg-emerald-900" : "bg-red-900"
              } p-2 w-min h-min rounded-full`}
            >
              {voteAverage.toString().slice(0, 3)}
            </p>
            <button className="bg-red-700 p-2 ml-5 rounded-full hover:bg-amber-500">
              <AiFillHeart className="w-5 h-5" />
            </button>
            {movieTrailer.map((item, index) => {
              if (item.name === "Official Trailer") {
                isOffical = false;
                return (
                  <a
                    key={index}
                    target={"_blank"}
                    href={`https://www.youtube.com/watch?v=${item.key}`}
                    className="flex hover:scale-110  rounded-lg ml-5 text-2xl"
                  >
                    <MdOutlineVideoLibrary className="mt-2 mr-2 ml-5" /> Watch
                    Trailer
                  </a>
                );
              }
            })}
            {isOffical && (
              <a
                target={"_blank"}
                href={`https://www.youtube.com/watch?v=${movieFirstTrailer.key}`}
                className="flex hover:scale-110  rounded-lg ml-5 text-2xl"
              >
                <MdOutlineVideoLibrary className="mt-2 mr-2 ml-5" /> Watch
                Trailer
              </a>
            )}
          </div>
          <h2 className="text-white flex justify-start uppercase italic opacity-80 pb-5">
            {movie.tagline}
          </h2>
          <p className="text-justify text-lg w-1/2 pb-10">{movie.overview}</p>
          <div className="flex justify-start">
            {movieCreditsDirectors.map((item, index) => {
              if (item.known_for_department === "Directing") {
                return (
                  <span className="flex flex-col w-1/6" key={index}>
                    <span className=" underline justify-start flex ">
                      Director
                    </span>
                    <span className="justify-start flex text-justify">
                      {item.name}
                    </span>
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie
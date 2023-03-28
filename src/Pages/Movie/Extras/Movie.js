// Firebase
import { addFavorite } from "../../../Firebase/Firebase";
import { setFavMovies } from "../../../redux/firebaseSlice";

// Redux
import { useSelector} from 'react-redux'

// Icon
import {AiFillHeart} from "react-icons/ai"
import { MdOutlineVideoLibrary } from "react-icons/md";
import { toast } from "react-toastify";

function Movie() {

  let isThereOfficalTrailer = true

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
  const user = useSelector((state)=>state.auth.user)

  const handleFavoriteMovies =async()=>{
    if(user){
      await addFavorite({ uid: user.uid, movie });
      toast.success(`${movie.original_title} added to Favorite`);
      setFavMovies("");
    }else{
      toast.warning("You have to Signup")
    }
  }

  return (
    <div
      className="w-full lg:h-max h-48"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
      }}
    >
      <div className="flex justify-start">
        <img
          className="w-36 h-44 lg:w-96 lg:h-min p-2 lg:pl-20"
          src={
            movie.poster_path
              ? `${process.env.REACT_APP_API_IMAGE}${movie.poster_path}`
              : "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
          }
        ></img>
        <div className="font-bold text-white lg:p-10 p-1">
          <div className="lg:flex justify-start lg:pb-5 pb-1  hidden">
            <h1 className="lg:text-4xl text-sm truncate">
              {movie.original_title}
              <span className="">-({shortDate})</span>
            </h1>
          </div>
          <div className="lg:flex lg:justify-start text-left lg:pb-5 pb-1 lg:text-xl text-sm">
            <p className="uppercase truncate lg:flex hidden">
              {movie.release_date} - ({movie.original_language})
            </p>
            {genres.map((item, index) => {
              return (
                <p
                  className="lg:ml-3 ml-1 underline lg:text-xl text-xs"
                  key={index}
                >
                  {item}
                </p>
              );
            })}
            <div className="lg:pl-5 pl-0 flex ">
              {movieHour}h<p className="ml-1">{movieMinute}m</p>
            </div>
          </div>

          <div className="flex justify-start lg:pb-5">
            <p
              className={`${
                voteAverage >= 7 ? " lg:bg-emerald-900" : "lg:bg-red-900"
              } lg:p-2 mt-0  lg:rounded-full `}
            >
              {voteAverage.toString().slice(0, 3)}
            </p>
            <button onClick={handleFavoriteMovies} className="lg:bg-red-900  lg:p-2 p-0 lg:ml-5 ml-1 lg:rounded-full  lg:hover:bg-amber-500">
              <AiFillHeart className="h-5 w-5" fill="red" />
            </button>
            {movieTrailer.map((item, index) => {
              if (item.name === "Official Trailer") {
                isThereOfficalTrailer = false;
                return (
                  <a
                    key={index}
                    target={"_blank"}
                    href={`https://www.youtube.com/watch?v=${item.key}`}
                    className="flex lg:hover:scale-110  lg:ml-5 ml-1 lg:text-2xl text-sm"
                  >
                    <MdOutlineVideoLibrary className="mt-1 lg:mr-2 mr-1 lg:ml-5 ml-2 " />
                    <span className="lg:flex hidden">Watch Trailer</span>
                    <span className="lg:hidden flex">Trailer</span>
                  </a>
                );
              }
            })}
            {isThereOfficalTrailer && movieFirstTrailer && (
              <a
                target={"_blank"}
                href={`https://www.youtube.com/watch?v=${movieFirstTrailer.key}`}
                className="flex lg:hover:scale-110 lg:ml-5 ml-1 lg:text-2xl text-sm"
              >
                <MdOutlineVideoLibrary className="mt-1 lg:mr-2 mr-1 lg:ml-5 ml-2" />
                <span className="lg:flex hidden">Watch Trailer</span>
                <span className="lg:hidden flex">Trailer</span>
              </a>
            )}
          </div>
          <h2 className="text-white flex justify-start text-start lg:uppercase italic opacity-80 lg:pb-5 pr-1">
            {movie.tagline}
          </h2>
          <p className="text-justify text-lg w-1/2 pb-10 lg:flex hidden">
            {movie.overview}
          </p>
          <div className=" justify-start lg:flex hidden">
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
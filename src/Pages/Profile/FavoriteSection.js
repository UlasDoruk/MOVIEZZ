import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

// Firebase
import { deleteFavMovies } from '../../Firebase/Firebase';

// Icon
import { AiOutlineCalendar } from "react-icons/ai";
import {FaWalking} from "react-icons/fa"
import { IoHeartDislikeSharp } from "react-icons/io5";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
  fetchRecommendedMovies,
} from "../../redux/fetchApı";
import { toast } from 'react-toastify';

function FavoriteSection() {

    const favMovies = useSelector((state)=>state.auth.favMovies)
    const dispatch = useDispatch()

    const handleMovieID = (item_ID) => {
      dispatch(fetchMovie(item_ID));
      dispatch(fetchMovieCredits(item_ID));
      dispatch(fetchMovieTrailer(item_ID));
      dispatch(fetchSimilarMovies(item_ID));
      dispatch(fetchRecommendedMovies(item_ID));
    };

    const handleDeleteFavMovie =async value=>{
    await deleteFavMovies(value.movie.id)
    toast.success(`${value.movie.original_title} removed from Favorites`)
    }

  return (
    <div className="lg:grid lg:grid-cols-4 flex flex-wrap  ">
      {favMovies &&
        favMovies.map((item) => {
          return (
            <div key={item.id} className="flex">
              <div className="max-w-sm flex p-2 ">
                <Card
                  className="bg-slate-50 "
                  imgSrc={`${process.env.REACT_APP_API_IMAGE}${item.movie.poster_path}`}
                >
                  <h5 className="text-2xl  font-bold lg:text-center  text-gray-900">
                    {item.original_title}
                  </h5>
                  <div className="flex justify-start">
                    <span className="rounded bg-slate-900 text-white p-2 ">
                      {item.movie.vote_average.toString().slice(0, 3)}
                    </span>
                    <button
                      onClick={() => handleDeleteFavMovie(item)}
                      className="bg-red-600 rounded-full hover:bg-white hover:text-red-600 text-white p-2 ml-5"
                    >
                      <IoHeartDislikeSharp className="w-6 h-6" />
                    </button>

                    <span className="font-mono text-lg mt-2 flex justify-center ml-5">
                      <AiOutlineCalendar className="mt-1 mr-1" />
                      {item.movie.release_date}
                    </span>
                  </div>
                  <span className=" font-normal text-gray-700 flex-1 text-justify lg:flex hidden rounded py-2 ">
                    {item.movie.overview}
                  </span>
                  <Link
                    to={`/movie/${item.movie.id}`}
                    className="text-white  p-2 flex justify-center bottom-0 bg-sky-700 hover:bg-sky-900"
                  >
                    <button onClick={() => handleMovieID(item.movie.id)} className="">
                      <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 hover:pl-3" />
                    </button>
                  </Link>
                </Card>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FavoriteSection
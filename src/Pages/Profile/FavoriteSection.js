import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

// Icon
import { AiOutlineCalendar, AiFillHeart } from "react-icons/ai";
import {FaWalking} from "react-icons/fa"

// Redux
import { useDispatch } from 'react-redux';
import {
  fetchMovie,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSimilarMovies,
  fetchRecommendedMovies,
} from "../../redux/fetchApı";

function FavoriteSection() {

    const favMovies = JSON.parse(localStorage.getItem("favMovies"))
    const dispatch = useDispatch()
    

    const handleMovieID = (item_ID) => {
      dispatch(fetchMovie(item_ID));
      dispatch(fetchMovieCredits(item_ID));
      dispatch(fetchMovieTrailer(item_ID));
      dispatch(fetchSimilarMovies(item_ID));
      dispatch(fetchRecommendedMovies(item_ID));
    };

  return (
    <div className="lg:grid lg:grid-cols-4 flex flex-wrap  ">
        {favMovies.map((item)=>{
            return (
              <div key={item.id} className="flex">
                <div className="max-w-sm flex p-2 bg-slate-100">
                  <Card
                    className="bg-slate-50"
                    imgSrc={`${process.env.REACT_APP_API_IMAGE}${item.poster_path}`}
                  >
                    <h5 className="text-2xl  font-bold lg:text-center  text-gray-900">
                      {item.original_title}
                    </h5>
                    <div className="flex justify-start">
                       <span className="rounded bg-slate-900 text-white p-2 ">
                        {item.vote_average.toString().slice(0, 3)}
                      </span>
                      <button className="bg-red-600 hover:bg-yellow-300 hover:text-red-700 rounded-full text-white p-2 ml-5">
                        <AiFillHeart className="w-5 h-5" />
                      </button>
                     
                      <span className="font-mono text-lg mt-2 flex justify-center ml-5">
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
                      <button
                        onClick={() => handleMovieID(item.id)}
                        className=""
                      >
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
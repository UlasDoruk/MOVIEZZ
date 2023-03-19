import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { fetchTopRatedMovies } from "../../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Icon
import { FaWalking } from "react-icons/fa";
import {RiArrowDownCircleLine} from "react-icons/ri"

function TopRatedPage() {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 flex-wrap">
        {topRatedMovies.map((item) => {
          return (
            <div key={item.id} className="flex relative  bg-slate-800 ">
              <img
                className="p-5 bg-white"
                src={`https://www.themoviedb.org/t/p/w400/${item.poster_path}`}
                alt=""
              ></img>
              <div className="absolute lg:font-bold lg:text-xl text-xs bg-red-700 rounded-full mt-2 ml-2 p-2  text-white  -left-0 -top-0">
                {item.vote_average}
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-left flex justify-between  text-white">
                  {item.original_title}
                  <p className="font-mono text-base mt-2">
                    {item.release_date}
                  </p>
                </h5>
                <p className="mb-3 font-bold text-2xl text-justify  text-white opacity-50">
                  {item.overview}
                </p>
                <Link to={"/"} className="flex justify-center">
                  <button className="text-white  p-2 absolute  w-1/2 flex justify-center bottom-0  bg-sky-400 hover:bg-sky-800">
                    <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 " />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center text-white bg-slate-800">
        <button className="flex justify-center rounded-full bg-slate-600 hover:bg-slate-500 p-5 mb-5 mt-5">
          <p className="font-bold text-2xl">Load More Movies</p>
          <RiArrowDownCircleLine className="w-10 h-10 ml-2" />
        </button>
      </div>

      <Footer />
    </>
  );
}

export default TopRatedPage;

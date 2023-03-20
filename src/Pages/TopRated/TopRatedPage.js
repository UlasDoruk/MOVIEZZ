import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Redux
import { fetchTopRatedMovies } from "../../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

// Icon
import { FaWalking } from "react-icons/fa";
import { RiArrowDownCircleLine } from "react-icons/ri";
import Loading from "../../components/Loading";

function TopRatedPage() {

  const dispatch = useDispatch();

  // Selectors
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  let pageNumber = useSelector((state) => state.movies.pageNumber);
  const status = useSelector((state)=>state.movies.status)

  // Page number changer func
  const handlePageNumber = () => {
    dispatch(fetchTopRatedMovies(pageNumber));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopRatedMovies());
    }
  }, [status]);

  return (
    <>
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 flex-wrap p-5 pb-0">
        {topRatedMovies.map((item) => {
          return (
            <div key={item.id} className="flex relative  bg-slate-800 ">
              <img
                className="bg-white border-b-2 border-b-gray-900"
                src={`https://www.themoviedb.org/t/p/w400/${item.poster_path}`}
                alt=""
              ></img>
              <div className="absolute lg:font-bold lg:text-xl text-xs bg-red-700 rounded-full mt-2 ml-2 p-2  text-white  -left-0 -top-0">
                {item.vote_average}
              </div>
              <div className="p-5">
                <div className="font-bold text-left flex justify-between text-white">
                  <h5 className="mb-2 text-2xl w-1/2">{item.original_title}</h5>
                  <p className="font-mono text-base mt-2">
                    {item.release_date}
                  </p>
                </div>
                <p className="mb-3  mt-5 font-bold text-2xl text-justify  text-white opacity-50">
                  {item.overview}
                </p>
                <Link to={"/"} className="flex justify-center ">
                  <button className="text-white  p-2 absolute  w-1/2 flex justify-center bottom-0 bg-sky-400 hover:bg-sky-800">
                    <FaWalking className="lg:w-10 lg:h-10 w-5 h-5 " />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center text-white bg-slate-800 m-5 mt-0">
        <button
          onClick={handlePageNumber}
          className="flex justify-center rounded-full bg-sky-500 hover:bg-slate-500 p-5 mb-5 mt-5"
        >
          <p className="lg:contents hidden font-bold text-2xl">
            Load More Movies
          </p>
          <RiArrowDownCircleLine className="w-10 h-10 lg:ml-2 ml-0" />
        </button>
      </div>
      {status === "loading" && <Loading />}
      <Footer />
    </>
  );
}

export default TopRatedPage;

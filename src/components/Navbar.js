import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../redux/fetchApı";

// Icon
import { BiCameraMovie } from "react-icons/bi";


function Navbar() {

  const dispatch = useDispatch()

  let pageNumber = useSelector((state)=>state.movies.pageNumber)
  let firstFetchTopRated = useSelector((state) => state.movies.firstFetchTopRated);

    const handleFirstFetchTopRated = () => {
      if (firstFetchTopRated === true ) {
        dispatch(fetchTopRatedMovies(pageNumber));
      }
    };

  return (
    <div className="flex justify-between font-bold lg:text-2xl text-sm bg-gray-900 top-0 text-white p-3">
      <Link to={"/"}>
        <p className="flex justify-center hover:scale-110 mt-1">
          MOVIEZZ <BiCameraMovie className="mt-1 ml-2" />
        </p>
      </Link>
      <div className="flex justify-center space-x-5 ml-2 lg:ml-36">
        <Link to={"/toprated"}>
          <p
            onClick={handleFirstFetchTopRated}
            className="hover:scale-110 uppercase"
          >
            Top Rated
          </p>
        </Link>
        <Link to={"/login"}>
          <p className="hover:scale-110 uppercase">Login</p>
        </Link>
      </div>
      <SearchBar className="hidden" />
    </div>
  );
}

export default Navbar;

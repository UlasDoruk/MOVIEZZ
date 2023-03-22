import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Dropdown } from "flowbite-react";

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
    <div className="flex justify-between font-bold  lg:text-2xl text-sm bg-gray-900 top-0 text-white lg:p-3 p-1">
      <Link to={"/"}>
        <p className="flex justify-center lg:hover:scale-110 underline lg:no-underline hover:decoration-white decoration-transparent mt-1">
          <span className="lg:contents hidden">MOVIEZZ</span>
          <BiCameraMovie className="mt-1 ml-2" />
        </p>
      </Link>
      <SearchBar />
      <div className="justify-center  lg:flex hidden p-2 pt-1">
        <Link to={"/toprated"}>
          <p
            onClick={handleFirstFetchTopRated}
            className="hover:underline mr-5"
          >
            Top Rated
          </p>
        </Link>
        <Link to={"/login"}>
          <p className="hover:underline mr-5">Login</p>
        </Link>
      </div>
      <div className="flex items-center lg:hidden ">
        <Dropdown
          label={""}
          color={"blue"}
          dismissOnClick={false}
          inline={false}
          size="sm"
        >
          <Dropdown.Item>
            {
              <Link to={"/toprated"}>
                <p
                  onClick={handleFirstFetchTopRated}
                  className="hover:scale-110"
                >
                  Top Rated
                </p>
              </Link>
            }
          </Dropdown.Item>
          <Dropdown.Item>
            {
              <Link to={"/login"}>
                <p className="hover:scale-110 ">Login</p>
              </Link>
            }
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navbar;

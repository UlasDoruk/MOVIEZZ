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
      <div className="p-2">
        <Dropdown
          label={""}
          color={"blue"}
          dismissOnClick={true}
          inline={true}
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

import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// Material IU
import Popover from "@mui/material/Popover";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../redux/fetchApı";

// Icon
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineFormatAlignJustify } from "react-icons/md";


function Navbar() {

  // Material UI Popover
  // ---------------------
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // ---------------------

  const dispatch = useDispatch();

  let pageNumber = useSelector((state) => state.movies.pageNumber);
  let firstFetchTopRated = useSelector(
    (state) => state.movies.firstFetchTopRated
  );

  const handleFirstFetchTopRated = () => {
    if (firstFetchTopRated === true) {
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
      {/* Lower screen size under the lg */}
      <button
        className="rounded pr-2 m-1 pl-2 mr-1 lg:hidden "
        aria-describedby={id}
        onClick={handleClick}
      >
        <MdOutlineFormatAlignJustify className="w-5 h-5" />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="bg-gray-800 text-white font-bold ">
          <Link to={"/toprated"}>
            <p
              onClick={handleFirstFetchTopRated}
              className="border-solid border-gray-500 border-b-2 p-2"
            >
              Top Rated
            </p>
          </Link>
          <Link to={"/login"}>
            <p className=" p-2 ">Login</p>
          </Link>
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;

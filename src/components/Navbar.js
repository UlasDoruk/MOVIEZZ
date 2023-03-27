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
import { GiPlagueDoctorProfile } from "react-icons/gi";

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
  let firstFetchTopRated = useSelector((state) => state.movies.firstFetchTopRated);
  const user = JSON.parse(localStorage.getItem("user"))

  const handleFirstFetchTopRated = () => {
    if (firstFetchTopRated === true) {
      dispatch(fetchTopRatedMovies(pageNumber));
    }
  };
  
  return (
    <div className="flex justify-between font-bold  lg:text-lg text-sm bg-gray-900 top-0 text-white lg:p-3 p-1">
      <Link to={"/"}>
        <p className="flex justify-center lg:hover:scale-110 underline lg:no-underline hover:decoration-white decoration-transparent lg:mt-3 mt-2 ml-2">
          <span className="lg:contents hidden">MOVIEZZ</span>
          <BiCameraMovie className="mt-0 ml-2 w-6 h-6" />
        </p>
      </Link>
      <SearchBar />
      <div className="justify-center  lg:flex hidden p-2 pt-1">
        <Link to={"/toprated"}>
          <p
            onClick={handleFirstFetchTopRated}
            className="hover:bg-gray-700 rounded  text-lg p-2"
          >
            Top Rated
          </p>
        </Link>
        {!user ? (
          <Link to={"/login"}>
            <p className="hover:bg-gray-700 rounded mr-5 p-2">Login</p>
          </Link>
        ) : (
          <Link to={`/profile/${user.uid}`}>
            {user.photoURL ? (
              <img
                alt="Profile Avatar"
                className="w-10 h-10 mr-5 ml-5 rounded-full hover:scale-125"
                src={user.photoURL}
              />
            ) : (
              <GiPlagueDoctorProfile className="w-8 h-8 mr-5 ml-5  hover:scale-125" />
            )}
          </Link>
        )}
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
          {!user ? (
            <Link to={"/login"}>
              <p className=" p-2 ">Login</p>
            </Link>
          ) : (
            <Link to={`/profile/${user.uid}`}>
              <p className="p-2">Profile</p>
            </Link>
          )}
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;

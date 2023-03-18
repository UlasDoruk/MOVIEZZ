import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

function Navbar() {
  return (
    <div className="flex justify-around font-bold sm:text-2xl bg-slate-900 sticky top-0 text-white p-3">
      <Link to={"/"}>
        <p className="flex justify-center hover:scale-110 mt-1">
          MOVIEZZ <BiCameraMovie className="mt-1 ml-2" />
        </p>
      </Link>

      <div className="">
        <input
          className="p-2 font-normal text-black rounded focus:border-blue-500 "
          type={"text"}
          placeholder="Search a Movie"
        ></input>
        <button type="submit" className="ml-5 hover:scale-110 ">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="flex justify-center mt-1">
        <Link to={"/toprated"}>
          <p className="right-5  text-xl hover:scale-105">Top Rated</p>
        </Link>
        <Link to={"/login"}>
          <p className="right-5  text-xl hover:scale-105">Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

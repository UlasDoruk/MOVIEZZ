import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


import { BiCameraMovie } from "react-icons/bi";

function Navbar() {
  return (
    <div className="flex justify-between font-bold sm:text-2xl bg-gray-900 top-0 text-white p-3">
      <Link to={"/"}>
        <p className="flex justify-center hover:scale-110 mt-1">
          MOVIEZZ <BiCameraMovie className="mt-1 ml-2" />
        </p>
      </Link>
      <div className="flex justify-center space-x-5 lg:ml-36">
        <Link to={"/toprated"}>
          <p className="text-xl hover:scale-110 uppercase">Top Rated</p>
        </Link>
        <Link to={"/login"}>
          <p className="text-xl hover:scale-110 uppercase">Login</p>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
}

export default Navbar;

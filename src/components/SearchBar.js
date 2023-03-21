import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    // <div className="flex justify-center ">
    //   <input
    //     className="lg:pl-3 pl-1 font-mono lg:font-bold font-extralight text-black rounded "
    //     type={"text"}
    //     placeholder="Search a Movie"
    //   ></input>
    //   <button type="submit" className="lg:ml-5 ml-1 hover:scale-125 ">
    //     <AiOutlineSearch />
    //   </button>
    // </div>
    <div>
      {/* <label htmlFor="default-search" className="mb-2 text-sm font-bold text-gray-900 sr-only">Search</label> */}
      <div className="relative">
        <input
          type="text"
          className="  lg:w-96 w-full lg:p-4 p-2  text-sm text-gray-900  rounded"
          placeholder="Search a Movie"
          required
        ></input>
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded lg:px-4 px-2 lg:py-2 py-0 ">
          <AiOutlineSearch className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

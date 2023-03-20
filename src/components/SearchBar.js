import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className=" justify-center">
      <input
        className="pl-3 font-mono text-black rounded"
        type={"text"}
        placeholder="Search a Movie"
      ></input>
      <button type="submit" className="ml-5 hover:scale-125 ">
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default SearchBar;

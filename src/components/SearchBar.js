import { useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch,useSelector } from "react-redux";
import { fetchSearchedMovies } from "../redux/fetchApı";

// Icon
import { AiOutlineSearch } from "react-icons/ai";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SearchBar() {

  let dispatch =useDispatch()

  const status = useSelector((state) => state.movies.status);

  const [input,setInput] = useState("")
  
  const handleInput =()=>{
    if(input === "" ){
      toast.warn("Empty Search",{position:toast.POSITION.TOP_LEFT});
    }else{
      dispatch(fetchSearchedMovies(input))
      setInput("")
    }}

  return (
    <form onSubmit={handleInput}>
      <div className="relative">
        <input
          value={input}
          type="text"
          className="  lg:w-96 w-full lg:p-4 p-2 lg:ml-20 ml-2 text-sm text-gray-900  rounded"
          placeholder="Search a Movie"
          required
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <Link to={input && "/search"}>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded lg:px-4 px-2 lg:py-2 py-0 "
            onClick={() => handleInput()}
          >
            <AiOutlineSearch className="w-5 h-5" />
          </button>
        </Link>
      </div>
      <ToastContainer autoClose={2000} limit={3} />
    </form>
  );
}

export default SearchBar;

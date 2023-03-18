import { fetchUpcomingMovies } from "../../../redux/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function UpComingPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);


  return <div>UpComingPage</div>;
}

export default UpComingPage;

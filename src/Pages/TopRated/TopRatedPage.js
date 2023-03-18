import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SimilarMovies from "./SimilarMovies";
import Recommendations from "./Recommendations"

function TopRatedPage() {
  return (
    <>
      <Navbar/>
      <SimilarMovies />
      <Recommendations />
      <Footer/>
    </>
  );
}

export default TopRatedPage
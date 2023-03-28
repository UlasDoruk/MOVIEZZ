import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import TitleBar from "../../components/TitleBar";
import PopularPage from "./Extras/PopularPage"
import UpComingPage from "./Extras/UpComingPage"

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="lg:p-5 p-1">
        <TitleBar title="Popular Movies" />
        <PopularPage />
        <TitleBar title="Up Coming Movies" />
        <UpComingPage />
        <div className="lg:p-0 p-3 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage
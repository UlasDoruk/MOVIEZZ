import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import TitleBar from "../../components/TitleBar";
import PopularPage from "./Extras/PopularPage"
import UpComingPage from "./Extras/UpComingPage"

function HomePage() {
  return (
    <>
      <Navbar />
      <TitleBar title="Popular Movies"/>
      <PopularPage />
      <TitleBar title="Up Coming Movies"/>
      <UpComingPage />
      <Footer />
    </>
  );
}

export default HomePage
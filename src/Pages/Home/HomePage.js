import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import PopularPage from "./Extras/PopularPage"
import UpComingPage from "./Extras/UpComingPage"

function HomePage() {
  return (
    <>
    <Navbar/>
    <PopularPage/>
    <UpComingPage/>
    <Footer/>
    </>
  )
}

export default HomePage
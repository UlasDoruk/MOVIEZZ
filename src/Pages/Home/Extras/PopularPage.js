import { fetchPopularMovies } from "../../../redux/movieSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function PopularPage() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPopularMovies())
  },[dispatch])

  return (
    <div>PopularPage</div>
  )
}

export default PopularPage
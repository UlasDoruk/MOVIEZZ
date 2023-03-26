import { useSelector } from "react-redux";

function Footer() {

  const user = useSelector((state)=>state.auth.user)

  return (
    <div className="bg-slate-900 text-white bottom-0 w-full font-bold  flex justify-center lg:text-2xl text-sm mt-10 mb-2 align-middle">
      <a
        className="mt-3 ml-2"
        href="https://developers.themoviedb.org/3/getting-started"
      >
        <img
          alt="TMDB logo"
          className="lg:w-16 lg:h-16 h-12 w-12"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        ></img>
      </a>
      {user ? (
        <p className="bg-blue-400 rounded  lg:p-2 p-1 mx-5 my-4">Welcome {user.displayName}</p>
      ) : (
        <p className="bg-blue-400 rounded  lg:p-2 p-1 mx-5 my-4">Welcome</p>
      )}

      <h2 className="mt-5 mr-1 ml-2 tracking-tight">Created by UDK</h2>
    </div>
  );
}

export default Footer
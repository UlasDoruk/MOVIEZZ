
function Footer() {
  return (
    <div className="bg-slate-900 text-white bottom-0 w-full font-bold  flex justify-center lg:text-2xl text-sm mt-10 mb-2">
      <a
        className="m-2"
        href="https://developers.themoviedb.org/3/getting-started"
      >
        <img
          className="lg:w-16 lg:h-16 h-12 w-12"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        ></img>
      </a>
      <p className="bg-blue-400 rounded  lg:p-2 p-1 w-min h-min mr-5 ml-5 mt-4 mb-4 truncate">
        Welcome UDK
      </p>
      <h2 className="lg:mt-5 mt-3 mr-1 tracking-tight">Created by UDK</h2>
    </div>
  );
}

export default Footer
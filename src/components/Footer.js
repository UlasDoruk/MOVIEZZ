
function Footer() {
  return (
    <div className="bg-slate-900 text-white fixed bottom-0 w-full font-bold flex justify-center ">
        <a
          className="m-2"
          href="https://developers.themoviedb.org/3/getting-started"
        >
          <img
            className="w-16 h-16"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          ></img>
        </a>
        <p className="bg-blue-400 rounded p-1 w-min h-min m-5 truncate">
          Welcome UDK
        </p>
        <h2 className="mt-5 ">Created by UDK</h2>
    </div>
  );
}

export default Footer
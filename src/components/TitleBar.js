// Icon
import { BsClockHistory } from "react-icons/bs";
import { GiMountains } from "react-icons/gi";


function TitleBar(props) {
  return (
    <div className="flex justify-center text-black  mt-2 mb-3 opacity-30 ">
      <h1 className="font-mono lg:text-2xl text-base mr-2">{props.title}</h1>
      {props.title === "Popular Movies" ? (
        <GiMountains className="lg:w-8 lg:h-8 w-6 h-6 ml-5" />
      ) : (
        <BsClockHistory className="lg:w-8 lg:h-8 w-6 h-6 ml-5" />
      )}
    </div>
  );
}

export default TitleBar;

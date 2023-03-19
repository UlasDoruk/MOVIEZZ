// Icon
import { BsClockHistory } from "react-icons/bs";
import { GiMountains } from "react-icons/gi";


function TitleBar(props) {
  return (
    <div className="flex justify-center text-white p-2 bg-blue-800">
      <h1 className="font-mono text-2xl ">{props.title}</h1>
      {props.title === "Popular Movies" ? (
        <GiMountains className="w-8 h-8 ml-5" />
      ) : (
        <BsClockHistory className="w-8 h-8 ml-5" />
      )}
    </div>
  );
}

export default TitleBar;

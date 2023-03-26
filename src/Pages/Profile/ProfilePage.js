import { useState } from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

// Icon
import {IoCloseSharp} from "react-icons/io5"

// Firebase
import { logout } from "../../redux/firebaseSlice";

// Redux
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  let [updateSection,setUpdateSection] = useState(false) 

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const handleUpdateSection = ()=>{
    (updateSection === false ?
         setUpdateSection(true) : 
         setUpdateSection(false)
         )
  }

  return (
    <>
    <Navbar/>
      <div className="flex justify-start">
        <div className="bg-slate-100 rounded p-5 mt-5 w-screen h-screen ml-20">
          <p className="text-left font-bold text-lg opacity-70 ">
            Favorite Movies
          </p>
          <div className="w-full h-full flex justify-start mt-5">hi</div>
        </div>
        {updateSection ? (
          <div className="flex justify-center text-lg text-white  font-bold bg-blue-100 p-5 rounded mt-5 ml-20 mr-20 h-min">
            <form className="gap-4 flex flex-col items-end">
              <button
                className=" text-black mb-0 w-min rounded bg-red-500"
                onClick={handleUpdateSection}
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
              <div className=" flex-col">
                <h2 className="text-black text-left">E-mail</h2>
                <input
                  type={"email"}
                  placeholder={user.email}
                  value={email}
                  className="rounded"
                ></input>
                <button className="bg-green-500 p-2 rounded w-full mt-1">
                  Update
                </button>
              </div>
              <div>
                <h2 className="text-black text-left">Password</h2>
                <input
                  type={"password"}
                  placeholder={user.password}
                  value={password}
                  className="rounded"
                ></input>
                <button className="bg-green-500  p-2 rounded w-full mt-1">
                  Update
                </button>
              </div>
              <div>
                <h2 className="text-black text-left">Profile Name</h2>
                <input
                  type={"text"}
                  placeholder={user.displayName}
                  value={displayName}
                  className="rounded"
                ></input>
                <button className="bg-green-500  p-2 rounded w-full mt-1">
                  Update
                </button>
              </div>
              <button
                className="rounded bg-red-600 p-2 w-full mt-5 text-lg font-bold text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={handleUpdateSection}
            className="bg-green-500 p-2 font-bold text-white ml-20 mr-20 h-min mt-5 rounded"
          >
            Update
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProfilePage;

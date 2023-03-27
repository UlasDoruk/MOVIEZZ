import { useState } from "react";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

// Toastify
import { toast } from "react-toastify";

// Icon
import { IoCloseSharp} from "react-icons/io5";
import {IoMdEye} from "react-icons/io"
import {AiFillEyeInvisible} from "react-icons/ai"

// Firebase
import {
  logout,
} from "../../redux/firebaseSlice";
import { update, updateEMAİL, updatePASSWORD } from "../../Firebase/Firebase";

// Redux
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";

function ProfilePage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photo,setPhoto] = useState(user.photoURL || "")
  let [showPassword,setShowPassword] = useState(false)
  let [updateSection, setUpdateSection] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const handleUpdateSection = () => {
    updateSection === false ? setUpdateSection(true) : setUpdateSection(false);
  };

  const handleShowPassword = (e)=>{
    e.preventDefault()
    showPassword === false ? setShowPassword(true) : setShowPassword(false)
  }

  const handleUpdateName = async (e) => {
    e.preventDefault();
    if (displayName) {
      await update({displayName });
      toast.success("Profile Name Updated", {
        position: toast.POSITION.TOP_LEFT,
      });
    }else {
      toast.warning("Empty", { position: toast.POSITION.TOP_LEFT });
    }
    console.log(user);
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    if (email) {
      await updateEMAİL(email);
      toast.success("Profile Email Updated");
    } else {
      toast.warning("Empty Email", { position: toast.POSITION.TOP_LEFT });
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (password) {
      await updatePASSWORD(password);
      toast.success("Profile Password Updated");
    } else {
      toast.warning("Empty Password", { position: toast.POSITION.TOP_LEFT });
    }
  };

  const handleUpdateUserPhoto = async(e)=>{
    e.preventDefault()
    if(photo){
      await update({photoURL:photo})
      toast.success("Profile Avatar Updated", {
        position: toast.POSITION.TOP_LEFT,
      });
    }else{
      toast.warning("Empty Avatar URL", { position: toast.POSITION.TOP_LEFT });
    }
  }

  return (
    <>
      <Navbar />
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
                <IoCloseSharp className="w-6 h-6 text-white" />
              </button>
              <div className=" flex-col">
                <h2 className="text-black text-left">E-mail</h2>
                <input
                  type={"email"}
                  placeholder={user.email}
                  value={email}
                  className="rounded text-black"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <button
                  onClick={handleUpdateEmail}
                  className="bg-green-500 p-2 rounded w-full mt-1"
                >
                  Update
                </button>
              </div>
              <div className="relative">
                <h2 className="text-black text-left">Password</h2>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={"******"}
                  value={password}
                  className="rounded  text-black"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {showPassword ? (
                  <button
                    onClick={handleShowPassword}
                    className="rounded-full absolute -right-0 mt-3 mr-2 text-black"
                  >
                    <AiFillEyeInvisible />
                  </button>
                ) : (
                  <button
                    onClick={handleShowPassword}
                    className="rounded-full absolute -right-0 mt-3 mr-2 text-black"
                  >
                    <IoMdEye />
                  </button>
                )}

                <button
                  onClick={handleUpdatePassword}
                  className="bg-green-500  p-2 rounded w-full mt-1"
                >
                  Update
                </button>
              </div>
              <div>
                <h2 className="text-black text-left">Profile Name</h2>
                <input
                  type={"text"}
                  placeholder={user.displayName}
                  value={displayName}
                  className="rounded text-black"
                  onChange={(e) => setDisplayName(e.target.value)}
                ></input>
                <button
                  onClick={handleUpdateName}
                  className="bg-green-500  p-2 rounded w-full mt-1"
                >
                  Update
                </button>
              </div>
              <div className=" flex-col">
                <h2 className="text-black text-left">Avatar</h2>
                <input
                  type={"text"}
                  placeholder={"Image URL"}
                  value={photo}
                  className="rounded text-black"
                  onChange={(e) => setPhoto(e.target.value)}
                ></input>
                <button
                  onClick={handleUpdateUserPhoto}
                  className="bg-green-500 p-2 rounded w-full mt-1"
                >
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

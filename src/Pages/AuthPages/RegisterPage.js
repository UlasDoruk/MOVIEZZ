import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getRegister } from "../../redux/firebaseSlice";

// Icon
import { GrLogin } from "react-icons/gr";

// Firebase
import { register } from "../../Firebase/Firebase";


function RegisterPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password,name);
    dispatch(getRegister(user));
    navigate("/",{replace:true})
  };

  return (
    <>
      <Navbar />
      <h1 className="text-black font-bold text-2xl flex justify-center pt-10">
        Sign up
        <GrLogin className="mt-1.5 ml-2" />
      </h1>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-4 lg:p-0 lg:w-1/3 lg:pt-10 lg:pb-5 p-5 text-left"
          onSubmit={handleSubmit}
        >
          <input
            type={"email"}
            placeholder="example@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-3 rounded"
          ></input>
          <input
            type={"password"}
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-3 rounded"
          ></input>
          <input
            type={"text"}
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-3 rounded"
          ></input>
          <button
            disabled={!email || !password || !name}
            type="submit"
            className="disabled:opacity-70 cursor-pointer bg-blue-700 rounded-lg p-2 font-bold text-white hover:bg-blue-600 w-full mb-3"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="lg:flex fixed w-full bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default RegisterPage;

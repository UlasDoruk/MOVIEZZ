import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Router
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../../redux/firebaseSlice";

// Icon
import { GrLogin } from "react-icons/gr";

// Firebase
import { login } from "../../Firebase/Firebase";

function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if(user){
    dispatch(loginHandle(user));
    navigate("/", { replace: true })
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-black font-bold text-2xl flex justify-center pt-10 ">
        Login <GrLogin className="mt-1 ml-2" />
      </h1>
      <div className="flex justify-center p-5 lg:p-2 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 lg:p-0 lg:w-1/3 lg:pt-10 lg:pb-5 text-left "
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
          <div className="mt-3 mb-3">
            <button
              disabled={!email || !password}
              type="submit"
              className="disabled:opacity-70 cursor-pointer bg-blue-700 rounded-lg p-2 font-bold text-white hover:bg-blue-600 w-full mb-3"
            >
              Submit
            </button>
            <span className="font-bold opacity-70 text-lg ">
              Don’t have an account yet?
              <Link className="underline text-blue-700 ml-2" to={"/register"}>
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="lg:flex fixed w-full bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;

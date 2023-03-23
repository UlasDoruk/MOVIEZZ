import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Label,TextInput,Button } from "flowbite-react";
import { Link } from "react-router-dom";


function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <form className="flex flex-col gap-4 lg:p-0 lg:w-1/3 lg:pt-10 lg:pb-5 p-5 text-left">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <Button type="submit">Submit</Button>
          <Link to={"/register"}>
            <Button className="w-full">Register</Button>
          </Link>
        </form>
      </div>

      <div className="lg:flex fixed w-full bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default LoginPage
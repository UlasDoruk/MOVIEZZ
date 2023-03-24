import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Icon
import { GrLogin } from "react-icons/gr";

// Flowbite
import { Label, TextInput, Button } from "flowbite-react";

function RegisterPage() {
  return (
    <>
      <Navbar />
      <h1 className="text-black font-bold text-2xl flex justify-center pt-10">
        Sign up 
        <GrLogin className="mt-1.5 ml-2" />
      </h1>
      <div className="flex justify-center">
        <form className="flex flex-col gap-4 lg:p-0 lg:w-1/3 lg:pt-10 lg:pb-5 p-5 text-left">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id=""
              type="text"
              required={true}
              shadow={true}
            />
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>

      <div className="lg:flex fixed w-full bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default RegisterPage;

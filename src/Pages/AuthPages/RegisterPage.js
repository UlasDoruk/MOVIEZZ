import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Label, TextInput, Button } from "flowbite-react";

function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        {" "}
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
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="password"
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

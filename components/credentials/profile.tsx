import React, { useEffect, useState, useContext } from "react";
import BlogCard from "../blog/blogCard";
import demoProduct from "@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg";
import Nav from "../header/nav";
import Services from "../layout/services";
import OtherInfo from "../layout/otherInfo";
import Footer from "../layout/footer";
import Link from "next/link";
import Login from "./login";
import { GeneralContext } from "@/context/context";
import { useRouter } from 'next/router';

const Profile: React.FC = () => {
  const router = useRouter();
  const { activateActionStatus } = useContext(GeneralContext);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    console.log("yea");
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      activateActionStatus({
        text: `You are not Logged in. 
              Please Login to view your`,
        type: "negative",
      });
    }
  }, []);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Nav />
      <div className="m-2">
        <div>
          <button className="p-2 border text-dangerColor" onClick={()=>{
            localStorage.removeItem('token');
            router.push('/login')
            }}>Delete Profile</button>
          <h1 className="text-3xl font-bold text-center">
            Suscriber
            <span className="text-primaryColor"> Profile </span>
          </h1>
        </div>
        <section className="my-6 py-3 border px-2 rounded-md border-primaryColor">
          <form
            method="post"
            onSubmit={(e) => submitForm(e)}
            className="mx-auto my-6 max-w-[500px]"
          >
            <div className="form-group">
              <input
                name="firstName"
                placeholder="First Name"
                className="rounded-md placeholder:text-[transparent] outline-primaryColor placeholder:font-bold"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                id="firstName"
                required
              />
              <label
                htmlFor="firstName"
                className="text-xl font-bold text-primaryColor"
              >
                First Name
              </label>
            </div>
            <div className="form-group">
              <input
                name="lastName"
                placeholder="lastName"
                className="rounded-md placeholder:text-[transparent] outline-primaryColor placeholder:font-bold"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                id="lastName"
                required
              />
              <label
                htmlFor="lastName"
                className="text-xl font-bold text-primaryColor"
              >
                Last Name
              </label>
            </div>
            <div className="form-group">
              <input
                name="email"
                placeholder="email"
                className="rounded-md placeholder:text-[transparent] outline-primaryColor placeholder:font-bold"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                required
              />
              <label
                htmlFor="email"
                className="text-xl font-bold text-primaryColor"
              >
                Email
              </label>
            </div>
            <div className="form-group">
              <input
                name="password"
                placeholder="password"
                className="rounded-md placeholder:text-[transparent] outline-primaryColor placeholder:font-bold"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                required
              />
              <label
                htmlFor="password"
                className="text-xl font-bold text-primaryColor"
              >
                Password
              </label>
            </div>
            <div className="flex justify-center">
              <button
                title="Login"
                className="border font-extrabold text-2xl p-3 rounded-md text-[white] bg-primaryColor hover:bg-secondaryColor focus:bg-secondaryColor"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center text-2xl">
            <em> Not registered? </em>
            <Link className="text-[blue]" title="register" href={"/register"}>
              Register
            </Link>
          </div>
        </section>
        <Services />
        <OtherInfo />
        <Footer />
      </div>
    </>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import BlogCard from "../blog/blogCard";
import demoProduct from "@/assets/drugs/alexander-grey-FEPfs43yiPE-unsplash.jpg";
import Nav from "../header/nav";
import Services from "../layout/services";
import OtherInfo from "../layout/otherInfo";
import Footer from "../layout/footer";
import Link from "next/link";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const arr: number[] = [];
  for (let i: number = 0; i < 10; i++) {
    arr.push(i);
  }

  //  function blur(e: React.FocusEvent) {
  //    // console.log('log1', e.target.value)
  //    const targetElement = e.target as HTMLInputElement;
  //    if (targetElement.value === '') {
  //       // console.log('yea1', e.target.value)
  //       targetElement.classList.remove('active');
  //    }
  //  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    console.log("yea");
  }

  return (
    <>
      <Nav />
      <div className="m-2">
        <div>
         <h1 className="text-3xl font-bold text-center">
           <span className="text-primaryColor"> Register </span> an account
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
              <button title='Register' className="border font-extrabold text-2xl p-3 rounded-md text-[white] bg-primaryColor hover:bg-secondaryColor focus:bg-secondaryColor" type="submit">Register</button>
            </div>
          </form>
          <div className="text-center text-2xl">
            <em> Already registered? </em>
            <Link className="text-[blue]" title="register" href={'/login'}>
              Login
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

export default Register;
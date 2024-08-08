import React from "react";
import Logo from "../images/shopyfy-transparent.png";
import laptopImage from "../images/laptop-macbook.jpg";
import Header from "../Layout/header";

function Signup() {
  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen overflow-hidden"
        style={{ backgroundImage: `url(${laptopImage})` }}
      >
        <Header />

        <div className="relative isolate flex items-center justify-center min-h-screen px-6 pt-14 lg:px-8 bg-gray-100 bg-opacity-30">
          <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-lg py-8 px-6 sm:py-12 sm:px-10">
            <div className="flex justify-center mb-6">
              <img alt="Your Company" src={Logo} className="h-10 w-auto" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4">
              Register your Account
            </h2>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="confirm password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-2 text-center text-sm text-gray-500">
              Already have an account ?
              <a
                href="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                &ensp;Login here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

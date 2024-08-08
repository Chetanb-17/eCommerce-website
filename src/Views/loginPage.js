import React, { useState } from "react";
import Logo from "../images/shopyfy-transparent.png";
import laptopImage from "../images/laptop-macbook.jpg";
import Header from "../Layout/header";
import Divider from "../Components/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  return (
    <>

      {/* <Header /> */}
      <div className="relative isolate flex items-center justify-center min-h-screen px-6 pt-6 lg:px-8 bg-gray-100 bg-opacity-30">
        <div className="mx-auto w-3/4  bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div class="bg-indigo-600"> </div>
            <div className="py-1 px-1 sm:py-12 sm:px-24">
              <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Log in to your Account
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Welcome back! Select method to login
              </p>
              <br />
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
                    <div className="text-sm">
                      <a
                        href="/login"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <p className="mt-2 text-center text-sm text-gray-500">
                Don't have an account?
                <a
                  href="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  &ensp;Create an account
                </a>
              </p>

              <Divider text={"or continue with"} />

              <div className="flex align-center justify-evenly space-x-6">
                <button
                  type="submit"
                  className="flex w-full justify-center items-center rounded-md border bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm  "
                >
                  Google &ensp;
                  <FontAwesomeIcon icon={faGoogle} className="text-indigo-600" />
                </button>

                <button
                  type="submit"
                  className="flex w-full align-center justify-center items-center rounded-md border bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm  "
                >
                  FaceBook&ensp;
                  <FontAwesomeIcon icon={faFacebook} className="text-indigo-600" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
}

export default Login;

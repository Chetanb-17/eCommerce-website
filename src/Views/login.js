import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../images/shopyfy-transparent.png";
import laptopImage from "../images/laptop-macbook.jpg";
import Header from "../Layout/header";
import Divider from "../Components/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Userdata:", userCredential.user, userCredential.user.email);
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Userdata:", user);
      toast.success("Google login successful!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      toast.error("Google login failed: " + err.message, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center min-h-screen overflow-hidden"
        style={{ backgroundImage: `url(${laptopImage})` }}
      >
        <Header />
        <ToastContainer />
        <div className="relative isolate flex items-center justify-center min-h-screen px-6 pt-14 lg:px-8 bg-gray-100 bg-opacity-30">
          <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-lg py-8 px-6 sm:py-12 sm:px-10">
            <div className="flex justify-center mb-6">
              <img alt="Your Company" src={Logo} className="h-10 w-auto" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4">
              Log in to your Account
            </h2>

            {error && (
              <p className="text-center text-sm text-red-500 mb-4">
                {error}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      href="/forgot-password"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-2 text-center text-sm text-gray-500">
              Don't have an account?
              <a
                href="/signUp"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                &ensp;Create an account
              </a>
            </p>

            <Divider text={"Continue"} />

            <div className="flex align-center justify-evenly space-x-6">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex w-full justify-center items-center rounded-md border bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm"
              >
                Google &ensp;
                <FontAwesomeIcon icon={faGoogle} className="text-blue-600" />
              </button>

              <button
                type="button"
                className="flex w-full align-center justify-center items-center rounded-md border bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm"
              >
                Facebook&ensp;
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

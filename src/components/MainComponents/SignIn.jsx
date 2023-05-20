import React, { useContext, useState } from "react";
import NavBar from "../SharedPages/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialButton from "../SharedPages/SocialButton";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const SignIn = () => {

  useTitle('Sign-In');
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {signInUser} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signIn";


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError("login data didn't match");
      });
    form.reset();
    setError("");
    setSuccess("");
  };


  return (
    <>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-orange-50">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen flex my-auto w-full md:w-1/2 lg:text-left">
            <img
              className="h-96 my-auto flex rounded-md"
              src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body p-3">
              <h1 className="text-4xl font-bold text-center text-orange-400  rounded-md inline-block p-2">
                Sign In
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-orange-400">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-orange-400">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
                <label className="label inline-block">
                  New here?
                  <Link
                    to="/signUp"
                    className="label-text-alt text-orange-400 font-bold text-base link link-hover"
                  >
                    Sign up here
                  </Link>
                </label>
              </div>
              <p className="text-red-700 text-lg">{error}</p>
              <p className="text-green-500 text-lg">{success}</p>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-warning">Sign in</button>
              </div>
              <SocialButton></SocialButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

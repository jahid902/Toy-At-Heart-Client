import React from "react";
import NavBar from "../SharedPages/NavBar";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-orange-50">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen w-full md:w-1/2 lg:text-left">
            <img
              src="https://cdn-lite.ip2location.com/img/sign-up.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form className="card-body p-3">
              <h1 className="text-4xl font-bold text-center text-orange-400  rounded-md inline-block p-2">
                Sign up now!!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-orange-400">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-orange-400">Email</span>
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
                  <span className="label-text text-lg font-bold text-orange-400">Image</span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Image url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold text-orange-400">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type your password"
                  className="input input-bordered"
                  required
                />
                <label className="label inline-block">
                  Already have an account?
                  <Link
                    to="/signIn"
                    className="label-text-alt text-orange-400 font-bold text-base link link-hover"
                  >
                    Sign in here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-warning">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

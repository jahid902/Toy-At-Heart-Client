import React from 'react';
import NavBar from '../SharedPages/NavBar';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="hero min-h-screen bg-orange-50">
        <div className="hero-content flex-col lg:flex-row gap-6 md:gap-16">
          <div className="text-center md:min-h-screen flex my-auto w-full md:w-1/2 lg:text-left">
            <img className='h-96 my-auto flex rounded-md'
              src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md  shadow-2xl bg-base-100">
            <form className="card-body p-3">
              <h1 className="text-4xl font-bold text-center text-orange-400  rounded-md inline-block p-2">
                Sign In
              </h1>
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
                  <span className="label-text text-lg font-bold text-orange-400">Password</span>
                </label>
                <input
                  type="password"
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
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-warning">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
            
        </>
    );
};

export default SignIn;
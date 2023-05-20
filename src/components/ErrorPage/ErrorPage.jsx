import React from "react";
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
    <div
      className="hero h-48 md:h-96 mt-8"
      style={{
        backgroundSize: "contain",
        backgroundImage: `url("https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000")`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-yellow-300 font-bold">{error?.message}</h1>
          <p className="text-3xl text-yellow-300 my-3">
            {status || 404}
          </p>
          <Link to="/"><button className="btn btn-outline btn-warning">Take me home</button></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ErrorPage;

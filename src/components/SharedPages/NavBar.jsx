import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
      })
      .catch((e) => {
        const error = e.message;
      });
  };

  return (
    <div className="navbar bg-orange-200 rounded-md ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-400 rounded-box w-52"
          >
            <li>
              <Link className="text-base font-medium" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-base font-medium" to="/allToy">
                Toys
              </Link>
            </li>
            {
              user && <li>
              <Link className="text-base font-medium" to="/addToy">
                Add Toys
              </Link>
            </li>
            }
            {
              user && <li>
              <Link className="text-base font-medium" to="/myToy">
                My Toys
              </Link>
            </li>
            }
            <li>
              <Link className="text-base font-medium" to="/blog">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="text-base font-medium" to="/signUp">
                Sign up
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="text-base font-medium"
                >
                  Sign Out
                </button>
              ) : (
                <Link className="text-base font-medium" to="/signIn">
                  Sign In
                </Link>
              )}
            </li>
            <li>
            {
              user && <p>{user.email}</p>
            }
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src="/toy-shop.png" className="w-10 h-10" alt="" />
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl font-bold text-orange-500"
        >
          {" "}
          Toy At Heart
        </Link>
      </div>
      <div className="navbar-end">
        {user ? (
          <img  className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        ) : (
          <button className="btn btn-ghost btn-circle">
            <Link to="/signIn"><img src="/profile.png" className="w-10 h-10" alt="" /></Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

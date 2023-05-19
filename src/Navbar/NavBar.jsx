import React from "react";
import logo from "../assets/logo/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>My Toys</Link>
      </li>
      <li>
        <Link>Add a Toys</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 my-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="max-w-[250px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* <Link className="btn btn-outline border-[#FF3811] text-[#FF3811]">
          Appointment
        </Link> */}
        {/* {user ? (
          <>
            <p>Welcome {user.displayName} !</p>
            <Link>
              <button className="btn ml-4">Logout</button>
            </Link>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn ml-4">Login</button>
          </Link>
        )} */}
        <Link to={"/login"}>
          <button className="btn ml-4 bg-[#ECCC68] text-gray-900 border-none hover:text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

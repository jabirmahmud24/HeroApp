import { Github } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
              <NavLink to="/instalation">Instalation</NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl">
          <img className="h-8 w-8" src="/logo.png" alt="" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li className="hover:font-bold hover:text-[#632EE3] hover:underline">
            <NavLink to="/instalation">Instalation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="https://github.com/jabirmahmud24"
          className="btn text-white font-semibold bg-gradient-to-r from-[#632EE3]
          to-[#9F62F2]"
        >
          <Github color="white" size={22} /> Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div className="max-w-full bg-base-100 shadow-sm">
      <div className="navbar  md:max-w-11/12 mx-auto">
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
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-medium text-[16px]">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className="font-medium text-[16px]">
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className="font-medium text-[16px]">
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-10" alt="" />
            <h2 className="font-bold text-[20px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="font-medium text-[16px]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="font-medium text-[16px]">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="font-medium text-[16px]">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/sintiarahman"
            target='_blank'
            className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = ({ children }) => {
  const menuItem = (
    <>
      <li>
        <NavLink className="text-white" to={"/home"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to={"/"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to={"/dashboard"}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink className="text-white" to={"/"}>
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <header>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-secondary">
            <div className="flex-1 px-2 mx-2">
              <img src={logo} alt="" />
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-2" className="btn mr-3 lg:hidden">
                Dashboard
              </label>
              <label htmlFor="my-drawer-3" className="btn btn-square btn-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menuItem}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-secondary">
            {/* <!-- Sidebar content here --> */}
            {menuItem}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

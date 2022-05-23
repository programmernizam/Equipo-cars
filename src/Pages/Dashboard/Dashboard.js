import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* <!-- Page content here --> */}
          <h2 className="text-primary text-3xl">Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-secondary text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink className="my-2" to={"/dashboard"}>My Orders</NavLink>
            </li>
            <li>
              <NavLink className="my-2" to={"/dashboard/my_profile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink className="my-2" to={"/dashboard/add_review"}>Add a review</NavLink>
            </li>
            <li>
              <NavLink className="my-2" to={"/dashboard/add_product"}>Add a Product</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
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
              <NavLink className="my-2" to={"/dashboard"}>
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink className="my-2" to={"/dashboard/add_review"}>
                Add a review
              </NavLink>
            </li>
            {admin && (
              <li>
                <NavLink className="my-2" to={"/dashboard/add_product"}>
                  Add a Product
                </NavLink>
              </li>
            )}
            {admin && (
              <li>
                <NavLink className="my-2" to={"/dashboard/manage_order"}>
                  All Orders
                </NavLink>
              </li>
            )}
            {admin && (
              <li>
                <NavLink className="my-2" to={"/dashboard/manage_product"}>
                  Manage Products
                </NavLink>
              </li>
            )}
            {admin && (
              <li>
                <NavLink className="my-2" to={"/dashboard/make_admin"}>
                  Make Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

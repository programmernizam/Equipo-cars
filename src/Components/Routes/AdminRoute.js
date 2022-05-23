import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
// import Loading from "../../Pages/Shared/Loading";

const AdminRoute = () => {
  const location = useLocation();
  const [admin] = useAdmin();

  //   if (loading) {
  //     return <Loading></Loading>;
  //   }

  if (!admin) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return <Outlet />;
};

export default AdminRoute;

import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import BlogContext from "../context/blog/BlogContext";
function PrivateRoute() {
  const { user } = useContext(BlogContext);

  return user !== null ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import path from "../../pages/routes-path.json";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return <>{isAuthenticated ? <>{children} </> : <Navigate to={path.login} />}</>;
};

export default PrivateRoute;

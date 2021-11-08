import React from "react";
import { Navigate, Route, Routes } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  //const {children,...rest}=props
  const { user } = useAuth();

  return user.email || user.displayName ? (
    children
  ) : (
    <Navigate replace to="/login" />
  );
};

export default PrivateRoute;

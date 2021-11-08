import React from "react";
import { Navigate, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  //const {children,...rest}=props
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          // <Redirect
          //   to={{
          //     pathname: "/login",
          //     state: { from: location },
          //   }}
          // />
          <Navigate
            replace
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;

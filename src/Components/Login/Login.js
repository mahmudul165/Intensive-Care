import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { user, error, SignInUsingGoogle, SignInUsingGit, handleSignOut } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-2 px-3 text-center">
      <h3 className="text-primary">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-2">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your email address"
          {...register("email")}
          className="my-2 p-2"
        />
        <br />
        <input
          placeholder="Type your password"
          {...register("password", { required: true })}
          className="my-2 p-2"
        />
        {errors.password && <span>This field is required</span>} <br />
        <input className="btn btn-primary" type="submit" />
      </form>
      <p>
        Are you New user? <Link to="/register">sign up</Link>
      </p>
      {/* sign in with google */}
      <div>---------OR---------</div>
      <button onClick={SignInUsingGoogle} className="btn btn-primary mx-3">
        Login with Google
      </button>
      <button onClick={SignInUsingGit} className="btn btn-primary">
        Login with Github
      </button>
    </div>
  );
};

export default Login;

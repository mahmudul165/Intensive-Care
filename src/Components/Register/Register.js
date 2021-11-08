import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    setuser,
    error,
    seterror,
    newRegisterUser,
    SignInUsingGoogle,
    SignInUsingGit,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setuser(data);
  return (
    <>
      <div className="my-2 text-center my-4 px-3">
        <h3 className="text-primary">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)} className=" p-2">
          <input
            defaultValue=""
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
          <input
            defaultValue=""
            placeholder="your phone number"
            {...register("phone")}
            className="my-2 p-2"
          />
          <br />
          <input
            defaultValue=""
            placeholder="your  address"
            {...register("address")}
            className="my-2 p-2"
          />
          <br />
          <input
            className="btn btn-primary"
            onClick={newRegisterUser}
            type="submit"
          />
        </form>
        <p>
          Are you Already register? <NavLink to="/login">Login</NavLink>
        </p>
        {/* sign in with google */}
        <div>--------OR----------</div>
        <button onClick={SignInUsingGoogle} className="btn btn-primary mx-3">
          Login with Google
        </button>
        <button onClick={SignInUsingGit} className="btn btn-primary">
          Login with Github
        </button>
        <h1 className="text-center my-3 py-2 text-warning">{error}</h1>
      </div>
    </>
  );
};

export default Register;

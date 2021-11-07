import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Contract/Contract.css";
const Contract = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contract-img  text-primary  ">
      <div className="container m-auto     ">
        <div className="text-center p-4 m-3">
          <h5>CONTACT US</h5>
          <h2>Always Connect With Us</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3  ">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-3  ">
            <label for="exampleFormControlInput1" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="your subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Describe Your issue
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("description")}
            ></textarea>
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contract;

import React from "react";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>
          <button className="btn btn-success " type="submit">
            Update
          </button>
          <Link to="/" className="btn btn-info ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;

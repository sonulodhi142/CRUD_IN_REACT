import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



const Update = () => {
  const navigate = useNavigate()
  const [values, setvalues] = useState({
      name :"",
      email : "",
      phone : ""
  })
  const {id} = useParams()
  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then(result => setvalues(result.data))
    .catch(error => console.log(error));
  },[])

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setvalues({...values, [name]:value})
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:3000/users/'+id, values)
    .then(result => console.log(result))
    navigate('/')
  }
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              value={values.name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              value={values.email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input
              onChange={handleChange}
              value={values.phone}
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

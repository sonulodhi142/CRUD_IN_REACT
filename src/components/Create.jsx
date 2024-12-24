import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Create = () => {
  const [values, setvalues] = useState({
    name :"",
    email : "",
    phone : ""
})

const handleChange = (e) =>{
  const {name, value} = e.target;
  setvalues({...values, [name]:value})
}
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(values)
}
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={handleChange} value={values.name}  className='form-control' placeholder='Enter Name' />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' onChange={handleChange} value={values.email}   className='form-control' placeholder='Enter Email' />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input type="number" name='phone' onChange={handleChange} value={values.phone}   className='form-control' placeholder='Enter Phone' />
          </div>
          <button className='btn btn-success ' type='submit'>Submit</button>
          <Link to='/' className='btn btn-info ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
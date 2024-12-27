import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(result => setData(result.data))
    .catch(error => console.log(error));
  },[])

  const deleteHandle = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setData((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }
    catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of User</h1>
      <div className='w-75 rounder bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/create' className='btn btn-success'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <Link to={`/read/${d.id}`}><button className='btn btn-sm btn-info me-2'>View </button></Link>
                    <Link to={`/update/${d.id}`}><button className='btn btn-sm btn-primary me-2'>Edit </button></Link>
                    <button onClick={()=>deleteHandle(d.id)} className='btn btn-sm btn-danger me-2'>Delete </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const Read = () => {
  const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then(result => setData(result.data))
    .catch(error => console.log(error));
  },[])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of User</h1>
      <div className='w-75 rounder bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/' className='btn btn-success'>Back</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              
            </tr>
          </thead>
          <tbody>
            
                <tr >
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  
                </tr>
              
            
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Read
import React from 'react'
import { Link } from 'react-router-dom'


const Read = () => {
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
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              
            </tr>
          </thead>
          <tbody>
            
                <tr >
                  <td>0000</td>
                  <td>0000</td>
                  <td>000</td>
                  <td>0000</td>
                  
                </tr>
              
            
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Read
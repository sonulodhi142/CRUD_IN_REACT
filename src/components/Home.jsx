import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(result => console.log(result))
    .catch(error => console.log(error));
  },[])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of User</h1>
      <div className='w-75 rounder bg-white border shadow p-4'>

      </div>
    </div>
  )
}

export default Home
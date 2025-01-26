import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DjangoApi = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/')
        .then((result)=> setData(result.data))
        .catch({'error': "data not found"})
    },[])

    console.log(data)


  return (
    <div>D
        {
            data.map((post, id)=>(
                <div key={id}>
                    <h3>{post.title}</h3>
                    <h4>{post.des}</h4>
                    <img src={ `http://127.0.0.1:8000/${post.image}`} alt={post.image} />
                </div>
            ))
        }
    </div>
  )
}

export default DjangoApi
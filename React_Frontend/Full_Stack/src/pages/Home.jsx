import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Home = () => {

  const[users,setUsers] = useState([])

  // const {id} = useParams()

  useEffect(()=>{
    loadUsers()
  },[])

  const loadUsers = async ()=>{
    const result = await axios.get("http://localhost:9191/user").catch(()=>(
      console.log("err",err)
    ))
    setUsers(result.data)
  }

  const deleteUser = async(id) => {
    console.log("In axios")
      await axios.delete(`http://localhost:9191/user/${id}`)
      loadUsers()
  }

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

        {
          users.map((user,index)=>(
            <tr>
            <th scope="row" key={index}>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <button type="button" className="btn btn-primary mx-2">View</button>
            <Link type="button" className="btn btn-outline-primary mx-2"
              to={`/edituser/${user.id}`}
            >Edit</Link>
            <button type="button" className="btn btn-danger mx-2"
            onClick={() => deleteUser(user.id)}
            >Delete</button>
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

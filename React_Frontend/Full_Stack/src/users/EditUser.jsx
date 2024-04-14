import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  
 
  const[user,setUser] = useState({
    name:"",
    username:"",
    email:""
  })
  const {id} = useParams();

  let navigate = useNavigate()

  const{name,username,email} = user

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
    console.log(e.target);
}

  useEffect(() => {
    loadUser();
  },[])
  const onSubmit = async (e) => {
       e.preventDefault()
      await axios.put(`http://localhost:9191/user/${id}`,user)
      navigate("/")
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9191/user/${id}`).catch((e)=> 
    console.log("error : ",e)
    )
    setUser(result.data);
  };

  

  return (
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-3 border round p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Edit User</h2>
              <form onSubmit={(e) => onSubmit(e)}>
              <div className='md-3'>
                <label htmlFor="Name" className='form-label'>
                  Name
                </label>
                <input 
                type={"text"}
                className='form-control' 
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
                 />
                 <label htmlFor="UserName" className='form-label'>
                 UserName
                </label>
                <input 
                type={"text"}
                className='form-control' 
                placeholder='Enter your Username'
                name='username'
                value={username}
                onChange={(e)=>onInputChange(e)}
                 />
                 <label htmlFor="Email" className='form-label'>
                  Email
                </label>
                <input 
                type={"text"}
                className='form-control' 
                placeholder='Enter your Email'
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}
                 />
              </div>
              <br />
              <button type="submit" class="btn btn-outline-primary">Submit</button>
              <Link class="btn btn-outline-danger mx-2" to='/'>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
    );
}

export default EditUser


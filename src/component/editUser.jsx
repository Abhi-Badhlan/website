import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router'

const EditUsers=()=>{
  const[user,setUser]=useState({
name:"",
    username:"",
    email:'',
    mobile:'',
    website:''
   
  })
const history=useHistory();
const {id}=useParams();

useEffect(()=>{
loadUsers();
},[])

const { name,username,email,mobile,website }=user;
  const onChangeHandler=(e)=>{

   setUser({...user,[e.target.name]:e.target.value})

  }

  const onSubmitHandler= async(e)=>{
     e.preventDefault();
     await Axios.put(`http://localhost:3003/users/${id}`,user)
     history.push('/about')

  }
  const loadUsers= async ()=>{
      const result= await Axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data)
  }
return(
    <>
    <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <form className='col-6 align-content-between' onSubmit={e=>onSubmitHandler(e)}>
  <div className="mb-3 ">
    <label for="" className="form-label">Name</label>
    <input type="text" className="form-control" name= 'name' value={name} 
    onChange={(e)=>onChangeHandler(e)}
    />
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Username</label>
    <input type="text" className="form-control" name='username' value={username}
    onChange={(e)=>onChangeHandler(e)}
    aria-hidden='false'/>
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Email</label>
    <input type="email" className="form-control" name='email'
    onChange={(e)=>onChangeHandler(e)}
    value={email}/>
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Mobile</label>
    <input type="number" className="form-control" name='mobile' onChange={(e)=>onChangeHandler(e)}value={mobile} />
    
  </div>
  
  <div className="mb-3">
    <label for="" className="form-label">Website</label>
    <input type="text" className="form-control" name='website' onChange={(e)=>onChangeHandler(e)} value={website} />
    
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </div>

    </div>
    
    </>
)
}
export default EditUsers;
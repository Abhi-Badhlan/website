import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router'
 

const View=()=>{
const [user,setUser]=useState({
    name:"",
        username:"",
        email:'',
        mobile:'',
        website:''
       
      })
      const { name,username,email,mobile,website }=user;
const {id}=useParams();

useEffect(()=>{
   loadUsers(); 
},[])
const loadUsers= async ()=>{
    const result= await Axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data)
}
    return(
        
    <div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto'>
        <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{email}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{website}</li>
    <li class="list-group-item">{username}</li>
    <li class="list-group-item">{mobile}</li>
  </ul>
  
</div>
        </div>
    </div>

</div>
      
    )

 }
 export default View;
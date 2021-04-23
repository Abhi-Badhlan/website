import React from 'react'
import web from '../images/img2.jpeg'

const Home=() =>{
  return (
    <>
     <div className='container-fluid'>
       <div className='row'>
         <div className='col-10 mx-auto'>
           <div className='row'>
           <div className='col-md-6 pt-5 pt-lg-5  order-1 order-lg-2'>
           <h1>Grow your business with <strong className=''>Abhi Technical</strong></h1>  
           <h2 className='my-3'>
             We are the team of talented developers making websites 
           </h2>
           <div className='mt-3'>
          <a href='' className='btn btn-success'>Get Started</a>
           </div>
           </div>  

           <div className='col-lg-6 order-1 order-lg-2 header-image'>
             <img src={web} className='img-fluid pt-lg-4' alt='home img' /> 
             </div>       
             </div>
           </div>

       </div>
     </div>
    </>
  )
}

export default Home;

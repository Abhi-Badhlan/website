import React from 'react'
import web from '../images/2.png'


const Home=() =>{
  return (
    
 <div className=''>     
   <div className='container-fluid'>
       <div className='row'>
         <div className='col-10 mx-auto'>
           <div className='row'>
           <div className='col-md-6 pt-5 pt-lg-5 mt-5 pe-5  order-1 order-lg-2'>
           <h1>Grow your business with <strong className='p'>Magical Hands</strong></h1>  
           <h2 className='my-3'>
             We are the team of talented developers making websites 
           </h2>
           <div className='mt-3'>
          <a href='/service' className='btn btn-success'>Get Started</a>
           </div>
           </div>  
         
           <div className='col-lg-6 order-1 order-lg-2  mt-5 ps-ps-5'>
             <img src={web} className='' alt='abc' height='100%' width='70%'/> 
             </div>       
             </div>
           </div>

       </div>
     </div>
     </div>

    
  )
}

export default Home;

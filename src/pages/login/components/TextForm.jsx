import React from 'react'
import logo from '../../../../assets/logo.png';
import './loginForm.css'

const TextForm = () => {
  return (
    <>
    <div className='text-right text-6xl font-black mt-40 mr-10'>
        <h1>
        El Patojismo’s Daniel
        </h1>
        <h1>
            Padnos Wellness Center
        </h1>
       <h1>
        WebApp
       </h1>
     <div className='text-4xl mt-40'>
        <h1>
            v1.0
        </h1>
     </div>
    
    <div className='grid grid-cols-2'>
        <div  className= 'mt-40 ml-96 w-64'>
       <img src={logo} alt="" /> 
      </div>  
      <div  className= 'mt-40 ml-56 w-64'>
       <img src={logo} alt="" /> 
      </div>  
    </div>
    
      
    </div>
    </>
  )
}

export default TextForm
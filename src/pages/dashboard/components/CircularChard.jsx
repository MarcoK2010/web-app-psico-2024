import React from 'react'
import './circularChard.css'

const CircularChard = ({porncentaje}) => {
  return (
    <>
    <div className="col-start-3 col-end-3 pb-10 px-10">
        <div className="card w-80 py-4  shadow-2xl">
          <div className="card-body items-center text-center">
         <h1 className='font-bold text-2xl '>
         Assistance
         </h1>
          <div className="radial-progress " style={{ "--value":porncentaje, "--size": "7.5rem", "--thickness": "1rem", }} role="progressbar"><h1 className='text-black text-2xl'>{porncentaje}</h1></div>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default CircularChard
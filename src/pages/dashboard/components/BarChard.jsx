import React from 'react'
import './barChard.css'

const BarChard = () => {
  return (
    <>
        <div className="col-start-3 col-end-3 pb-10 md:px-20">
        <div className="card w-80 py-4  shadow-2xl">
          <div className="card-body items-center text-center">
         <h1 className='font-semibold text-2xl '>
         Appointments
         </h1>
         <h1 className='font-bold text-6xl'>
          14
         </h1>
         <div>
          <h1 className='porcentageNumber font-bold text-xl'>
            +23%
          </h1>
         </div>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default BarChard
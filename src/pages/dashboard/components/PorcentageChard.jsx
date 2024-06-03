import React from 'react'

const PorcentageChard = () => {
  return (
    <>
      <div className="col-start-3 col-end-3 pb-10 px-10">
        <div className="card w-80 py-4  shadow-2xl">
          <div className="card-body items-center text-center">
         <h1 className='font-semibold text-2xl '>
         Montly Goal
         </h1>
         <h1 className='font-bold text-6xl'>
          50%
         </h1>
         <div>
         <progress className="progress progress-success w-56 h-5" value="50" max="100"></progress>
         </div>
            </div>
          </div>
        </div>
   
    </>
  )
}

export default PorcentageChard
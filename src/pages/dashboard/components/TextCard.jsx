import React from 'react'

const TextCard = ({texto}) => {
  return (
    <>
    <div className="col-start-2 col-end-3 pb-10 md:px-20">
    <button >
       <div className="card w-80 py-20  shadow-2xl">
          <div className="card-body items-center text-center">
            <h1 className='font-bold text-2xl'>
             {texto}
            </h1>
          </div>
        </div>
         
    </button>

       
            

      </div>
    </>
    
  )
}

export default TextCard
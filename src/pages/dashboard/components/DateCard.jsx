import React from "react";
import './dateCard.css'

const DateCard = () => {
  return (
    <>
          <div className="col-start-1 col-end-2 font-black text-5xl">
            <h1>
              Next Appointment
            </h1>
  
         
          </div>
          <div className="col-start-2 col-end-3 font-black text-5xl pb-5">
          Next Activity
          </div>
        <div className="card lg:card-side bg-base-100 shadow-2xl w-2/3 h-56 rounded-lg">
          
           <div className="date font-bold text-5xl content-center text-center p-5 ">
            <h1>
                MAY 
                  <h1 className="text-black">
                      23
                  </h1>
              
            </h1>
              
           </div>
         
          <div className="card-body">
            <h2 className="font-bold text-base">Place</h2>
            <p className="font-semibold text-base">CDO - Daniel Padnos Center</p>
            <h2 className="font-bold text-base">Psicologyst</h2>
            <p className="font-semibold text-base">Jorge Campos</p>
            <h2 className="font-bold text-base">Hour</h2>
            <p className="font-semibold text-base">9:00 - 10:00</p>
          </div>
        </div>
      
        

           
           <div className="card lg:card-side bg-base-100 shadow-2xl w-2/3 h-56 rounded-lg">
          
           <div className="date2 font-bold text-5xl content-center text-center p-5 ">
            <h1>
                MAY 
                  <h1 className="text-black">
                      30
                  </h1>
              
            </h1>
              
           </div>
         
          <div className="card-body">
            <h2 className="font-bold text-base">Place</h2>
            <p className="font-semibold text-base">El Semillero Hall</p>
            <h2 className="font-bold text-base">Subjet</h2>
            <p className="font-semibold text-base">Mind and Healt</p>
            <h2 className="font-bold text-base">Hour</h2>
            <p className="font-semibold text-base">8:00 - 10:00</p>
          </div>
        </div>
        
       

     
      
    </>
  );
};

export default DateCard;

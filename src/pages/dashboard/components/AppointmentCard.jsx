import React from "react";
import "./dateCard.css";

function AppointmentCard() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64" >
      <div className="date font-bold text-5xl content-center text-center p-5 ">
        <h1>
          MAY
          <p className="text-black"> 23</p>
        </h1>
      </div>
      <div className="card-body" >
        <h2 className="font-bold text-base">Place</h2>
        <p className="font-semibold text-base">CDO - Daniel Padnos Center</p>
        <h2 className="font-bold text-base">Psicologyst</h2>
        <p className="font-semibold text-base">Jorge Campos</p>
        <h2 className="font-bold text-base">Hour</h2>
        <p className="font-semibold text-base">9:00 - 10:00</p>
      </div>
    </div>
  );
}

export default AppointmentCard;

import React from "react";
import "./dateCard.css";

function EventCard() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-60 lg:w-96 lg:h-64">
      <div className="date2 font-bold text-5xl content-center text-center p-5 ">
        <h1>
          MAY
          <p className="text-black">30</p>
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
  );
}

export default EventCard;

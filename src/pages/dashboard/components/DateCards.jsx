import React from "react";
import AppointmentCard from "./AppointmentCard";
import EventCard from "./EventCard";

import "./dateCard.css";

const DateCards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly pt-10">
        <div>
          <div className="grid grid-rows-2-[max-content_1fr] gap-4 content-end items-end sm:gap-1 pt-8 lg:p-0 md:p-0">
            <div className="">
              <h1 className="text-2xl font-bold">Next Appointment</h1>
            </div>
            <div>
              <AppointmentCard />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-rows-2-[max-content_1fr] gap-4 content-end items-end sm:gap-1 pt-8 lg:p-0 md:p-0">
            <div className="">
              <h1 className="text-2xl font-bold">Next Activiy</h1>
            </div>
            <div>
              <EventCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCards;

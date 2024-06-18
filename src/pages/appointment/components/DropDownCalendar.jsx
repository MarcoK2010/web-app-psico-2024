import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const DropDownCalendar = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <div className=" font-bold text-5xl content-left text-left sm:p-10 p-2  ">
        <h1 className="font-black text-5xl">Select a date </h1>
        <div className=" w-60 content-center shadow-2xl rounded-md sm:mt-10 ml-5 mt-10 ">
          <Datepicker

            asSingle={true}
            value={value}
            onChange={handleValueChange}
            useRange={false}
            
          />
        </div>
      </div>
    </>
  );
};

export default DropDownCalendar;

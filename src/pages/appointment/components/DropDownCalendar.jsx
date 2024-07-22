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
      <div className=" content-left text-left md:p-10 p-2 md:mr-14 ">
        <h1 className="font-black text-4xl">Select a date</h1>
        <div className=" xl:w-96 content-center shadow-2xl rounded-md xl:mt-10 mt-10 xl:h-14 font-bold">
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

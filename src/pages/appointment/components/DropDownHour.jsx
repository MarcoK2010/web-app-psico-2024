import React from 'react'
import './dropDownHour.css'
import { Select, Option } from "@material-tailwind/react";

const DropDownHour = () => {
  return (
   <>
    <div className=" font-bold content-left text-left lg:p-10 p-2 mt-5">
    <h1 className="font-black text-5xl">Beggins At</h1>
    <div className="dropDownShadow w-60 mt-10 md:mt-10  shadow-2xl ">
      
      <Select
        color='green'
        label=" Hour"
        animate={{
          mount: { y: 0},
          unmount: { y: 25 },
        }}
      >
        <Option>8:00 AM</Option>
        <Option>9:00 AM</Option>
        <Option>10:00 AM</Option>
        <Option>11:00 AM</Option>
        <Option>12:00 AM</Option>
        <Option>1:00 PM</Option>
        <Option>2:00 PM</Option>
        <Option>3:00 PM</Option>
      </Select>
    </div>
</div>

   </>
  )
}

export default DropDownHour
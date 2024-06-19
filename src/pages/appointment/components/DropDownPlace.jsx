import React from "react";
import { Select, Option } from "@material-tailwind/react";

function DropDownPlace() {
  return (
    <>
      <div className="content-left text-left  sm:p-10 p-2 sm:pr-32">
        <h1 className="font-black text-4xl">Place</h1>
        <div className="xl:w-96 w-60 mt-10 xl:mt-10  shadow-2xl xl:h-14">
          <Select
            className="xl:h-14 font-bold "
            color="black"
            label="Place"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option>CDO - Daniel Padnos Center</Option>
            <Option>El Semillero</Option>
            <Option>Externo</Option>

          </Select>
        </div>
      </div>
    </>
  );
}

export default DropDownPlace;

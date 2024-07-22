import React from 'react'
import Select, { components } from "react-select";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
 
];

const Input = (props) => {
  const { autoComplete = props.autoComplete } = props.selectProps;
  return <components.Input {...props} autoComplete={autoComplete} className="xl:h-12 font-bold "/>;
};

const DropDownPacient = (props) => {
  return (
    <div className=" content-left text-left md:p-10 p-2 ">
        <h1 className="font-black text-4xl">Pacient</h1>
        <div className="xl:w-96 w-60 mt-10 xl:mt-10 shadow-2xl font-bold">
    <Select
    
      components={{ Input }}
      autoComplete="new-password"
      options={options}
    />

</div>
</div>
  );
};

export default DropDownPacient;
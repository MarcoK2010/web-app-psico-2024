import React from 'react'
import Select, { components } from "react-select";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
  { label: "Option 8", value: 8 },
  { label: "Option 9", value: 9 }
];

const Input = (props) => {
  const { autoComplete = props.autoComplete } = props.selectProps;
  return <components.Input {...props} autoComplete={autoComplete} />;
};

const DropDownPacient = (props) => {
  return (
    <div className=" font-bold content-left text-left sm:p-10 p-2 ">
        <h1 className="font-black text-5xl">Pacient</h1>
        <div className="w-60 mt-10 sm:mt-10 shadow-2xl ">
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
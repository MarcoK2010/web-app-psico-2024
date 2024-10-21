import React from "react";
import logo from "../../../../assets/logo.png";
import "./loginForm.css";

const TextForm = () => {
  return (
    <>
      <div className="text-center lg:text-right text-6xl font-black mt-0 lg:mt-10">
        <h1>El Patojismo’s Daniel</h1>
        <h1>Padnos Wellness</h1>
        <h1>Center WebApp</h1>
        <div className="text-4xl lg:mt-40">
          <h1>v1.0</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-end invisible lg:visible">
          <div className="w-36 lg:w-64">
            <img src={logo} alt="" />
          </div>
          <div className="w-36 lg:w-64">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;

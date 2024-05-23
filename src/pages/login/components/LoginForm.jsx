import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import "./loginForm.css";
const LoginForm = () => {
  return (
    <>
      <div className="text-xl md:w-1/2">
        <div className="card bg-base-100 shadow-xl mt-0 md:mt-10">
          <div className="card-body text-center justify-items-center ">
            <div className="justify-items-center">
              <UserCircleIcon className="h-60 w-full text-white-500" />
            </div>
            <div className="p-10 pb-0">
              <label className="input border-b-black flex items-center gap-2">
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
            <div className="p-10">
              <label className="input border-b-black flex items-center gap-2">
                <input type="password" className="grow" placeholder="Pasword" />
              </label>
            </div>
            <div className="pb-20 p-10">
              <button className="btn button rounded-3xl w-full h-16 text-white text-xl">
                Log in
              </button>
            </div>
            <h2 className="text-gray-400">
              All data will be saved at our own private database and will not be
              shared with any third party entity
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

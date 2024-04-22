import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const LoginForm = () => {
  return (
    <>
    <div className="grid grid-rows-2 text-xl">
         <div className="card w-5/12 bg-base-100 shadow-xl m-40">
        <div className="card-body  text-center justify-items-center ">
          <div className="justify-items-center">
            <UserCircleIcon className="h-60 w-full text-white-500" />
          </div>
          <div className="p-10 pb-0">
            <label className="input border-b-black flex items-center gap-2">
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
            <div className="p-10">
                <label class="input border-b-black flex items-center gap-2">
              <input type="password" class="grow" placeholder="Pasword" />
            </label>
            </div>
          <div className="pb-0 p-10"> 
             <button className="btn btn-secondary w-full h-16 ">Secondary</button>
          </div>
          </div>
        </div>
    </div>
     
    </>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./loginForm.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
 
   // Manejador del envío del formulario
   const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recarga de la página)

    // Los datos que se enviarán en la solicitud POST
    const loginData = {
      email: email,
      password: password,
    };

    const url = "http://127.0.0.1:8000/api/v1/auth/login/";

    try {
      // Hacemos la solicitud POST usando axios
      const response = await axios.post(url, loginData);
     

          // Almacenar tokens en localStorage
    localStorage.setItem('access', JSON.stringify(response.data.access));
    localStorage.setItem('refresh', JSON.stringify(response.data.refresh));
      
      navigate("/dashboard")
      

    } catch (error) {
      console.log("Algo salió mal en el login", error);
    }
  };
 



  return (
    <>
      <div className="text-xl md:w-1/2 md:p-24 ">
        <div className="card bg-base-100 shadow-xl mt-0 md:mt-10">
          <div className="card-body text-center justify-items-center ">
            <div className="justify-items-center">
              <UserCircleIcon className="h-60 w-full text-white-500" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-10 pb-0">
                <label className="input border-b-black flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>
              </div>
              <div className="p-10">
                <label className="input border-b-black flex items-center gap-2">
                  <input
                    type="password"
                    className="grow"
                    placeholder="Pasword"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
              </div>
              <div className="pb-20 p-10">
                <button
                  type="submit"
                  className="btn button rounded-3xl w-full h-16 text-white text-xl"
                >
                  Log in
                </button>
              </div>
            </form>

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

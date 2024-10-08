import React, {useEffect} from "react";
import LoginForm from "./components/LoginForm";
import TextForm from "./components/TextForm";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/redux/slices/authslice";
import {verifyToken} from "../../api/auth.js"; 

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {


    const fetchData = async () => {
      let accessToken = JSON.parse(localStorage.getItem('token'));
      let refreshToken = JSON.parse(localStorage.getItem('refresh'));
      if (!accessToken && !refreshToken) {
        console.log("No existe Token");
        localStorage.setItem("token", JSON.stringify({token:''})); 
        localStorage.setItem("refresh", JSON.stringify({token:''})); 
        return;
      }   

      const data = await verifyToken(refreshToken.token);
      console.log(data)
      // if (data && data.access) {
      //     localStorage.setItem('Token', data.access);
      //     dispatch(setAccessToken(data.access))
      //     console.log('Nuevo token de acceso guardado:', data.access);
      // }
    }
  
    fetchData().catch(console.error);

  },[]);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-evenly flex-wrap-reverse">
          <LoginForm />

          <TextForm />
        </div>
      </div>
    </>
  );
};

export default Login;

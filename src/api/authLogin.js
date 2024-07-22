import axios from "axios";
import loginForm from "../pages/login/components/LoginForm";

export const url = "http://127.0.0.1:8000//api/v1";
export const dataLogin = {
  "email": "alejandro@gmail.com",
  "password": "estaesunacontrasegura1",
};


export const urlAxios = url + "auth/login/";
export const data = {
  dataLogin
  
};

try {
  const respose = axios.post(urlAxios, data);
  console.log("Respuesta del servidor", respose.data);
  return respose.data;
  
} catch (error) {
  console.log("Algo salio mal en el login");
};

return null;

/*
export const Login = async () => {
  const urlAxios = url + "auth/login";
  data = {
    dataLogin,
  };

  try {
    const respose = await axios.post(urlAxios, data);
    console.log("Respuesta del servidor", respose.data);
    return response.data;
  } catch (error) {
    console.log("Algo salio mal en el login");
  }
};*/


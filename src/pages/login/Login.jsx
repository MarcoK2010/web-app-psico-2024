import React from "react"
import LoginForm from "./components/LoginForm";
import TextForm from "./components/TextForm";
import Animation from "../../../Animation - 1724101870523.json"
import Lottie from "lottie-react";

const Login = () => {
  return (
    <>
    <div className="w-full">
    <div className="fixed">
           <Lottie animationData={Animation}/>
        </div>
      <div className="flex justify-evenly flex-wrap-reverse" >
     
        <LoginForm/>
       
       
        <TextForm/>
      
      </div>
      
    </div>
   
    </>
  )
}

export default Login
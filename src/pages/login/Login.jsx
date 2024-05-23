import React from "react"
import LoginForm from "./components/LoginForm";
import TextForm from "./components/TextForm";


const Login = () => {
  return (
    <>
    <div className="w-full">
      <div className="flex justify-evenly flex-wrap-reverse" >
      
        <LoginForm/>
      
        <TextForm/>
      
      </div>
    </div>
    </>
  )
}

export default Login
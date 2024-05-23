import React from "react"
import LoginForm from "./components/LoginForm";
import TextForm from "./components/TextForm";


const Login = () => {
  return (
    <>
    <div className="w-full">
      <div className="grid grid-cols-2" >
      
        <LoginForm/>
      
        <TextForm/>
      
      </div>
    </div>
    </>
  )
}

export default Login
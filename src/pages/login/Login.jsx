import React from "react"
import LoginForm from "./components/LoginForm";
import TextForm from "./components/TextForm";


const Login = () => {
  return (
    <>
    <div className="grid grid-cols-2" >
    
      <LoginForm/>
    
      <TextForm/>
    
    </div>
     
    </>
  )
}

export default Login
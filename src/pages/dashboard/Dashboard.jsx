import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  return (
    <>
 
      <div className="absolute justify-center w-full px-6 mt-6">
        <NavBar/>
      </div>
          
          <SideBar />
  
    </>
  );
};

export default Dashboard;

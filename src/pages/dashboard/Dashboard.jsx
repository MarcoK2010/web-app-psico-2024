import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import DateCard from "./components/DateCard";

const Dashboard = () => {
  return (
    <>
 
      <div className="absolute justify-center w-full px-6 mt-6">
        <NavBar/>
      </div>
          
      <div class="grid col-span-2  gap-4">
      <SideBar />
      <div className="pt-44 grid grid-cols-2 gap-4 pl-96">
           <DateCard/>
      </div>
      
      </div>

  
    </>
  );
};

export default Dashboard;

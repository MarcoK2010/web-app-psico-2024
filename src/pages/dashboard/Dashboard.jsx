import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import DateCards from "./components/DateCards";
import ChartCards from "./components/ChartCards";

const Dashboard = () => {
  return (
    <>
      <section className="w-full" >
        <NavBar />
        <DateCards />
        <ChartCards />
        <SideBar color1={'#ff076f'}/>
      </section>
    </>
  );
};

export default Dashboard;

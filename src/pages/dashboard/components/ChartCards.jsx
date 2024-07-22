import React from "react";
import PorcentageChard from "./PorcentageChard";
import CircularChard from "./CircularChard";
import BarChard from "./BarChard";
import TextCard from "./TextCard";

const ChartCards = () => {
  return (
    <div className="mr-2 lg:mr-10 ml-2 lg:ml-10 md:mr-10 md:ml-10" >
      <div className="font-black text-2xl pt-20 pb-10">This Month</div>
      <div className="flex flex-wrap justify-evenly pt-10">
        <PorcentageChard />

        <BarChard />

        <CircularChard porncentaje={68} />

        <CircularChard porncentaje={48}/>

        <TextCard texto={"List Appointments"}/>

        <TextCard texto={"Generate Report"}/>
      </div>
    </div>
  );
};

export default ChartCards;

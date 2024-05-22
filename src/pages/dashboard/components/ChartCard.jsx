import React from "react";
import PorcentageChard from "./PorcentageChard";
import CircularChard from "./CircularChard";
import BarChard from "./BarChard";
import TextCard from "./TextCard";

const ChartCard = () => {
  return (
    <>
      <div className="font-black text-5xl pt-20 pb-20">This Month</div>
    
    
      <PorcentageChard/>
          
           <BarChard/>
           
           <CircularChard   />
           <div className="col-start-1 col-end-2">
            <CircularChard   />
           </div>
           <TextCard/>
           <div className="col-start-3 col-end-3">
                <TextCard/>
           </div>
           

         
    </>
  );
};

export default ChartCard;

import React from "react";

const PsychologistCard = ({image, title}) => {
  return (
    <>
    <button>
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
    </button>
    
    </>
  );
};

export default PsychologistCard;

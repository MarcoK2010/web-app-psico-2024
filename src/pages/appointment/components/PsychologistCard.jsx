import React from "react";
import './psychologistCard.css'
const PsychologistCard = ({image, title, content}) => {
  return (
    <>
    <button className="buttonCard">
         <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{content}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
    </button>
    
    </>
  );
};

export default PsychologistCard;

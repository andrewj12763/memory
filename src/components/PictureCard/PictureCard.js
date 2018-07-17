import React from "react";
import "./PictureCard.css";

const PictureCard = props => (
  <div className="card" id={props.id} onClick={() => props.scoreChecker(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PictureCard;
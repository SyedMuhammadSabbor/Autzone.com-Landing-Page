import React from "react";
import "./PopularItems.css";
import Rating from "./Rating.jsx";

export default function Sale(props) {
  return (
    <>
      <div className="market">
        <div className="market-pic">
          <img src={props.pic} alt="" />
        </div>
        <div className="price">{props.price}</div>
        <div className="advertise">
          <Rating rating={4} /> 
          <span className="rate">{props.rate}</span>
          <span className="sale">{props.Value}</span>
        </div>
        <div className="Product-name">{props.Info} </div>
      </div>
    </>
  );
}
